import React from "react";
import cards from "../../assets/credit-cards.webp";
import { FaBeer } from 'react-icons/fa';

import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import { FaMapLocation, FaPhone } from "react-icons/fa6";



const Footer = () => {
  const currentyear = new Date().getFullYear();

  
  return (
   <div className=" bg-primary">
    <section className="container pt-12 pb-8 text-white">
     <div className="container ">
       <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
         <div>
              <h1 className="text-3xl   font-bold">PLAYING</h1>
              <p className="max-w-[300px] text-sm mt-6">Lorem dolor sit amet consectetur adipisicing elit. Facilis impedit dolorum labore nulla officia rerum eligendi, deleniti mollitia rem consectetur dolore quo quas pariatur ullam tempore, perspiciatis itaque quae ipsum. .</p>
              <ul className="pt-8 ">
                <li className="flex gap-3 align-middle items-center">
                  <FaPhone className=" -rotate-90"/>
                  <p>+254 126314435</p>
                </li>
                <li className="flex gap-3 align-middle items-center pt-4">
                  <FaMapLocation/>
                  <p>Nairobi, kenya</p>
                </li>
              </ul>
         </div>
        
        <div className="space-y-4 ">
          <h1 className="text-3xl font-bold">Quick Links</h1>
          <div className="flex gap-8">
            <ul className="gap-3 space-y-3 max-w-[300px]">
              <li>Home</li>
              <li>About</li>
              <li>Contact us</li>
              <li>Privacy policy</li>
            </ul>
            <ul className="gap-3 space-y-3 max-w-[300px]">
              <li>Home</li>
              <li>About</li>
              <li>Contact us</li>
              <li>Privacy policy</li>
            </ul>
  
          </div>
        </div>

        <div>
          <h1 className="font-bold text-3xl space-y-4">Follow Us</h1>
          <div className="flex gap-4 mt-6">
            <FaFacebook className="text-3xl hover:scale-105 duration-300"/>
            <FaTwitter className="text-3xl hover:scale-105 duration-300"/>
            <FaInstagram className="text-3xl hover:scale-105 duration-300"/>
            <FaTelegram className="text-3xl hover:scale-105 duration-300"/>
          </div>

          <p className="my-6">payment methods</p>
          <div>
            <img src={cards} alt="" className="w-[80%]"/>
          </div>
        </div>
       </div>
       <div>
      
      <p className="text-center text-sm text-white mt-8 pt-8 border-t-2 border-white">&#169; {currentyear} Playing Market. All rights reserved.</p>
      </div>
     </div>

    
    

    </section>
    </div>
   
  );
};

export default Footer;
