import React from "react";
import Icon1 from "../../assets/icons/obj1.png";
import Icon2 from "../../assets/icons/obj2.png";
import Icon3 from "../../assets/icons/obj3.png";
import { UpdateFollower } from "react-mouse-follower";
import { delay } from "framer-motion";
import {motion} from 'framer-motion';

export const fadeUp = (delay)=>{
  return{
    hidden:{
      y: 100,
      opacity: 0,
      
    },
    show:{
      y: 0,
      opacity: 1,
      transition: {duration: 0.5,delay: delay}
    }
  }
}

const serviceData = [
  {
    id:1,
    title: "Premium Sound Quality",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere lectus eget velit consectetur, at sagittis dui efficitur.",
    icon: Icon1,
    delay: 0.5,
  },
  {
    id:2,
    title: "High-Resolution Audio",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere lectus eget velit consectetur, at sagittis dui efficitur.",
    icon: Icon2,
    delay: 1,
  },
  {
    id:3,
    title: "Bluetooth Connectivity",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere lectus eget velit consectetur, at sagittis dui efficitur.",
    icon: Icon3,
    delay: 1.5,
  }

]
const Services = () => {
  return(
    <section className="bg-gray-100 font-poppins py-8">
      <div className="container py-14">
        <motion.h1 
        variants={fadeUp(0.2)}
        initial="hidden"
        whileInView="show"
         className="uppercase text-3xl font-bold text-center pb-10 font-varela">services</motion.h1>
      <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-3 gap-6">
         {serviceData.map((data) =>(
          <UpdateFollower
          mouseOptions={{
            backgroundColor: "white",
            zIndex: 999,
            followSpeed: 1.5,
            scale: 5,
            mixBlendMode:"darken",
            rotate: 720,
            backgroundElement: (
              <motion.div 
    
              >
                  <img src={data.icon} alt="" srcset=""/>
              </motion.div>
            )

          }

        }
          >
            <motion.div 
                         variants={fadeUp(data.delay)}
                         initial="hidden"
                         whileInView="show"
            className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white">
               <img src={data.icon} alt="" srcset="" className="w-[100px] mb-4 "/>
               <div className="text-center space-y-2">
                <h1>{data.title}</h1>
                <p className="text-center text-sm text-black">{data.description}</p>
               </div>
            </motion.div>
          </UpdateFollower>
        ))},
      </div>
     </div>
    </section>

  );
};

export default Services;
