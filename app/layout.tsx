import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import fonts from "@/styles"

const onest = localFont({
  src: "../styles/fonts/Onest-Medium.ttf",
  variable: "--font-onest",
  weight: "500",
});

const redHat = localFont({
  src: [
    {
      path: "../styles/fonts/RedHatDisplay-Black.ttf",
      weight: "900",
    },
    {
      path: "../styles/fonts/RedHatDisplay-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../styles/fonts/RedHatDisplay-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-red-hat",
});


const title = "Clientyne | Manage all your ecommerce needs here"
const description = "An ecommerce app to help you manage your data"

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${redHat.variable} ${onest.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}