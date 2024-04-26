import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://business-page-lake.vercel.app/'),
  title: "Lake - Landing Page",
  description: "A sophisticated, elegant landing page that makes your business's style futuristic.",
  openGraph: {
    images: '/atom-64px.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
