import React from "react";

const ProfileCard = () => {
 return (
    <main className="profileCard w-full h-screen flex justify-center items-center bg-slate-400">
        <body className="w-5/6 flex flex-col md:flex-row-reverse bg-red-50">
            <div className="w-full md:w-1/2">
                <img src="" alt="" className=""/>
                <p>hgbhvjbgyfhvg</p>
            </div>

            <div className=" w-full md:w-1/2 bg-red-400">
                <h1 className="text-3xl">Hi! I'm Marine</h1>
                <h2 className="text-2xl">Junior Frontend Developper</h2>
                <p className="">ijgbuyavgubhojbgiabxjknbxjknxzbjhanxihb hjdnscd bsjhacnshiujk</p>
                <a href="Curriculum_Vitae_Marine_Van_Hees_EN.pdf" download="Curriculum Vitae Marine Van Hees">Download CV</a>
            </div>
        </body>
    </main>
 );
};

export default ProfileCard;