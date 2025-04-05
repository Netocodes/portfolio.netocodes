import React from 'react'
import { FaWhatsapp  } from "react-icons/fa6";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


const SocialIcons = () => {
  return (
    <div className='flex items-center justify-center gap-x-3'>
      <FaGithub className='text-[#1013d7] dark:text-cyan-300 size-4'/>
      <FaInstagram className='text-[#1013d7] dark:text-cyan-300 size-4'/>
      <FaLinkedin className='text-[#1013d7] dark:text-cyan-300 size-4'/>
      <FaWhatsapp className='text-[#1013d7] dark:text-cyan-300 size-4'/>
    </div>
  )
}

export default SocialIcons
