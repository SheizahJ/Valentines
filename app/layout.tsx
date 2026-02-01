import type { Metadata } from "next";
import { Roboto, Playwrite_CA, Geist_Mono } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
})

const playwrite = Playwrite_CA({
  variable: "--font-playwrite",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "<3",
  description: "my valentines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${playwrite.variable} ${geistMono.variable} antialiased`}
      >
        <div className="main">
          {children}
        </div>
      </body>
    </html>
  );
}
