import React, { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { SiBinance, SiPolymerproject } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaHome,
  FaQuestionCircle,
  FaBars,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { RiGuideFill } from "react-icons/ri";
import { AiFillCopyrightCircle, AiTwotoneFire } from "react-icons/ai";
import logo from "./image/logo.png";
import "./DappNavbar.css";
import { NavLink } from "react-router-dom";
import SiderbarMenu from "./SiderbarMenu";

import Web3 from "web3";

const web3 = new Web3(window.ethereum);
console.log(web3);

// state

const sidebarInfo = [
  {
    path: "/",
    name: "BACK TO HOME PAGE",
    icon: <FaHome />,
  },
  {
    path: "/users",
    name: "TUTORIAL",
    icon: <RiGuideFill />,
  },
  {
    path: "/messages",
    name: "FAQ",
    icon: <FaQuestionCircle />,
  },
  {
    path: "/",
    name: "CREATE TOKEN",
    icon: <AiTwotoneFire />,

    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaEthereum />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <SiBinance />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <SiPolymerproject />,
      },
    ],
  },
];

const showAnimation = {
  hidden: {
    width: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },

  show: {
    width: "auto",
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

const DappNavbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  DoSomeCoding
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <section className="routes">
            {sidebarInfo.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SiderbarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};
export default DappNavbar;
