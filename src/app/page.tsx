"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#09090b] text-white overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4 block">
            2026 Edition
          </span>
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-4 italic">
            STUDIO DIARY
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl max-w-md mx-auto font-light italic">
            The sketchbook of a Design Engineer.
          </p>
        </motion.div>
      </section>

      {/* 2. PROJECTS GRID */}
      <section id="projects" className="w-full max-w-5xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project: Project) => {
            const isExternal = project.link.startsWith("http");
            const cardContent = (
              <div>
                <div className="aspect-[4/3] relative bg-zinc-800/60">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="font-semibold tracking-tight text-white">
                      {project.title}
                    </h2>
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 border border-zinc-700 rounded px-2 py-1">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            );
            return (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="rounded-lg border border-zinc-800 overflow-hidden bg-zinc-950/30"
              >
                {isExternal ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                    {cardContent}
                  </a>
                ) : (
                  <Link href={project.link} className="block">
                    {cardContent}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. ABOUT ME SECTION (NEW) */}
      <section id="about" className="w-full max-w-5xl mx-auto px-6 py-32 border-t border-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: Bio */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tighter italic">About the Artist & Engineer</h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed text-lg">
              <p>
                I am a final-year Computer Science student at , 
                currently navigating the intersection of robotic logic and visual design.
              </p>
              <p>
                This diary is a collection of my technical explorations and fine art sketches—a 
                place where code meets the sketchbook.
              </p>
            </div>
            {/* Signature Placeholder */}
            <div className="pt-8">
              <p className="text-zinc-600 text-sm italic mb-1">Sincerely,</p>
              <p className="text-4xl font-signature text-white">Vaishnavi</p>
            </div>
          </div>

          {/* Right: Quick Stats & Status */}
          <div className="space-y-10 border-l border-zinc-900 pl-10">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-600 mb-3">Status</h3>
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <p className="text-sm text-zinc-300">Available for 2026 Remote Opportunities</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-600 mb-3">Location</h3>
              <p className="text-zinc-300">India</p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-600 mb-3">Tech Stack</h3>
              <p className="text-sm text-zinc-400 leading-loose">
                Figma / React / Next.js / Tailwind / Python / Framer Motion
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 text-center text-zinc-700 text-[10px] tracking-widest uppercase">
        © 2026 Studio Diary — All Rights Reserved
      </footer>
    </main>
  );
}