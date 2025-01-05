import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ExperienceCompany } from "@/lib/data";

export default function TimelineElementCompnay({
  company,
}: {
  company: ExperienceCompany;
}) {
  return (
    <Collapsible>
      <CollapsibleTrigger className="mt-2 text-xs font-semibold">
        {company.name} • {company.city}, {company.state} ...
      </CollapsibleTrigger>
      <CollapsibleContent className="!mb-2 !font-normal text-gray-500 !text-sm font-[family-name:var(--font-metrophobic)]">
        {company.summary}
      </CollapsibleContent>
    </Collapsible>
  );
}
