import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes, Philosopher } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: ["400"],
});

const philosopher = Philosopher({
  variable: "--font-philosopher",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Mohamed Shelpidy Kamara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">    
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} ${philosopher.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
