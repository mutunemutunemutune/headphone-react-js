import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import { UpdateFollower } from "react-mouse-follower";
import { motion, AnimatePresence } from "framer-motion";

const NavMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About", link: "/about" },
  { id: 3, title: "Services", link: "/services" },
  { id: 4, title: "Products", link: "/products" },
  { id: 5, title: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCloseHovered, setIsCloseHovered] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section className="bg-brandDark">
    <div className=" text-white py-8 font-varela container">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="uppercase text-2xl container items-center flex justify-between mx-auto"
      >
        <div>
          <a href="/">
            <h2>
              playing/<span className="font-extralight text-gray-300">market</span>
            </h2>
          </a>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-5">
            {NavMenu.map((item) => (
              <li key={item.id}>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 999,
                    followSpeed: 1.5,
                    scale: 5,
                    mixBlendMode: "difference",
                  }}
                >
                  <a href={item.link} className="text-sm inline-block uppercase">
                    {item.title}
                  </a>
                </UpdateFollower>
              </li>
            ))}
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <button className="ps-7 text-xl">
                <SlEarphones size={20} />
              </button>
            </UpdateFollower>
          </ul>
        </div>

        {/* mobile menu button */}
        <div className="md:hidden text-4xl" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
        </div>
      </motion.nav>

      {/* overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full bg-black z-9998"
            onClick={toggleMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-[80%] h-full bg-primary text-white py-4 z-9999 flex flex-col items-center"
          >
            <div className="w-full flex justify-between items-center px-4">
              <a href="/" className="text-2xl">
                <h2>
                  playing/<span className="font-extralight text-gray-300">market</span>
                </h2>
              </a>
              <button
                onClick={toggleMobileMenu}
                className="text-4xl relative"
                onMouseEnter={() => setIsCloseHovered(true)}
                onMouseLeave={() => setIsCloseHovered(false)}
              >
                <MdClose
                  size={30}
                  className={`transition-transform transform ${
                    isCloseHovered ? "rotate-90" : ""
                  }`}
                  style={{ transition: "transform 0.3s" }}
                />
              </button>
            </div>
            <ul className="flex flex-col items-center gap-5 mt-4">
              {NavMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="text-sm inline-block uppercase"
                    onClick={toggleMobileMenu}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              <button className="text-xl mt-4">
                <SlEarphones size={20} />
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </section>
  );
};

export default Navbar;

