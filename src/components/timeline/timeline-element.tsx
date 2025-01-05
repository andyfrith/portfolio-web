import React from "react";
import { Star } from "lucide-react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import TimelineElementHeader from "./timeline-element-header";
import TimelineElementCompany from "./timeline-element-company";
import TimelineElementSummary from "./timeline-element-summary";
import TimelineElementAchievements from "./timeline-element-achievements";
import TimelineElementSkills from "./timeline-element-skills";
import { Experience } from "@/lib/data";

export default function TimelineElement({ item }: { item: Experience }) {
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
      <TimelineElementHeader role={item.role} />
      <TimelineElementCompany company={item.company} />
      <TimelineElementSummary summary={item.summary} />
      <TimelineElementAchievements achievements={item.results} />
      <TimelineElementSkills skills={item.skills} />
    </VerticalTimelineElement>
  );
}
