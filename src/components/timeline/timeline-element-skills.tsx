import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import Skills from "@/components/skills";
import { ExperienceSkills } from "@/lib/data";

export default function TimelineElementSkills({
  skills,
}: {
  skills: ExperienceSkills;
}) {
  return (
    <Collapsible>
      <CollapsibleTrigger className="mt-2 text-xs font-semibold">
        Technologies & Skills ...
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Skills data={skills} />
      </CollapsibleContent>
    </Collapsible>
  );
}
