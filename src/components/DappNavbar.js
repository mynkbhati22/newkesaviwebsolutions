import React, { useState } from "react";
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
import { AiFillCopyrightCircle } from "react-icons/ai";
import logo from "./image/logo.png";
import "./DappNavbar.css";
import { NavLink } from "react-router-dom";

export default function DappNavbar() {
  const sidebarInfo = [
    {
      path: "/",
      name: "BACK TO HOMEPAGE",
      icon: <FaHome />,
    },
    {
      path: "/tutorial",
      name: "TUTORIAL",
      icon: <RiGuideFill />,
    },
    {
      path: "/faq",
      name: "FAQ",
      icon: <FaQuestionCircle />,
    },
  ];
  // state
  const [open, setOpen] = useState(true);
  const toggle = () => setOpen(!open);

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
  return (
    <div>
      <div
        className="sidebar-container position-fixed"
        style={{ top: "0", left: "0" }}
      >
        <motion.div
          animate={{
            width: open ? "288px" : "50px",
            background: open ? "#ffff" : "#22ABE3",
            transition: {
              duration: 0.6,
              type: "keyframes",
            },
          }}
          className="sidebar"
        >
          <div className="sidebar-logo">
            <div className="bars d-md-none">
              {<FaBars color="#000000" size={22} onClick={toggle} />}
            </div>
            <div className="logo">
              {open && <img src={logo} alt="" className="logo-img" />}
            </div>
          </div>
          <div className="sidebar-content">
            {sidebarInfo.map((content) => (
              <NavLink
                to={content.path}
                key={content.name}
                className="sidebar-link"
              >
                <div className="icon">{content.icon}</div>
                <AnimatePresence>
                  {open && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="content_name"
                    >
                      {content.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            ))}
          </div>
          <div className="sidebar-footer" style={{ marginTop: "300px" }}>
            <div
              className="icons"
              style={{
                marginBottom: "20px",
              }}
            >
              <a
                href="https://www.facebook.com/Kesaviweb"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF size={22} style={{ marginLeft: "10px" }} />
              </a>
              <a
                href="https://twitter.com/KesaviS"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter size={22} style={{ marginLeft: "10px" }} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCDRT0QQa2St9IL7OVhEs9EA"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube size={22} style={{ marginLeft: "10px" }} />
              </a>
            </div>
            <div className="copy-right">
              <AiFillCopyrightCircle
                color={"black"}
                size={22}
                style={{ marginLeft: "10px" }}
              />
              {open && (
                <p style={{ color: "black", marginLeft: "10px" }}>
                  2017-22 Kesavi Web Solutions | All Rights Reserved
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
