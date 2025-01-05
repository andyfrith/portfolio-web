import Image from "next/image";
import { Download, Megaphone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/AndyFrith.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Download size={24} />
        Download résumé
      </a>
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
  );
}
