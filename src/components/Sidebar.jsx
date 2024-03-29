import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/cdlogo.png";
// import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
      <Link style={{textDecoration:'none',color:'inherit'}} to={"../"}>
        <img className="cimg" src={Logo} alt="logo" />
        </Link>

        {/* <span>
          Code <br /> <span>Justice</span>
        </span> */}
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
          
            
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <Link style={{textDecoration:'none',color:'inherit'}} to={item.url}>
                <div style={{    display: 'flex',    alignItems: 'center',    gap: '10px'}}>
              <item.icon />
              
              {/* <span><a style={{textDecoration:'none',color:'inherit'}} href={item.url}>{item.heading}</a></span> */}
              <span>
                <Link style={{textDecoration:'none',color:'inherit'}} to={item.url}>{item.heading}</Link>
                </span>
                </div>
                </Link>
            </div>
            
          
          );
        })}
        {/* signoutIcon */}
        <div className="menuItem">
          {/* <UilSignOutAlt /> */}
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;
