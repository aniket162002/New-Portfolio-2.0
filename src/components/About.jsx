import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I'm a Freshman pursuing Information Technology at A C Patil college Of Engineering . I am always ready to have new experiences, meet new people and learn new things. I find the idea of creating value for people and impacting the world through my work gratifying.
        </p>

        <br />
        <p className="text-xl mt-10">
        I am a passionate coder who loves to code probably every hour of the day. Yeah with a cup of COFFEE next to me!! Just like every other passionate coder or developer, coding gives me immense satisfaction and relaxation.
        I love solving problems using DSA and represent Data in a meaningful way. 
            Also, I like pushing myself and taking up new challenges.

        </p>
      </div>
    </div>
  );
};

export default About;
