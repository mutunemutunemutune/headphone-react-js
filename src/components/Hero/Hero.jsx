import React from "react";
import Headphone1 from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone3 from "../../assets/headphone3.png";
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { easeInOut, motion } from "framer-motion";
 

const fadeUp= (delay) => {
  return{
    hidden:{
      opacity:0,
      y:100,
      scale: 0.2,
    },
    show:{
      opacity:1,
      y:0,
      scale: 1,
      transition:{
        duration:0.5,
        ease: easeInOut,
      }
      },

    exit: {
      opacity:0,
      y:100,
      scale: 0.2,
      transition:{
        duration:0.5,
        ease: easeInOut,
      },
    },
    }
  }


const HeadData=[{
  id:1,
  image:Headphone1,
  title:'Headphone wireless',
  description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  price:'$199.99',
  link:'#',
  bgColor:"#8B4513",
  modal:"Modal Brown",
  subtitle:"Lorem ipsum dolor sit amet, consect",

},
{
  id:2,
  image:Headphone2,
  title:'Headphone wireless',
  description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  price:'$299.99',
  link:'#',
  bgColor:"#192b11",
  modal:"Lime Green",
  subtitle:"Lorem ipsum dolor sit amet, consect",
},
{
  id:3,
  image:Headphone3,
  title:'Headphone wireless',
  description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  price:'$399.99',
  link:'#',
  bgColor:"#37539b",
  modal:"Ocean Blue",
  subtitle:"Lorem ipsum dolor sit amet, consect",
}
]

const Hero = () => {
  const [activeData,setActiveData] = React.useState(HeadData[0]);
  const handleActiveData =(data) => {setActiveData(data);};
  return (
 <div className="bg-brandDark">
   <section className="container  bg-brandDark text-white font-varela">
    <div className=" container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
     <div className="justify-center flex flex-col py-14 md:py-0 xl:max-w-[500px]">
      <div className=" space-y-5 text-center md:text-left" >
          <h1 className="font-varela font-bold text-5xl uppercase">{activeData.title}</h1>
          <p>{activeData.subtitle}</p>
          <button style={{backgroundColor:activeData.bgColor}} className="rounded-sm font-semibold px-4 py-2 inline-block font-varela">Buy me and Listen</button>
      </div>
      <div className=" md:justify-start !mt-24 flex items-center gap-3 justify-center">
        <div className="w-20 h-[1px] bg-white"></div>
        <p className="uppercase text-sm"> Top headphones for you</p>
        <div className="w-20 h-[1px] bg-white" ></div>
       </div>
       <div className="grid grid-cols-3 gap-10 mt-4">
        {HeadData.map((items)=>{
          return(
            <div  key={items.id} onClick={()=>handleActiveData(items)} className="flex gap-4">
              <div>
                <img src={items.image} alt="" srcset="" className="w-[200px]" />
              </div>
              <div className="space-y-2 items-center justify-center">
                <p className="text-base font-bold">{items.price}</p>
                <p className=" text-nowrap text-xs">{items.modal}</p>

              </div>
            </div>
            
          )
        })}

       
       </div>

       

    </div>
    {/* hero img */}
    <div className="flex flex-col justify-end items-center">
        <img src={activeData.image} alt="" srcset="" className="w-[300px] md:w-[400px] xl:w-[500px]"/>
    </div>
    <div>
      <FaWhatsapp className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[9999] mix-blend-difference"/>
    </div>
    
  </div>
    


</section>

 </div>

  )
  
};

export default Hero;
