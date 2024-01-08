import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import { dark } from "@clerk/themes";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
console.log("me cagoen toooo!!!");
export const metadata: Metadata = {
  title: "LPAonFire",
  description: "LPAonFire es una web para la gestion de eventos.",
  icons: {
    //icon: "/assets/images/logo.svg",
    icon: "/assets/images/favicon.png",
    //icon: "favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
