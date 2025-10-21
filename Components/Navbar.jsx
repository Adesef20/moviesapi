"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";


const Navbar = () => {

    const [open, setOpen] = useState(false);

    return(
       <main className="w-full  bg-gray-900 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <Link href="/" className="text-2xl font-bold text-yellow-400">
            MovieBox<span className="text-red-500">🎬</span>
            </Link>
            <ul className="hidden md:flex gap-8 font-medium">
                <li>
                    <Link href="/" className="hover:text-yellow-400 transition">
                    Home
                    </Link>
                </li>
                <li>
                    <Link href="/Movies" className="hover:text-yellow-400 transition">
                    Movies
                    </Link>
                </li>
                <li>
                    <Link href="/Trending" className="hover:text-yellow-400 transition">
                    Trending
                    </Link>
                </li>
                <li>
                    <Link href="/Favourite" className="hover:text-yellow-400 transition">
                    Favourite
                    </Link>
                </li>
            </ul>

            <div className="hidden md:flex items-center gap-2">
                <input
                 type="text"
                 placeholder="Search Movies..."
                 className="bg-gray-800 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                />
            </div>
            <button 
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            >
            {open ? <FiX /> : <FiMenu />}
            </button>
        </div>
        {open && (
            <ul className="md:hidden bg-gray-800 text-white px-6 py-4 space-y-4 font-medium">
                <li>    
                    <Link href="/" className="block hover:text-yellow-400 transition">
                    Home
                    </Link>
                </li>
                <li>
                    <Link href="/Movies" className="block hover:text-yellow-400 transition">
                    Movies
                    </Link>
                </li>
                <li>
                    <Link href="/Trending" className="block hover:text-yellow-400 transition">
                    Trending
                    </Link>

                </li>
                <li>
                    <Link href="/Favourite" className="block hover:text-yellow-400 transition">  
                    Favourite
                    </Link>
                </li>
            </ul>
        )}
       </main>
    );
}

export default Navbar;