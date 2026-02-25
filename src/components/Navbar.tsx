"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 border-b border-white/5 backdrop-blur-lg backdrop-saturate-150 supports-[backdrop-filter]:bg-zinc-950/20 bg-zinc-950/40"
    >
      {/* Your Name/Logo */}
      <Link href="/" className="text-white font-bold tracking-tighter text-xl">
        V<span className="text-zinc-500 font-light"></span>
      </Link>
      
      {/* Links */}
      <div className="flex gap-8 text-xs tracking-[0.2em] text-zinc-500 uppercase">
        <Link href="https://instagram.com/_vyrx_._" target="_blank" className="hover:text-white transition-all">Art</Link>
        <Link href="/projects" className="hover:text-white transition-all">Projects</Link>
        <Link href="/about" className="hover:text-white transition-all">About</Link>
      </div>
    </motion.nav>
  );
}