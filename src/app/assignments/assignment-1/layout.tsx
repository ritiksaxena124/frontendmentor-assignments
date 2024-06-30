
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Challenge 1: Contact Form",
  description: "Challenge 1 of frontend mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
