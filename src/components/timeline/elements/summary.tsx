import React from "react";

export default function ItemSummary({ summary }: { summary: string }) {
  return (
    <p className="!mt-1 !font-normal text-gray-500 !text-sm font-[family-name:var(--font-metrophobic)]">
      {summary}
    </p>
  );
}
