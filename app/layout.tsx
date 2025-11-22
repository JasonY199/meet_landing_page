import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  weight: ["300", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meet Landing Page",
  description: "A simple Frontend Mentor project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redHatDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
