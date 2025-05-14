import { ArrowLeft } from 'lucide-react'
import React from 'react'
import MainGallery from './maingallery'
import Link from 'next/link'
import Image from 'next/image';
import ContactBanner from "../assets/contact-banner.png"
import ContactBannerDark from "../assets/contact-bannerDark.png"

const MyWorks = () => {
  return (
    <div>
      <Link href={"/"} className='flex items-center gap-x-4 cursor-pointer'>
      <ArrowLeft className='size-10 p-2  bg-gray-300 text-gray-700 hover:bg-gray-400 rounded-full' /> 
      <p className='text-lg lg:text-xl font-semibold'>Back to Home</p>
      </Link>

      <h2 className='text-xl font-semibold mt-20 py-8'>Projects</h2>
      <MainGallery />
      <div className="mt-12 mb-3 flex items-center justify-center">
      <Image className='w-42 auto object-center object-cover dark:hidden' src={ContactBanner} alt='Contact Logo Image' width={100} height={50}></Image>
      <Image className='w-42 auto object-center object-cover hidden dark:block' src={ContactBannerDark} alt='Contact Logo Image' width={100} height={50}></Image>
      </div>
    </div>
  )
}

export default MyWorks
