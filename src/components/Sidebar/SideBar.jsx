import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import logo from "../../assest/icons/dashbord.svg";
import key from "../../assest/icons/key-square.svg";
import Gruh from "../../assest/icons/gruhlar.svg";
import Uquvchilar from "../../assest/icons/user.svg";
import Bugaltera from "../../assest/icons/bugaltera.svg";
import Sozlamalar from "../../assest/icons/sozlamalar.svg";
import Xabar from "../../assest/icons/xabar.svg";



import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    image: key,
  },
  {
    path: "/users",
    name: "Guruhlar",
    image: Gruh,
  },
  {
    path: "/messages",
    name: "O’quvchilar",
    image: Uquvchilar,
  },
  {
    path: "/analytics",
    name: "Bug’alteriya",
    image: Bugaltera,
  },

  {
    path: "/order",
    name: "Sozlamalar",
    image: Sozlamalar,
  },

  {
    path: "/saved",
    name: "Yordam",
    image: Xabar,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


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
            width: isOpen ? "300px" : "45px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section title">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
               
                >
                   Dashboard
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <img src={logo} onClick={toggle} />
            </div>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
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
                  <div className="icons">{<img src={route.image } alt='img'  />}</div>
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

export default SideBar;
