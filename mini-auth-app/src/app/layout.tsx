import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: 'Minu Auth App',
  description: 'Authentication Flow – Mini App',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body  >{children}</body>
    </html>
  );
}
