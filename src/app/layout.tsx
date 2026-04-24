import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Inter, JetBrains_Mono } from "next/font/google";
import { Foot } from "@/components/foot/Foot";
import { LenisProvider } from "@/components/motion/LenisProvider";
import { Nav } from "@/components/nav/Nav";
import "./globals.css";

// Self-hosted via next/font. display:swap + preload + variables feed --f-*
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-bodoni",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const viewport: Viewport = {
  themeColor: "#0e0b08",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bumpers2bumpers.detail"),
  title: {
    default:
      "Bumpers2Bumpers — Mobile Car Detailing · Coachella Valley · Since 1998",
    template: "%s · Bumpers2Bumpers",
  },
  description:
    "Richie Herrera — certified professional detailer serving the Coachella Valley since 1998. Mobile detailing for every vehicle: daily drivers, family SUVs, trucks, classics, exotics, boats, RVs, motorcycles, and fleets. One detailer. One vehicle at a time.",
  applicationName: "Bumpers2Bumpers",
  authors: [{ name: "Richie Herrera" }],
  keywords: [
    "mobile car detailing",
    "Coachella Valley detailing",
    "Palm Desert detailing",
    "Palm Springs detailing",
    "ceramic coating",
    "paint correction",
    "RV detailing",
    "boat detailing",
    "motorcycle detailing",
    "fleet detailing",
    "auto detailing",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Bumpers2Bumpers",
    title:
      "Bumpers2Bumpers — Mobile Car Detailing · Coachella Valley · Since 1998",
    description:
      "Mobile detailing for every vehicle — from daily drivers to concours entries. By appointment only.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Bumpers2Bumpers — mobile auto detailing, Coachella Valley",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bumpers2Bumpers — Mobile Car Detailing · Coachella Valley · Since 1998",
    description:
      "Mobile detailing for every vehicle — from daily drivers to concours entries. By appointment only.",
    images: ["/og-default.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${inter.variable} ${jetbrains.variable}`}
      style={
        {
          // Bridge next/font variables → canonical --f-* names used in globals.css
          "--f-display": `var(--font-bodoni), "Times New Roman", serif`,
          "--f-body": `var(--font-inter), -apple-system, BlinkMacSystemFont, system-ui, sans-serif`,
          "--f-mono": `var(--font-jetbrains), ui-monospace, monospace`,
        } as React.CSSProperties
      }
    >
      <head>
        {/* Sets data-capture="1" on <html> before first paint when ?capture=1
            is present — fast-forwards CSS animations to their final frame for
            deterministic visual regression screenshots. No-op in production use. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(location.search.indexOf('capture=1')!==-1)document.documentElement.setAttribute('data-capture','1');}catch(e){}",
          }}
        />
      </head>
      <body>
        <LenisProvider>
          <Nav />
          {children}
          <Foot />
        </LenisProvider>
      </body>
    </html>
  );
}
