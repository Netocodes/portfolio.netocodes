import React from 'react'
import Image from "next/image"
import ContactBanner from "../assets/contact-banner.png"
import ContactBannerDark from "../assets/contact-bannerDark.png"
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'
import DecryptedText from '@/blocks/TextAnimations/DecryptedText/DecryptedText'
const PHONE_NUMBER = '+2349134730499'
const URL_ENCODED_MESSAGE = "Hello There NetoCodes Are you Active for work?"
const ContactUs = () => {
  return (
    <div id='ContactMe' className='w-full flex flex-col items-center justify-center gap-y-4 mt-8 lg:mt-20 py-12'>
      

        <h3 className='text-4xl mt-20 text-gray-700 lg:text-5xl tracking-normal font-bold dark:text-gray-100'>
        <DecryptedText hover={true} text="Available for Work" />
        </h3>
      <p className=' w-full px-6 md:px-3 max-w-3xl text-center text-md md:text-xl'>Feel free to reach out! Send me a
         <a className="text-blue-400 dark:text-cyan-300 px-3" href="#">direct message on LinkedIn</a> with a clear question, and I’ll get back to you as soon as possible.

</p>
<div className='flex items-center justify-center gap-x-4 mt-4'>
       <a href='href="https://github.com/Netocodes/"' className='py-2 px-4 rounded-md bg-[#c8c7bfa1] shadow dark:bg-cyan-300/10 hover:bg-[#1013d7]/25 ]hover:text-gray-200 dark:hover:bg-cyan-700'>
       <FaGithub className='text-[#1013d7] hover:text-blue-400  dark:text-cyan-300 cursor-pointer dark:hover:text-cyan-600  size-8'/>
       </a>
       <a href="https://www.instagram.com/p/DHbNejytwhr/" className='py-2 px-4 rounded-md bg-[#c8c7bfa1] shadow dark:bg-cyan-300/10 hover:bg-[#1013d7]/25 hover:text-gray-200 dark:hover:bg-cyan-700'>
       <FaInstagram className='text-[#1013d7] hover:text-blue-400 dark:text-cyan-300  cursor-pointer dark:hover:text-cyan-600 size-8'/>
       </a>
       <a href='href="https://www.linkden.com/in/netocodes"' className='py-2 px-4 rounded-md bg-[#c8c7bfa1] shadow dark:bg-cyan-300/10 hover:bg-[#1013d7]/25 hover:text-gray-200 dark:hover:bg-cyan-700'>
       <FaLinkedin className='text-[#1013d7] hover:text-blue-400 dark:text-cyan-300  cursor-pointer dark:hover:text-cyan-600 size-8'/>
       </a>
       <a href={`https://wa.me/${PHONE_NUMBER}?text=${URL_ENCODED_MESSAGE}`} className='py-2 px-4 rounded-md bg-[#c8c7bfa1] shadow dark:bg-cyan-300/10 hover:bg-[#1013d7]/25 hover:text-gray-200 dark:hover:bg-cyan-700'>
       <FaWhatsapp className='text-[#1013d7] hover:text-blue-400 dark:text-cyan-300  cursor-pointer dark:hover:text-cyan-600 size-8'/>
       </a>
      
         
          
</div>
<Image className='w-42 auto object-center object-cover dark:hidden' src={ContactBanner} alt='Contact Logo Image' width={100} height={50}></Image>
<Image className='w-42 auto object-center object-cover hidden dark:block' src={ContactBannerDark} alt='Contact Logo Image' width={100} height={50}></Image>
    </div>
  )
}

export default ContactUs
