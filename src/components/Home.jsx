import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiDocumentDownload } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h4 className="text-4xl sm:text-2xl text-white ">Hello! </h4>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-sky-500	 py-4 max-w-md">
            A passionate and creative Coder and Web Developer, who likes to learn and work on recent cutting edge technologies.
            Currently, I love to work on web application using technologies like
            React, Express JS, MongoDB and NodeJS .
          </p>

          <div className="flex">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 mx-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
         
          <div>
            <a
              href="./anieresume.pdf"
              download={true}
              className="group text-white w-fit px-6 py-3 my-2 flex  items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
             Get Resume
             <span >
                <HiDocumentDownload size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>
        </div>
        <div >
          <img
            src={HeroImage}
            alt="my profile"
            className="w-full h-auto m-auto shadow-xl shadow-gray-500 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
