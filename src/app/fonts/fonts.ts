import {
  Metrophobic,
  Nunito_Sans,
  Orbitron,
  Poppins,
  Raleway,
  Space_Mono,
} from "next/font/google";

export const poppinsSans = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins-sans",
});

export const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metrophobic = Metrophobic({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-metrophobic",
});

export const nunitoSans = Nunito_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

export const orbitron = Orbitron({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-raleway",
});
