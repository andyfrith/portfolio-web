import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ResultType } from "@/lib/data";
import Achievements from "@/components/timeline/elements/achievements";

export default function TimelineElementAchievements({
  achievements,
}: {
  achievements: Array<ResultType>;
}) {
  return (
    <Collapsible>
      <CollapsibleTrigger className="mt-2 text-xs font-semibold hover:text-[#39FF14]">
        Achievements ...
      </CollapsibleTrigger>
      <CollapsibleContent className="!mt-1 !font-normal text-gray-500 !text-sm font-[family-name:var(--font-metrophobic)]">
        <Achievements achievements={achievements} />
      </CollapsibleContent>
    </Collapsible>
  );
}
