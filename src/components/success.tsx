"use client";

import { ExperienceResults } from "@/lib/data";
import React from "react";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
  },
  animate: (index: number) => ({
    opacity: 1,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Success({ data }: { data: ExperienceResults }) {
  return (
    <div id="success" className="max-w-[53rem]">
      <ul className="text-sm text-gray-500 font-[family-name:var(--font-metrophobic)] list-disc">
        {data.map((successItem) => (
          <motion.li
            className="ml-4"
            key={successItem.id}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={successItem.id}
          >
            {successItem.summary}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
