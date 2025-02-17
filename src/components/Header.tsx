"use client";
import "@/styles/Header.css"
import Link from "next/link";

const Header = () => {

  return (
    <header className={`shadow-md py-4 px-6 `}>
      <div className="h-full flex items-center justify-between">
        {/* Logo */}
        <div
          className="logo-text cursor-pointer"
        >
         <Link href="/"> PORTFOLIO</Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-6">
        <Link
  href="/"
  className="text-gray-700 transition bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent hover:underline hover:decoration-white"
>
  About Me
</Link>

<Link
  href="/projects"
  className="text-gray-700 transition bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent hover:underline hover:decoration-white"
>
  Projects
</Link>
<Link
  href="/resume"
  className="text-gray-700 transition bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent hover:underline hover:decoration-white"
>
  Resume
</Link>
        </nav>
        {/* Authentication Buttons */}
        <div className="">
            <Link href={"/contact-me"}><button className="Btn w-full px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition">
              
            </button></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;