import { Dela_Gothic_One, IBM_Plex_Sans } from "next/font/google";

export const dela_gothic = Dela_Gothic_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dela-gothic",
});

export const ibm_plex_sans = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-sans",
});
