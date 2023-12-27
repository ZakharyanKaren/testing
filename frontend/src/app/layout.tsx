import { Metadata } from "next";

import AppLayout from "@/shared/layouts/AppLayout/AppLayout";
import { suisseIntl } from "@/shared/fonts/fonts";

import "./globals.scss";

export const metadata: Metadata = {
  title: "Outer Image",
  description: "Generated by create next app",
  icons: "/svgs/outer_image_logo.svg"
};

const RootLayout: FCC = ({ children }) => (
  <html lang='en'>
    <body className={`${suisseIntl.className} antialiased`}>
      <AppLayout>{children}</AppLayout>
    </body>
  </html>
);

export default RootLayout;