import { ExperienceRole } from "@/lib/data";
import React from "react";

export default function TimelineElementHeader({
  role,
}: {
  role: ExperienceRole;
}) {
  return (
    <h3 className="font-semibold capitalize text-sm text-[#39FF14] bg-gray-600 p-2 mb-2">
      {role}
    </h3>
  );
}
