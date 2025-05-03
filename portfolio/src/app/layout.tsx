
import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";
import NavbarComp from "./components/navbar";
import  Appointment  from "./components/book-appointment";

export const metadata: Metadata = {
  title: "Netochukwu Codes || Fullstack developer & Tech enthusiast ",
  description: "",
  // icons: {
  //   icon: '/favicon.ico', 
  //   other: {
  //     rel: 'icon',
  //     type: 'image/svg+xml',
  //   },

};
import { Inter } from 'next/font/google'
import { ThemeProvider } from "./components/theme-provider";
import SplashCursor from "@/blocks/Animations/SplashCursor/SplashCursor";
 
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
      <head>
        
      </head>
      <body className={inter.className}
      >
             <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
<SplashCursor />
        <header className="">
        <NavbarComp />
        </header>
        {children}  
        <footer className="w-full  bottom-0">
       <Footer />

        </footer>
<Appointment />

          </ThemeProvider>
        
        
        
      </body>
    </html>
  );
}
