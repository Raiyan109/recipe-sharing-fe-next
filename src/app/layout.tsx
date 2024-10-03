import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/lib/Providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Culinary Circle - Share, Discover, and Explore New Recipes",
  description: "Join Culinary Circle, a vibrant community for home cooks and culinary enthusiasts. Share your favorite recipes, discover new dishes, and engage with a passionate cooking community. Access exclusive content, submit recipes, and enjoy interactive features like ingredient checklists, cooking timers, and social engagement through comments, ratings, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          {children}
        </Providers>
      </body>
    </html>
  );
}
