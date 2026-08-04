import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "ALTYN School — Олимпиадаға жүйелі дайындық",
    description: "Республикалық пән олимпиадаларына жүйелі дайындық беретін заманауи онлайн мектеп.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "ALTYN School",
      description: "Республикалық пән олимпиадаларына жүйелі дайындық",
      images: [{ url: `${origin}/og.png`, width: 1731, height: 908, alt: "ALTYN Olympiad School" }],
      locale: "kk_KZ",
      type: "website",
    },
    twitter: { card: "summary_large_image", images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="kk"><body>{children}</body></html>;
}
