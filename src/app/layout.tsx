import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lindisfarn FarmOS",
  description: "The Operating System for the Ark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50">{children}</body>
    </html>
  );
}
