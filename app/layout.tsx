import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aditya Roshan Legal - Strategic Legal Solutions',
  description: 'Premium advisory in Corporate Law, M&A, Dispute Resolution, and Regulatory Compliance',
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