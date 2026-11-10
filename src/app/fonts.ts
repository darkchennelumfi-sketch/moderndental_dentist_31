import { Fraunces, Karla } from "next/font/google";

export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
});

export const karla = Karla({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-karla",
});
