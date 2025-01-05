import { ExperienceRole } from "@/lib/data";
import React from "react";

export default function TimelineElementHeader({
  role,
}: {
  role: ExperienceRole;
}) {
  return (
    <h3 className="font-semibold capitalize text-sm text-[#2df82c] bg-gray-600 p-2 mb-2">
      <a href="" className="hover:underline">
        {role}
      </a>
    </h3>
  );
}
