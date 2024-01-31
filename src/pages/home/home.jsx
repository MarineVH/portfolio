import React from "react";
import Navbar from "../../components/navbar/navbar";
import ProfileCard from "../../components/profilecard/profilecard";

const Home = () => {
 return (
    <main className="home w-full h-full">
        <Navbar />
        <ProfileCard />
    </main>
 );
};

export default Home;