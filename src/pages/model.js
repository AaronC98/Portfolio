import React, {useEffect, useState} from "react";

import {motion, useTransform, useViewportScroll} from 'framer-motion';
//Components
import ScrollForMore from "../components/scrollForMore";
//Ease


const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] } ;

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const Model = ({imageDetails, }) => {

  const {scrollYProgress} = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0,1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0,1], [1, 0.75]);

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <motion.div 
    onAnimationComplete={() => setCanScroll(true)}
    initial='initial' 
    animate='animate' 
    exit='exit' 
    className='single'>
      <div className='container fluid'>
        <div className='row center top-row'>
          <div className='top'>
            <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 20, transition: {delay: 1.2, ...transition}}} className='details'>
              <div className='location'>
                <span>&copy;</span>
                <span>2021</span>
              </div>
              <div className='mua'>www.sondermobile.com</div>
            </motion.div>
            <motion.div className='model'>
              <motion.span className='first' variants={firstName}>
                <motion.span variants={letter}>S</motion.span>
                <motion.span variants={letter}>O</motion.span>
                <motion.span variants={letter}>N</motion.span>
                <motion.span variants={letter}>D</motion.span>
                <motion.span variants={letter}>E</motion.span>
                <motion.span variants={letter}>R</motion.span>
              </motion.span>
              <motion.span className='last' variants={lastName}>
                <motion.span variants={letter}>M</motion.span>
                <motion.span variants={letter}>O</motion.span>
                <motion.span variants={letter}>B</motion.span>
                <motion.span variants={letter}>I</motion.span>
                <motion.span variants={letter}>L</motion.span>
                <motion.span variants={letter}>E</motion.span>

              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className='row bottom-row'>
          <div className='bottom'>
            <div className='image-container-single'>
              <motion.div initial={{
                y: "-50%",
                width: imageDetails.width, 
                height: imageDetails.height}} 
                animate={{
                  y: 0,
                  width: "100%",
                  height: window.innerWidth > 1440 ? 800 : 400,
                  //adds delay to the initial transition
                  transiton: {delay: .2, ...transition}
                }}
                className='thumbnail-single'>
                <div className='frame-single'>
                  <motion.img 
                  style={{scale: scale,
                          opacity: opacity}}
                  opacity={{opacity: opacity}}
                  initial={{scale: 1}}
                  animate={{
                    transition: {delay: .2, ...transition},
                    y: window.innerWidth > 1440 ? -1600 : -900,
                  }}
                  src={require("../images/profile.jpg")} alt='an image' />
                </div>
              </motion.div>
            </div>
          </div>
          <ScrollForMore />
        </div>
      </div>
      <div className='detailed-information'>
        <div className='container'>
          <div className='row'>
            <h2 className='title'>
            Lorem ipsum dolor sit amet, consectetur <br />  adipiscing elit
            </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br/> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequ.
            </p>
          </div>
          <div className='row'>
          <h2 className='title'>
            Lorem ipsum dolor sit amet, consectetur <br />  adipiscing elit
            </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className='footer'>
        <h2 className='title'>
            www.sondermobile.com
        </h2>
        </div>
        
      </div>
    </motion.div>
  );
};

export default Model;
