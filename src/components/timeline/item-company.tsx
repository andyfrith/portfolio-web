import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { CompanyType } from "@/lib/data";
import Company from "./elements/company";

export default function ItemCompany({ company }: { company: CompanyType }) {
  return (
    <Collapsible>
      <CollapsibleTrigger className="mt-2 text-xs font-semibold hover:text-[#39FF14]">
        {company.name} • {company.city}, {company.state} ...
      </CollapsibleTrigger>
      <CollapsibleContent className="!mb-2 !font-normal text-gray-500 !text-sm font-[family-name:var(--font-metrophobic)]">
        <Company company={company} />
      </CollapsibleContent>
    </Collapsible>
  );
}
