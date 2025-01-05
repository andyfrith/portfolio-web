import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import Success from "../success";
import { ExperienceResults } from "@/lib/data";

export default function TimelineElementAchievements({
  achievements,
}: {
  achievements: ExperienceResults;
}) {
  return (
    <Collapsible>
      <CollapsibleTrigger className="mt-2 text-xs font-semibold">
        Achievements ...
      </CollapsibleTrigger>
      <CollapsibleContent className="!mt-1 !font-normal text-gray-500 !text-sm font-[family-name:var(--font-metrophobic)]">
        <Success data={achievements} />
      </CollapsibleContent>
    </Collapsible>
  );
}
