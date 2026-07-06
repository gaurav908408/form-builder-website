"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkLogin();

    window.addEventListener("storage", checkLogin);

    return () => {
      window.removeEventListener("storage", checkLogin);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setIsLoggedIn(false);

    toast.success("Logged out successfully");

    router.replace("/login");
  };

  const linkClass =
    "block py-2 hover:text-yellow-300 transition font-medium";

  return (
    <nav className="sticky top-0 z-50 bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold hover:text-yellow-300 transition"
          >
            Form Builder
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">

            {pathname === "/" && (
              <>
                <Link href="/login" className="hover:text-yellow-300">
                  Login
                </Link>

                <Link href="/register" className="hover:text-yellow-300">
                  Register
                </Link>
              </>
            )}

            {pathname === "/login" && (
              <>
                <Link href="/" className="hover:text-yellow-300">
                  Home
                </Link>

                <Link href="/register" className="hover:text-yellow-300">
                  Register
                </Link>
              </>
            )}

            {pathname === "/register" && (
              <>
                <Link href="/" className="hover:text-yellow-300">
                  Home
                </Link>

                <Link href="/login" className="hover:text-yellow-300">
                  Login
                </Link>
              </>
            )}

            {!["/", "/login", "/register"].includes(pathname) &&
              isLoggedIn && (
                <>
                  <Link href="/" className="hover:text-yellow-300">
                    Home
                  </Link>

                  <Link
                    href="/dashboard"
                    className="hover:text-yellow-300"
                  >
                    Dashboard
                  </Link>

                  <Link
                    href="/create-form"
                    className="hover:text-yellow-300"
                  >
                    Create Form
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition"
                  >
                    Logout
                  </button>
                </>
              )}

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
          >
            {menuOpen ? (
              <HiX size={30} />
            ) : (
              <HiMenu size={30} />
            )}
          </button>

        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div className="md:hidden border-t border-blue-500 py-4 space-y-2">

            {pathname === "/" && (
              <>
                <Link
                  href="/login"
                  className={linkClass}
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className={linkClass}
                >
                  Register
                </Link>
              </>
            )}

            {pathname === "/login" && (
              <>
                <Link
                  href="/"
                  className={linkClass}
                >
                  Home
                </Link>

                <Link
                  href="/register"
                  className={linkClass}
                >
                  Register
                </Link>
              </>
            )}

            {pathname === "/register" && (
              <>
                <Link
                  href="/"
                  className={linkClass}
                >
                  Home
                </Link>

                <Link
                  href="/login"
                  className={linkClass}
                >
                  Login
                </Link>
              </>
            )}

            {!["/", "/login", "/register"].includes(pathname) &&
              isLoggedIn && (
                <>
                  <Link
                    href="/"
                    className={linkClass}
                  >
                    Home
                  </Link>

                  <Link
                    href="/dashboard"
                    className={linkClass}
                  >
                    Dashboard
                  </Link>

                  <Link
                    href="/create-form"
                    className={linkClass}
                  >
                    Create Form
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full mt-2 bg-red-500 hover:bg-red-600 py-2 rounded-lg transition"
                  >
                    Logout
                  </button>
                </>
              )}

          </div>
        )}

      </div>
    </nav>
  );
}