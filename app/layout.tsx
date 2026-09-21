import type { Metadata } from "next";
import { headers } from "next/headers";
import "@fontsource-variable/manrope";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "ALTYN School — Олимпиадаға жүйелі дайындық",
    description: "30+ дәріс, 30 практикалық блок, 8 срез және апталық ментор практикасы бар 8 апталық олимпиадалық интенсив.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "ALTYN School",
      description: "30+ дәріс, 30 практикалық блок, 8 срез және апталық ментор практикасы бар интенсив",
      images: [{ url: `${origin}/altyn-logo.jpg`, width: 650, height: 290, alt: "ALTYN olympiad school" }],
      locale: "kk_KZ",
      type: "website",
    },
    twitter: { card: "summary_large_image", images: [`${origin}/altyn-logo.jpg`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="kk"><body>{children}</body></html>;
}
