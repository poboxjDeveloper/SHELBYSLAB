import '@/app/ui/global.css';
import { Inter } from 'next/font/google';
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* antialiased is from tailwind: see
      https://tailwindcss.com/docs/font-smoothing */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
