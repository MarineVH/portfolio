import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const ProfileCard = () => {
 return (
    <main className="profileCard w-full h-screen flex justify-center items-center bg-[#eec5cf]">
        <body className="w-5/6 flex flex-col md:flex-row-reverse">
            <div className="w-full md:w-1/2">
                <img src="" alt="" className=""/>
                <p>hgbhvjbgyfhvg</p>
            </div>

            <div className=" w-full md:w-1/2 grid grid-cols-6 grid-rows-3 gap-y-4 text-[#2ca4b6]">
                <h1 className="text-3xl col-span-6 text-[#b76f8a]">Hi! I'm Marine</h1>
                <h2 className="text-2xl col-span-6 text-[#b76f8a]">Junior Frontend Developper</h2>
                <p className="col-span-6">Based in Belgium, looking for an internship to continue my training and develop my skills.</p>
                <a href="Curriculum_Vitae_Marine_Van_Hees_EN.pdf" className="col-span-3 lg:col-span-2 px-3 py-1 flex items-center justify-center border border-[#b76f8a] bg-[#b76f8a] text-[#eec5cf] rounded-xl hover:bg-[#eec5cf] hover:text-[#b76f8a]" download="Curriculum Vitae Marine Van Hees">Download CV</a>
                <a href="https://github.com/MarineVH" target="_blank" className="col-start-1 text-2xl text-[#b76f8a]"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/marine-van-hees/" target="_blank" className="text-2xl text-[#b76f8a]"><FaLinkedinIn/></a>
                <a href="https://discord.com/users/Marine#8235" target="_blank" className="text-2xl text-[#b76f8a]"><FaDiscord /></a>
            </div>
        </body>
    </main>
 );
};

export default ProfileCard;