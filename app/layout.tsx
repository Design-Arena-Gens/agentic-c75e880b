import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agentic Starter",
  description: "Deployed on Vercel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-gray-950">
      <body className="min-h-screen text-gray-100 antialiased">
        {children}
      </body>
    </html>
  );
}
