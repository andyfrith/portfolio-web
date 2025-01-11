import { ExperienceType } from "@/lib/data";
import Skills from "./skills";
import Success from "./timeline/elements/success";

export default function Experience({
  experience,
}: {
  experience: ExperienceType;
}) {
  return (
    <div className="mb-14 bg-[#f3f4f6] p-4">
      <div className="flex items-end justify-between w-full mb-1">
        <div className="font-[family-name:var(--font-orbitron)] italic text text-md ">
          <div className="text-[#2df82c] bg-gray-600 p-2 mb-2 uppercase font-bold">
            {experience.role}
          </div>
        </div>
        <div className="font-[family-name:var(--font-orbitron)] italic text text-xs uppercase font-semibold">
          {experience.dates}
        </div>
      </div>
      <div className="text-sm font-semibold">
        {experience.company.name} • {experience.company.city},{" "}
        {experience.company.state} • {experience.company.summary}
      </div>
      <div className="font-[family-name:var(--font-metrophobic)] text-sm mt-2 text-gray-500">
        {experience.summary}
      </div>
      <Success data={experience.results} />
      <Skills skills={experience.skills} />
    </div>
  );
}
