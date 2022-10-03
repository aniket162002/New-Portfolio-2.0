import React from "react";
import anisearch from "../assets/portfolio/anisearch.svg";
import codesync from "../assets/portfolio/codesync.png";
import dicordbot from "../assets/portfolio/dicordbot.jpg";
import covidproject from "../assets/portfolio/covidproject.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: anisearch,
      demolink:"",
      codelink:"https://github.com/aniket162002/anime-club-v1",
      name:"Anime manageing Website"
    },
    {
      id: 2,
      src: codesync,
      demolink:"",
      codelink:"https://github.com/aniket162002/Code-Sync",
      name:"Real Time code editor"

    },
    {
      id: 3,
      src: dicordbot,
      demolink:"",
      codelink:"https://github.com/aniket162002/DiscordWeatherBot",
      name:"Various Discord Bots"
    },
    {
      id: 4,
      src: covidproject,
      demolink:"",
      codelink:"https://github.com/aniket162002/COVID-Vaccination-Form",
      name:"Covid-19 Registration Form"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src ,demolink,codelink,name}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center my-2">
{name}
              </div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >
                 <a href={demolink} target="_blank" rel="noreferrer">Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={codelink}>
                <a href={codelink} target="_blank" rel="noreferrer">code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
