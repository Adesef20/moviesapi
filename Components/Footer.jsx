"use client";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return(
        <footer className="bg-gray-900 text-white py-10 mt-10">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                 <div>
                    <h2 className="text-xl font-bold text-white mb-4">MovieBox</h2>
                    <p className="text-gray-400">
                        Your ultimate destination for discovering and exploring movies, reviews, and trailers. 
                        Discoveer and stream your favorite films all in one place.
                    </p>
                 </div>
                 <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul>
                        <li className="flex flex-col space-y-2">
                            <Link href="/" className="my-2 hover:text-yellow-500">Home</Link>
                            <Link href="/Movies" className="my-2 hover:text-yellow-500">Movies</Link>
                            <Link href="/Trending" className="my-2 hover:text-yellow-500">Trending</Link>
                            <Link href="/Favourite" className="my-2 hover:text-yellow-500">Favourite</Link>
                        </li>
                    </ul>
                 </div>
                 <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <Link href="/FfacebookF" className="hover:text-yellow-400"> <FaFacebookF /></Link>
                        <Link href="/FaTwitter" className="hover:text-yellow-400"> <FaTwitter /></Link>
                        <Link href="/FaInstagram" className="hover:text-yellow-400"> <FaInstagram /></Link>
                        <Link href="/FaYoutube" className="hover:text-yellow-400"> <FaYoutube /></Link>
                    </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
                  <p className="text-gray-400 mb-4">Subscribe to get the latest movies and updates directly in your inbox.</p>
                  <form className="flex flex-col sm:flex-row gap-2">
                  <input 
                   type="email" 
                   placeholder="Enter your email" 
                   className="px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500 text-white"
                />

                <button 
                  type="submit" 
                  className="px-1 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md transition-colors"
                  >
                  Subscribe
                </button>
          </form>
        </div>

        </div>
         <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} MovieBox. All rights reserved by ShyNaDev.
        </div>
            
    </footer>
    );
}

export default Footer;