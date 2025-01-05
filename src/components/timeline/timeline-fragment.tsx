import React from "react";
import TimelineElement from "./timeline-element";
import { Experience } from "@/lib/data";

export default function TimelineFragment({ item }: { item: Experience }) {
  return (
    <React.Fragment key={item.id}>
      <TimelineElement item={item} />
    </React.Fragment>
  );
}
