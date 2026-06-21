import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar(){
  const [open,setOpen]=useState(false)
  return (
    <header className="fixed w-full z-40 top-0 left-0"> 
      <div className="backdrop-blur glass py-3 px-4 sm:px-8 flex items-center justify-between border-b border-transparent">
        <Link href="/" className="text-xl font-semibold text-auraRed">Aura Frozen Coconut</Link>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#recipes">Recipes</a>
          <a href="#contact" className="px-4 py-2 rounded-md bg-auraGreen text-white">Contact</a>
        </nav>
        <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="menu">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </button>
      </div>
      {open && (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} className="md:hidden bg-white/60 backdrop-blur px-6 py-4">
          <a href="#about" className="block py-2">About</a>
          <a href="#products" className="block py-2">Products</a>
          <a href="#recipes" className="block py-2">Recipes</a>
          <a href="#contact" className="block py-2">Contact</a>
        </motion.div>
      )}
    </header>
  )
}
