import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "FORMA — Objects of Intention",
  description: "Premium lifestyle goods, curated for those who believe the things you own should reflect the life you want to live.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Navbar />
          <main style={{ paddingTop: 92 }}>
            {children}
          </main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
