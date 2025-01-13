import Welcome from "@/components/welcome";
import Footer from "@/components/footer";
import Timeline from "@/components/timeline/timeline";
import { experiencesData } from "@/lib/data";

export default function Home() {
  return (
    <div className="thin-dots-bg grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-orbitron)]">
      <main className="flex flex-col gap-3 row-start-2 items-center sm:items-start">
        <Welcome />
        <Timeline data={experiencesData} />
      </main>
      <Footer />
    </div>
  );
}
