import { Experience as TExperience } from "@/lib/data";
import Skills from "./skills";
import Success from "./success";

export default function Experience({ data }: { data: TExperience }) {
  return (
    <div className="mb-14 bg-[#f3f4f6] p-4">
      <div className="flex items-end justify-between w-full mb-1">
        <div className="font-[family-name:var(--font-orbitron)] italic text text-md ">
          <div className="text-[#2df82c] bg-gray-600 p-2 mb-2 uppercase font-bold">
            {data.role}
          </div>
        </div>
        <div className="font-[family-name:var(--font-orbitron)] italic text text-xs uppercase font-semibold">
          {data.dates}
        </div>
      </div>
      <div className="text-sm font-semibold">
        {data.company.name} • {data.company.city}, {data.company.state} •{" "}
        {data.company.summary}
      </div>
      <div className="font-[family-name:var(--font-metrophobic)] text-sm mt-2 text-gray-500">
        {data.summary}
      </div>
      <Success data={data.results} />
      <Skills data={data.skills} />
    </div>
  );
}
