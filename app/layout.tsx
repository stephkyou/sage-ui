import type { Metadata } from "next";
import { Concert_One, Inter } from "next/font/google";
import "./globals.css";

const inter = Concert_One({ 
  weight: ["400"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "sage",
  description: "personal finance manager",
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
