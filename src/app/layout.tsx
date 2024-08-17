import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Future World",
  description: "Future World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header>
          <nav>
            <ul>
              <li>Home</li>
              <li>Store</li>
            </ul>
          </nav>
        </header>
        {children}

      </body>
    </html>
  );
}
