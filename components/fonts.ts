import { Anton, JetBrains_Mono } from "next/font/google";

// Fontes do redesign. As variáveis são aplicadas só no wrapper das páginas novas.
export const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

export const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});
