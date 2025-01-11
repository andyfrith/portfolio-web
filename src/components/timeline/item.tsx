import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Star } from "lucide-react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import Header from "@/components/timeline/item-header";
import Summary from "@/components/timeline/elements/summary";
import Achievements from "@/components/timeline/item-achievements";
import Skills from "./item-skills";
import { ExperienceType } from "@/lib/data";
import Projects from "./item-projects";
import Company from "./item-company";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Item({ item }: { item: ExperienceType }) {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { ref } = useSectionInView(`role-${item.id}`);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#f3f4f6",
        boxShadow: "none",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        textAlign: "left",
        padding: "1.3rem 2rem",
      }}
      contentArrowStyle={{
        borderRight: "0.4rem solid #9ca3af",
      }}
      date={item.dates}
      icon={<Star />}
      iconStyle={{
        background: "white",
        fontSize: "1.5rem",
      }}
    >
      <motion.section
        id={`role-${item.id}`}
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <Link
          href={`#role-${item.id}`}
          onClick={() => {
            setActiveSection(`role-${item.id}`);
            setTimeOfLastClick(Date.now());
          }}
        >
          <Header role={item.role} />
        </Link>
        <Company company={item.company} />
        <Summary summary={item.summary} />
        <Achievements achievements={item.results} />
        {item.projects && <Projects projects={item.projects} />}
        <Skills skills={item.skills} />
      </motion.section>
    </VerticalTimelineElement>
  );
}
