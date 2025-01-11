"use client";

import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineFragment from "./timeline-fragment";
import { ExperienceType } from "@/lib/data";

export default function Timeline({ data }: { data: Array<ExperienceType> }) {
  return (
    <>
      <VerticalTimeline className="!w-full !mt-4" lineColor="grey">
        {data.map((item) => (
          <TimelineFragment key={item.id} item={item} />
        ))}
      </VerticalTimeline>
    </>
  );
}
