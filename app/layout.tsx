import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skenku — Secure QR Code for Every Product",
  description:
    "Protect your brand, showcase your products, and track real-time analytics — all through one scannable QR code.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
