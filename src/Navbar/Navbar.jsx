import React, { useState, useEffect } from "react";
import { Menubardata } from "./Navbardata";
import "./Navbar.css";
import Manisha2 from "../assets/Manisha2.png";
// import { ImEnter } from "react-icons/im";
// import { BiHomeHeart } from "react-icons/bi";
// import { MdBusinessCenter } from "react-icons/md";
// import { GrApps } from "react-icons/gr";
// import { GrPhone } from "react-icons/gr";
// import { useEffect } from "react";

export default function Navbar() {
  // const [activeLink, setActiveLink] = useState("home");
  // const [scrolled, setScrolled] = useState(false);
  // useEffect(() => {
  //   const onScroll = () => {
  //     if (window.scrollY > 50) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);
  // const onUpdateActiveLink = (value) => {
  //   setActiveLink(value);
  // };
  return (
    // <div className="p-3 text-3xl">
    //   <button>
    //     <ImEnter />
    //   </button>
    //   <div className="Navbar">
    //     <div className=" p-3 text-3xl stroke-cyan-500  ">
    //       {/* <a href="#">
    //         <ImEnter />
    //       </a> */}

    //       <a href="#">
    //         <BiHomeHeart />
    //       </a>

    //       <a href="#">
    //         <MdBusinessCenter />
    //       </a>
    //       <a href="#">
    //         <GrApps />
    //       </a>
    //       <a href="#">
    //         <GrPhone />
    //       </a>
    //     </div>
    //   </div>
    // </div>

    <div className="  p-2 text-right text-sky-400/100 " id="all">
      <div className="h-2 w-20">
        <img className="imgg" src={Manisha2} alt="logo" />
      </div>
      <div className="p-1">
        <a herf="#about">About</a>&ensp;&ensp;
        <a herf="#experience">Experience</a>&ensp;&ensp;
        <a herf="#projects">Projects</a>&ensp;&ensp;
        <a herf="#contact">Contact</a>&ensp;&ensp;
      </div>
    </div>
  );
}
