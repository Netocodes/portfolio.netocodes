import React from 'react'
import { FaWhatsapp  } from "react-icons/fa6";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const PHONE_NUMBER = '+2349134730499'
const URL_ENCODED_MESSAGE = "Hello There NetoCodes Are you Active for work?"


const SocialIcons = () => {
  return (
    <div className='flex items-center justify-center gap-x-3'>
      <a href="https://github.com/Netocodes/">
      <FaGithub className='text-[#1013d7] hover:text-blue-400  dark:text-cyan-300 cursor-pointer dark:hover:text-cyan-600  size-5'/>
      </a>
      <a href="https://www.instagram.com/p/DHbNejytwhr/">
      <FaInstagram className='text-[#1013d7] hover:text-blue-400 dark:text-cyan-300  cursor-pointer dark:hover:text-cyan-600 size-5'/>
        </a><a href="https://www.linkden.com/in/netocodes"><FaLinkedin className='text-[#1013d7] hover:text-blue-400 dark:text-cyan-300  cursor-pointer dark:hover:text-cyan-600 size-5'/></a>
        <a href={`https://wa.me/${PHONE_NUMBER}?text=${URL_ENCODED_MESSAGE}`}><FaWhatsapp className='text-[#1013d7] hover:text-blue-400 dark:text-cyan-300  cursor-pointer dark:hover:text-cyan-600 size-5'/></a>
      
      
    </div>
  )
}

export default SocialIcons
