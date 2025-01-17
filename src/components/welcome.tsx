"use client";

import { useSectionInView } from "@/lib/hooks";

export default function Welcome() {
  const { ref } = useSectionInView("Home");

  return (
    <section ref={ref} id="welcome">
      <div className="flex items-end justify-between w-full">
        <div className="font-[family-name:var(--font-orbitron)] italic text text-5xl uppercase">
          Andy Frith
        </div>
        <div className="font-[family-name:var(--font-orbitron)] font-semibold italic text text-l uppercase text-[#39FF14]">
          React // Full-Stack // Lead
        </div>
      </div>
      <div className="font-[family-name:var(--font-metrophobic)] text-sm text-gray-500">
        I enjoy the challenge of frontend development while solving complex,
        multi-dimensional problems in a large-scale software architecture. I
        believe in the extreme collaboration within and between teams- unified
        in vision- to achieve engineering, product and business success. With
        15+ years of UI and full-stack software development experience, I
        leverage{" "}
        <span className="font-bold text-[#39FF14]">
          React, Next.js, Node.js, TypeScript and GraphQL
        </span>{" "}
        in development of high-quality software solutions. I’m experienced in
        delivery of performant features using techniques; such as, server-side
        rendering (<span className="font-bold text-[#39FF14]">SSR</span>). I am
        interested in maximizing the exciting potential of{" "}
        <span className="text-[#39FF14] font-bold">AI</span> tools and
        technologies to build products and experiences that users love. I look
        forward to my continued evolution as a software engineer and delivering
        best quality results with great passion and enthusiasm in the future.
      </div>
    </section>
  );
}
