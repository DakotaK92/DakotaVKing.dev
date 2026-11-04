import { Roboto } from "next/font/google";
import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";

const roboto = Roboto({ 
  subsets: ['latin'], 
  weight: ['400','500','600','700','800', '900'],
  variable: '--font-roboto',
});

export const metadata = {
  metadataBase: new URL("https://dakotavking.dev"),
  title: {
    default: "Dakota King — Designer & Developer",
    template: "%s | Dakota King",
  },
  description: "Dakota King is a designer and full-stack developer creating thoughtful brands, clear interfaces, and useful digital experiences.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${roboto.variable}`}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
