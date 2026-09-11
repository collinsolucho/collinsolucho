import {
  data,
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  NavLink,
} from "react-router";
import { Toaster, toast } from "react-hot-toast";
import { Menu, X } from "lucide-react";
import "./app.css";
import { useEffect, useState } from "react";
import { commitSession, getSession } from "./.server/session";

export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export async function loader({ request }) {
  let session = await getSession(request.headers.get("Cookie"));
  let messages = session.get("messages") || [];
  let toastMessage = session.get("toastMessage");

  return data(
    { messages, toastMessage },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export function Layout({ children }) {
  let { messages, toastMessage } = useLoaderData();
  let [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    if (!toastMessage) {
      return;
    }
    const { message, type } = toastMessage;

    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      default:
        throw new Error(`${type} is not handled`);
    }
  }, [toastMessage]);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#223252] bg-[#0B1220]/95 backdrop-blur-sm text-[#DCE4F5]">
          <div className="flex justify-between items-center px-4 md:px-10 py-3">
            {/* === LOGO === */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-9 w-9 rounded-sm border border-[#2A3B5C] object-cover"
              />
              <span className="flex flex-col leading-tight">
                <span className="font-mono text-base font-bold text-amber-400">
                  collins.dev
                </span>
                <span className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] text-[#7C89A8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                  available
                </span>
              </span>
            </Link>

            {/* === DESKTOP NAV === */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `relative font-mono text-sm py-1 transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px] after:bg-amber-400 after:transition-all ${
                      isActive
                        ? "text-amber-400 after:w-full"
                        : "text-[#B7C2DC] hover:text-amber-300 after:w-0 hover:after:w-full"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* === MOBILE MENU BUTTON === */}
            <button
              onClick={() => setIsClicked(!isClicked)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-sm border border-[#2A3B5C] text-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
            >
              {isClicked ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* === MOBILE NAV === */}
          {isClicked && (
            <nav className="md:hidden border-t border-[#223252] bg-[#0F1A2E] animate-slide-down">
              <ul className="flex flex-col py-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <NavLink
                      to={item.to}
                      onClick={() => setIsClicked(false)}
                      className={({ isActive }) =>
                        `block px-6 py-3 font-mono text-sm border-l-2 transition-colors ${
                          isActive
                            ? "border-amber-400 text-amber-400 bg-amber-400/5"
                            : "border-transparent text-[#B7C2DC] hover:border-amber-400 hover:text-amber-300"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </header>

        {children}
        <Toaster />
        <ScrollRestoration />
        <Scripts />
        {/* === FOOTER === */}
        <div className="border-t border-[#223252] bg-[#0B1220] py-5 text-center">
          <p className="font-mono text-xs text-[#7C89A8]">
            © {new Date().getFullYear()}{" "}
            <span className="text-amber-400">@collinsolucho</span> — all rights
            reserved.
          </p>
        </div>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

const navItems = [
  { to: "/", label: "home" },
  { to: "/about", label: "about" },
  { to: "/contact", label: "contact" },
  { to: "/contact", label: "message" },
];
