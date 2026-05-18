import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "RideNow - Your City, Your Ride, Right Now",
  description: "Book affordable and safe cab rides across Bhopal with RideNow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`light ${manrope.variable} ${sora.variable}`} style={{ colorScheme: 'light' }}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
