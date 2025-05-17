
import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";
import NavbarComp from "./components/navbar";
import  Appointment  from "./components/book-appointment";

export const metadata: Metadata = {
  title: "Netochukwu Codes || Fullstack Developer (React/Node.js) | Open for Work",
  description: "Professional Fullstack Developer specializing in React, Next.js, Node.js & PostgreSQL. Available for freelance projects and full-time roles. Let's build high-performance web apps together!",
  keywords: [
    "Freelance Fullstack Developer",
    "React Developer for Hire",
    "Node.js Contractor",
    "Tech Job Available Now",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web App Development",
    "REST API Developer",
    "PostgreSQL Developer",
    "Tech Job Opportunities",
    "Remote Developer Available",
    "Freelance Software Engineer",
    "Open for Work Tech",
    "Frontend Backend Developer",
    "MERN Stack Developer",
    "Startup Tech Partner",
    "UI/UX Aware Developer",
    "Agile Development Specialist",
    "Tech Consultant",
    "Code Optimization Expert",
    "best web developer in enugu",
    "enugu tech boy",
    "enugu website designer"
    // ... (keep previous keywords)
  ].join(', '),

  // ===== Icons & Favicons =====
  icons: {
    icon: [
      { url: '/avatar.png' }, // Default favicon
     
    ],
    shortcut: '/shortcut-icon.png',
    apple: '/apple-touch-icon.png', // For iOS homescreen
    other: {
      rel: 'mask-icon',
      url: '/safari-pinned-tab.svg',
      color: '#5bbad5' // Safari pinned tab color
    }
  },

  // ===== Social Media (Open Graph/Twitter) =====
  openGraph: {
    title: "Netochukwu Codes: Fullstack Developer | Open for Work",
    description: "React/Node.js expert available for freelance and full-time opportunities. Let's collaborate!",
    url: 'https://netocodes.pro',
    siteName: 'Netochukwu Codes',
    images: [
      {
        url: 'https://netocodes.pro/avatar.png', // 1200x630px
        width: 1200,
        height: 630,
        alt: 'Fullstack Developer Portfolio',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: "Netochukwu Codes || Fullstack Dev (React/Node.js)",
  //   description: "Building scalable web apps. Currently open for new opportunities!",
  //   images: ['https://netocodes.pro'], // 1200x628px
  //   creator: '@yourtwitterhandle',
  // },
  
  // ===== Additional SEO =====
  metadataBase: new URL('https://netocodes.pro'),
  alternates: {
    canonical: '/',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#b9cfed' },
    { media: '(prefers-color-scheme: dark)', color: '#0a346a' },
  ],
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
