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
    title: "ALTYN School — Химия олимпиадасына жүйелі дайындық",
    description: "Қазақстандағы химия олимпиадалары мен академиялық емтихандарға арналған заманауи онлайн мектеп.",
    icons: { icon: "/altyn-logo.jpg", shortcut: "/altyn-logo.jpg" },
    openGraph: {
      title: "ALTYN School",
      description: "Химия олимпиадасына жүйелі дайындық",
      images: [{ url: `${origin}/og.png`, width: 1732, height: 908, alt: "ALTYN School" }],
      locale: "kk_KZ",
      type: "website",
    },
    twitter: { card: "summary_large_image", images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="kk"><body>{children}</body></html>;
}
