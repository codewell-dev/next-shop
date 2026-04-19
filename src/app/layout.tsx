import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "FORMA — Objects of Intention",
  description: "Premium lifestyle products, curated for those who value craft, quality, and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Navbar />
          <main className="pt-[65px]">
            {children}
          </main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
