import * as React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { theme } from "./theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kio's TODO",
  description: "Manage your todos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
