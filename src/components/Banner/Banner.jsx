import React from "react";
import Headphone4 from "../../assets/headphone4.png"
import {motion} from 'framer-motion'
import { UpdateFollower } from "react-mouse-follower";
import {fadeUp} from "../Services/Services";
const Banner = () => {
  return (
   <section className=" container">
    <div className="container py-14 grid grid-col-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12">
      <div>
        <motion.img
           variants={fadeUp(0.5)}
           initial="hidden"
           whileInView="show"
           transition={{ duration: 0.5 }}
           

         src={Headphone4} alt="" className="W-[300px] mx-auto md:w-[400px] justify-center align-middle"/>
      </div>
      <div className="flex flex-col justify-center ">
        <div className=" text-center md:text-left space-y-4 lg:max-w-[450px]">
          <motion.h1
           variants={fadeUp(0.7)}
            initial="hidden"
            whileInView="show"
           
          className="text-3xl lg:text-4xl font-semibold font-poppins">The Latest Headphones With The Latest Technology</motion.h1>
           <motion.p
            variants={fadeUp(0.9)}
            initial="hidden"
            whileInView="show"
            className=" text-justify"
           > Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sed nisi quia eius adipisci tempore laudantium voluptas, iste nulla alias ratione consectetur ipsam at? Incidunt labore dignissimos accusamus iure perspiciatis.</motion.p>
          <UpdateFollower 
          mouseOptions={{
            backgroundColor:'white',
            zIndex: 9999,
            followSpeed: 1.5,
            scale: 5,
            mixBlendMode:"difference",
          }}
          >
            <motion.button
          variants={fadeUp(0.7)}
          initial="hidden"
          whileInView="show"
           className="border-2 border-red-600 text-red-500 px-6 py-2 rounde-md hover:bg-[#e33343]  hover:text-white">Shop Now</motion.button>
          </UpdateFollower>
          
        </div>
      </div>


    </div>
   </section>
  );
};

export default Banner;
