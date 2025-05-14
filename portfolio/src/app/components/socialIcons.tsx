import React from 'react'
import { FaWhatsapp  } from "react-icons/fa6";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


const SocialIcons = () => {
  return (
    <div className='flex items-center justify-center gap-x-3'>
      <a href="https://github.com/Netocodes/">
      <FaGithub className='text-[#1013d7] hover:text-blue-400  dark:text-cyan-300 cursor-pointer dark:hover:text-cyan-600  size-5'/>
      </a>
      <a href="#">
      <FaInstagram className='text-[#1013d7] hover:text-blue-400 dark:text-cyan-300  cursor-pointer dark:hover:text-cyan-600 size-5'/>
        </a><a href="#"><FaLinkedin className='text-[#1013d7] hover:text-blue-400 dark:text-cyan-300  cursor-pointer dark:hover:text-cyan-600 size-5'/></a>
        <a href="#"><FaWhatsapp className='text-[#1013d7] hover:text-blue-400 dark:text-cyan-300  cursor-pointer dark:hover:text-cyan-600 size-5'/></a>
      
      
    </div>
  )
}

export default SocialIcons
