import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="pt-28 pb-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-6/12 text-center md:text-left">
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="text-4xl sm:text-5xl font-extrabold">Premium Frozen Coconut</motion.h1>
          <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="mt-4 text-gray-700 max-w-xl">Freshly grated Sri Lankan coconuts frozen at peak freshness for authentic taste and nutrition.</motion.p>
          <div className="mt-6 flex gap-3 justify-center md:justify-start">
            <a href="#products" className="px-6 py-3 bg-auraRed text-white rounded-md shadow">Shop Now</a>
            <a href="#contact" className="px-6 py-3 border border-gray-200 rounded-md">Contact Us</a>
          </div>
        </div>
        <div className="md:w-6/12 flex justify-center">
          <motion.div initial={{scale:0.98}} whileInView={{scale:1}} transition={{type:'spring',stiffness:80}} className="w-72 md:w-80 lg:w-96">
            <Image src="/images/auro_coco_400g.png" alt="Aura 400g" width={600} height={800} priority />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
