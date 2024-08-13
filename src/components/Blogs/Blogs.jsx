import React from "react";
import Blogs1 from "../../assets/blogs/blog1.jpg";
import Blogs2 from "../../assets/blogs/blog2.jpg";
import Blogs3 from "../../assets/blogs/blog3.jpg";
import Blogs4 from "../../assets/blogs/blog4.jpg";
import { UpdateFollower } from "react-mouse-follower";


const blogData = [{
  id:1,
  title: "Introducing our new smart headphones",
  image: Blogs1,
  description: "lorem ipsum dolor sit amet lore tell me lorem ipsum dolor sit amet lore",
  link: "#"
},
{
 id:2,
  title: "The future of headphones",
  image: Blogs2,
  description: "lorem ipsum dolor sit amet lore tell me lorem ipsum dolor sit amet lore",
  link: "#"
},
{
  id:3,
  title: "5 tips for choosing the best headphones",
  image: Blogs3,
  description: "lorem ipsum dolor sit amet lore tell me lorem ipsum dolor sit amet lore",
  link: "#"
 },
 {
  id:4,
  title: "The impact of noise pollution on headphones",
  image: Blogs4,
  description: "lorem ipsum dolor sit amet lore tell me lorem ipsum dolor sit amet lore",
  link: "#"
 },
 {
  id:5,
  title: "The future of headphones",
  image: Blogs2,
  description: "lorem ipsum dolor sit amet lore tell me lorem ipsum dolor sit amet lore",
  link: "#"
 },
 {
  id:6,
  title: "The impact of noise pollution on headphones",
  image: Blogs4,
  description: "lorem ipsum dolor sit amet lore tell me lorem ipsum dolor sit amet lore",
  link: "#"
 },
 {
  id:7,
  title: "The impact of noise pollution on headphones",
  image: Blogs4,
  description: "lorem ipsum dolor sit amet lore tell me lorem ipsum dolor sit amet lore",
  link: "#"
 }
];


const Blogs = () => {
  return (
  <UpdateFollower
     mouseOptions={{
      backgroundColor:'black',
      zIndex: 9999,
      followSpeed: 1.5,
      scale: 5,
      text: "read",
      textFontSize:"3px",
      
     }}
  >
  <div className=" bg-gray-50 container">
   <section className="pb-10 ">
    <h1 className="pt-8 font-poppins pb-4 text-center justify-center text-3xl font-bold mb-6">Blogs</h1>
    <div className=" container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      
      {blogData.map((blog) => (
        <div className="rounded-md shadow-lg md:p-6 p-4 hover:-translate-y-4 duration-300 max-w-[300px] mx-auto">

          <img src={blog.image} alt="" className="mb-2 w-auto"/>
           <div className="space-y-3 font-poppins">
              <h1 className="text-xl font-bold line-clamp-2">{blog.title}</h1>
              <p className=" line-clamp-2 text-sm">{blog.description}</p>
           </div>
        </div>
      ))}
    </div>
   </section>
  </div>
  </UpdateFollower>
  );
};

export default Blogs;
