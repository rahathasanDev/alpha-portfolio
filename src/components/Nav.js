import React from "react";
// import icons
import { BiAbacus, BiHomeAlt, BiUser } from "react-icons/bi";
import {
  BsClipboardData,
  BsBriefcase,
  
  BsChatSquareText,
} from "react-icons/bs";
import { FaAddressBook, FaClipboardCheck } from "react-icons/fa";
// link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto"></div>

      {/* nav inner */}
      <div className="w-full  bg-black/20 h-[96px]  backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50 items-center">
        <Link
          to="home"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-200}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        >
          <BiHomeAlt></BiHomeAlt>
        </Link>
        <Link
          to="about"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        >
          <BiUser></BiUser>
        </Link>
        <Link
          to="services"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        >
          <FaClipboardCheck></FaClipboardCheck>
        </Link>
        <Link
          to="work"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        >
          <BsBriefcase></BsBriefcase>
        </Link>
        <Link
          to="contact"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        >
          <BsChatSquareText></BsChatSquareText>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
