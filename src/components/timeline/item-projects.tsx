import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ProjectType } from "@/lib/data";
import Projects from "./elements/projects";

export default function TimelineElementProjects({
  projects,
}: {
  projects: Array<ProjectType>;
}) {
  return (
    <Collapsible>
      <CollapsibleTrigger className="mt-2 text-xs font-semibold hover:text-[#39FF14]">
        Initiatives & Products ...
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Projects projects={projects} />
      </CollapsibleContent>
    </Collapsible>
  );
}
