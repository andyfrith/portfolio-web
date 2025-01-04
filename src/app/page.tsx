import Welcome from "@/components/welcome";
import Image from "next/image";
import { Download, Mail, Megaphone } from "lucide-react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-orbitron)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Welcome />

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/AndyFrith-SeniorFrontendDeveloper.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={24} />
            Download résumé
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:underline text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="mailto:afrith.denver.usa@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={24} className="pr-2" />
            afrith.denver.usa@gmail.com
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:afrith.denver.usa@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Megaphone size={24} />
          Contact
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/andyfrith"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/goodapplemedia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to LinkedIn →
        </a>
      </footer>
    </div>
  );
}
