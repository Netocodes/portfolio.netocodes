
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
// import SplashCursor from "@/blocks/Animations/SplashCursor/SplashCursor";s
 import {Analytics} from "@vercel/analytics/react"
import ClickSpark from "@/blocks/Animations/ClickSpark/ClickSpark";
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
   <ClickSpark
  sparkColor='#93ec33'
  sparkSize={20}
  sparkRadius={20}
  sparkCount={12}
  duration={400}
  
>


      
        <NavbarComp />
        
        {children}  
        <footer className="w-full text-[#93ec33]  bottom-0 ">
       <Footer />

        </footer>
<Appointment />
</ClickSpark>
          </ThemeProvider>
        
        
        <Analytics />
     
      </body>
  
    </html>
  );
}
