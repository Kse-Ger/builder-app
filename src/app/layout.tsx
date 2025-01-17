import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-[#F8F6F2] text-[#E0E0E0]">
        <header className="fixed top-0 w-full z-50 bg-[#2E2E2E] text-white">
          <Header />
        </header>
        <main className="flex-grow pt-16">
          {children}
        </main>
        <footer className="bg-[#F8F6F2] text-[#2E2E2E]">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
