"use client";

import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    clipPath: "circle(0% at 50% 50%)",
  },
  animate: {
    clipPath: "circle(100% at 50% 50%)",
    transition: { ease: "easeInOut", duration: 1 },
  },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView={"animate"}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
