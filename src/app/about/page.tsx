"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <main className="min-h-screen bg-[#09090b] text-white pt-40 px-6 pb-24 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-800/20 blur-[120px] rounded-full" />
      </div>

      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="mb-24">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter italic font-serif leading-[0.9]">
            Artist <span className="text-zinc-700">&</span> <br />
            <span className="text-zinc-500 underline decoration-zinc-800 underline-offset-8">Engineer</span>
          </h1>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          
          {/* LEFT: The Narrative (6 Columns) */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-8">
            <div className="space-y-6 text-zinc-400 text-xl md:text-2xl leading-relaxed font-light">
              <p>
                I live in the sweet (and slightly chaotic) spot where I can’t decide if I’m 
                more obsessed with a perfect <span className="text-white">React hook</span> or 
                a perfect <span className="text-white">pen stroke</span>.
              </p>
              
              <p>
                My philosophy: the web shouldn't just work—it should feel like a piece of art. 
                I specialize in <span className="text-white">Frontend & UI/UX</span>, 
                crafting interfaces that prioritize smooth motion and pixel-perfect typography.
              </p>

              <p>
                When the screen goes dark, I’m usually with a ballpoint pen in hand. 
                My <span className="text-white italic">Studio Diary</span> is where anatomy 
                sketches meet design systems—a meditative balance between the 
                logical and the expressive.
              </p>
            </div>

            {/* Signature Area */}
            <div className="pt-12 border-t border-zinc-900">
              <p className="text-zinc-600 text-sm tracking-widest uppercase mb-4">Hand-signed</p>
              <p className="text-6xl font-signature text-white select-none">Vaishnavi</p>
            </div>
          </motion.div>

          {/* RIGHT: The Sidebar (5 Columns) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-16">
            
            {/* Availability Widget */}
            <div className="p-8 rounded-2xl bg-zinc-950/50 border border-zinc-900 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold">2026 Status</h3>
              </div>
              <p className="text-zinc-300 text-lg">Available for global Design Engineering collaborations.</p>
            </div>

            {/* Personalization: The "Now" Section */}
            <div className="space-y-8 pl-4">
              <div>
                <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-600 mb-4 font-bold">Currently Curating</h3>
                <ul className="space-y-4 text-sm text-zinc-400">
                  <li className="flex justify-between border-b border-zinc-900 pb-2">
                    <span>Listening</span>
                    <span className="text-white italic text-right">Headlock — Imogen Heap</span>
                  </li>
                  <li className="flex justify-between border-b border-zinc-900 pb-2">
                    <span>Reading</span>
                    <span className="text-white italic text-right">Slaughterhouse-Five</span>
                  </li>
                  <li className="flex justify-between border-b border-zinc-900 pb-2">
                    <span>Obsessing</span>
                    <span className="text-white italic text-right">Micro-interactions</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-600 mb-4 font-bold">Core Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'Framer Motion', 'TypeScript', 'Figma', 'Fine Art'].map((tool) => (
                    <span key={tool} className="px-3 py-1 text-[10px] uppercase tracking-widest border border-zinc-800 rounded-full text-zinc-500">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}