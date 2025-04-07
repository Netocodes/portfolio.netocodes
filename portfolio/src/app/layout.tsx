
import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";
import NavbarComp from "./components/navbar";

export const metadata: Metadata = {
  title: "Netochukwu Codes || Fullstack developer & Tech enthusiast ",
  description: "",
};
import { Inter } from 'next/font/google'
import { ThemeProvider } from "./components/theme-provider";
import Image from "next/image";
 
const inter = Inter({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}
      >
             <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

        <header className="">
        <NavbarComp />
        </header>
        {children}  
        <footer className="w-full fixed bottom-0">
       <Footer />

        </footer>
          </ThemeProvider>
        
        
        
      </body>
    </html>
  );
}
