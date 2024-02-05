import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import React from "react";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Crud - App",
  description: "Crud Application with Rohit Kohli",
};

export default function RootLayout({ children, modals }: { children: React.ReactNode, modals: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Toaster position="top-center" reverseOrder={true}/>
          <Providers>
            {children}
            {modals}
          </Providers>
      </body>
    </html>
  );
}
