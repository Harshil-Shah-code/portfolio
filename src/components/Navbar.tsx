"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter,usePathname } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [adminMenuOpen, setAdminMenuOpen] = useState(false);
  const pathname = usePathname(); 
  const hideHeader = pathname === "/login" || pathname === "/register";

  const handleLogout = () => {
    // Clear local storage
    localStorage.clear();
  
    // Clear session storage
    sessionStorage.clear();
  
    // Clear cookies
    clearCookies();
    // Redirect to login page (optional)
    router.push("/login"); 
  };

  const clearCookies = () => {
    document.cookie.split(";").forEach((cookie) => {
      const [name] = cookie.split("="); // Extract cookie name
      document.cookie = `${name.trim()}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`;
    });
  };
  
  
  
  return (
    <header className={`bg-white shadow-md py-4 px-6 ${hideHeader ? "hidden" : ""}`}>
      <div className="flex flex-col justify-between h-full">
        <div>
        {/* Logo */}
        <div
          className="text-2xl font-bold text-blue-600 cursor-pointer"
          onClick={() => router.push("/")}
        >
          MyApp
        </div>

        {/* Navigation Links */}
        <nav className="mt-5">
          <ul className="flex flex-col space-y-2">
            {/* Services Section */}
            <li>
              <div className="border-b border-gray-100">
                <button
                  onClick={() => {setDropdownOpen(!dropdownOpen);setAdminMenuOpen(false)}}
                  className="w-full flex items-center justify-between py-2 text-gray-700 hover:text-blue-500"
                >
                  <span>Services</span>
                  <span className={`transform transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
              </div>
              <div className={`overflow-hidden transition-all duration-200 ${dropdownOpen ? 'max-h-48' : 'max-h-0'}`}>
                <ul className="bg-gray-50 py-2 text-black">
                  <li>
                    <Link href="/services/web-development">
                      <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Web Development
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/mobile-apps">
                      <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Mobile Apps
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/seo">
                      <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        SEO Optimization
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Blog Link */}
            <li>
              <div className="border-b border-gray-100">
                <Link href="/blog">
                  <div className="py-2 text-gray-700 hover:text-blue-500 cursor-pointer">
                    Blog
                  </div>
                </Link>
              </div>
            </li>

            {/* Admin Section */}
            <li>
              <div className="border-b border-gray-100">
                <button
                  onClick={() => {setAdminMenuOpen(!adminMenuOpen);setDropdownOpen(false)}}
                  className="w-full flex items-center justify-between py-2 text-gray-700 hover:text-blue-500"
                >
                  <span>Admin Panel</span>
                  <span className={`transform transition-transform duration-200 ${adminMenuOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
              </div>
              <div className={`overflow-hidden transition-all duration-200 ${adminMenuOpen ? 'max-h-48' : 'max-h-0'}`}>
                <ul className="bg-gray-50 py-2 text-black">
                  <li>
                    <Link href="/admin-dashboard">
                      <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Dashboard
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard">
                      <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Manage Users
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/settings">
                      <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Settings
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
        </div>
        {/* Authentication Buttons */}
        <div className="mt-6 flex flex-col gap-y-3">
            <button onClick={handleLogout}className="w-full px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition">
              Logout
            </button>
          {/* <Link href="/@auth/register">
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              Register
            </button>
          </Link> */}
        </div>
      </div>
    </header>
  );
};

export default Header;