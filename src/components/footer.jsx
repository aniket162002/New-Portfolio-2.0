import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin} from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
function Footer() {
  return (
    <div className="py-5 border-t-3/2 bg-gradient-to-b from-gray-800 to-black">
            <div className="flex align-center justify-center mt-4">
              <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-white hover:bg-gray-900 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/aniket162002">
                <FaGithub />
                <span class="sr-only">Github</span>
              </a>
              <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300" href="https://www.linkedin.com/in/aniket-shinde-a10018231">
                <FaLinkedin />
                <span class="sr-only">YouTube</span>
              </a>
              <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href="https://twitter.com/Anie162002_">
                <FaTwitter />
                <span class="sr-only">Twitter</span>  
              </a>
              <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300" href="https://mailto:shindeaniket47328@gmail.com">
                <FaRegEnvelope />
                <span class="sr-only">Email</span>  
              </a>
             
             
            </div>
            <div className="flex align-center justify-center mt-4">
              <p className="text-green-400 mb-4">
                  Made with <span className = "mr-2" role="img" aria-label="heart">💙 </span>by <a className="text-blue-500 hover:underline" href="mailto:me.shindeaniket47328@gmail.com"> Aniket Shinde</a>
              </p>
              </div>
    </div>
  )
}

export default Footer