import { DM_Sans } from "next/font/google";
import "./globals.css";

import { NextUIProvider } from "@nextui-org/react";

const dmSant = DM_Sans({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSant.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
