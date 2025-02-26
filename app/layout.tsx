"use client";

import { Toaster } from "../components/ui/toaster";
import "./globals.css";
import Providers from "./providers";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/icons/books.png" />
      </Head>
      <body>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
