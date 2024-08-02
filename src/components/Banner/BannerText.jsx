import React from "react";
import { UpdateFollower } from "react-mouse-follower";

const BannerText = () => {
  return (
    <section className="py-12 text-center font-varela container">
      <div className="container ">
        <div className=" bg-gradient-to-t from-primary to-primary/75 text-white rounded-3xl p-8 py-4 hover:scale-105 duration-500 hover:shadow-2xl">
        <UpdateFollower
         mouseOptions={{
           backgroundColor: "black",
           zIndex: 9999,
           followSpeed: 0.5,
           scale: 10,
           mixBlendMode:"screen",
         }}
        >
          <p className="font-bold text-4xl max-w-[700px] mx-auto leading-normal">HeadPhones with good prices and affordables</p>
          </UpdateFollower>
        </div>

      </div>

    </section>

  );
};

export default BannerText;
