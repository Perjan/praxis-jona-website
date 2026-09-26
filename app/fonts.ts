import { Newsreader, Outfit } from "next/font/google";

// Newsreader keeps the calm editorial serif of the logo; Outfit replaces the Arial body text.
export const serifFont = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  style: ["normal", "italic"],
  // Next 13.5 ships no fallback metrics for Newsreader, so use Georgia directly.
  adjustFontFallback: false,
  fallback: ["Georgia", "serif"],
});

export const sansFont = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const fontVariables = `${serifFont.variable} ${sansFont.variable}`;
