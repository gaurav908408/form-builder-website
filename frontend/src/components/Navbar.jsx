"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import toast from "react-hot-toast";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setIsLoggedIn(false);

    toast.success("Logged out successfully");

    router.replace("/login");
  };

  return (
    <nav className="bg-blue-600 text-white px-8 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold hover:text-yellow-300 transition"
        >
          Form Builder
        </Link>

        <div className="flex items-center gap-6">

          {/* Home Page */}
          {pathname === "/" && (
            <>
              <Link
                href="/login"
                className="hover:text-yellow-300 transition"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="hover:text-yellow-300 transition"
              >
                Register
              </Link>
            </>
          )}

          {/* Login Page */}
          {pathname === "/login" && (
            <>
              <Link
                href="/"
                className="hover:text-yellow-300 transition"
              >
                Home
              </Link>

              <Link
                href="/register"
                className="hover:text-yellow-300 transition"
              >
                Register
              </Link>
            </>
          )}

          {/* Register Page */}
          {pathname === "/register" && (
            <>
              <Link
                href="/"
                className="hover:text-yellow-300 transition"
              >
                Home
              </Link>

              <Link
                href="/login"
                className="hover:text-yellow-300 transition"
              >
                Login
              </Link>
            </>
          )}

          {/* Logged In Pages */}
          {!["/", "/login", "/register"].includes(pathname) && isLoggedIn && (
            <>
              <Link
                href="/"
                className="hover:text-yellow-300 transition"
              >
                Home
              </Link>

              <Link
                href="/dashboard"
                className="hover:text-yellow-300 transition"
              >
                Dashboard
              </Link>

              <Link
                href="/create-form"
                className="hover:text-yellow-300 transition"
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
      </div>
    </nav>
  );
}