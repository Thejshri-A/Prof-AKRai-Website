import React, { useState } from 'react'
import Header from '../Header/Header'
import './Home.css'
import Aesthetic from "../../assets/Aesthetic.jpg"
import SmileQuote from "../../assets/SmileQuote.jpg"
// import BackgroundVideo from "../../assets/BackgroundVideo.mp4"
import BeautifulQuote from "../../assets/DummyPic.png"
import IITKGP from "../../assets/IITKGP.png"
import { motion } from "framer-motion"
import NumberCounter from "number-counter";

const Home = () => {

    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false;
    const [rotate, setRotate] = useState(false);
    const [rotate2, setRotate2] = useState(false);
    const [move, setMove] = useState(false);

    return (

        <div className="home" id='home'>
            <div className="overlay"></div>
            {/* <video src={BackgroundVideo} autoPlay loop muted/> */}
        <div className='content'>
            <div className='home-blur'>
                    <img src={BeautifulQuote}/>
            </div>
            {/* <motion.div className='blur home-blur'
                animate={{ x: move ? 100 : 700 }}
                transition={{ ...transition, type: "tween", duration: 5 }}>
            </motion.div> */}
            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? "178px" : '308px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    >

                    </motion.div>
                    <span><img src={IITKGP} alt="Logo"/> </span>
                    <span>  Indian Institute of Technology Kharagpur</span>
                </div>

                <div className="home-text">
                    <motion.div animate={{ y: -10, scale: 1 }} initial={{ scale: 0 }}><span>Dr. Abhishek </span>
                        {/* <div><span className="lineUp">Dr. Abhishek </span> */}
                        <span>K. Rai </span>
                    </motion.div>
                    <div>
                        <span></span>
                        {/* <span className="stroke-text">(IIT Kharagpur)</span> */}
                    </div>
                    <div className="justify-the-text">
                        <span className="justify-the-text">
                            Welcome to the Marine Resources, and Natural Hazards Group at Centre for Oceans, Rivers, Atmosphere, and Land Sciences (CORAL), Indian Institute of Technology Kharagpur (IITKGP).
                            I was born in Ballia district of eastern Uttar Pradesh.  Ballia is famous for its cultural and historical  importance, and contributions in the freedom struggle of India. After completing my basic education, and Bachelor's (B.Sc.) from my home town, I obtained M.Sc. (Tech.) in Geophysics from BHU Varanasi with Gold Medal.
                            I earned a Ph.D. degree from the University of Cambridge, UK, and Post-Doctorate from IPGP, France, and Univ. of Oslo in marine geophysical studies. We have a number of observational instruments such as broadband seismometers, Geodetic grade GPS receiver and antenna, and Very Low Frequency - EM for subsurface resistivity estimation.
                            Climate change is likely to have a severe impact globally in general, and more particularly in the coastal areas which are densely populated. At present, I am interested in detailed study of the east coast of India particularly the crustal deformation, groundwater modeling and geothermal energy prospects. My research interests includes study of active earth deformation, coastal hazards,groundwater vulnerability, geothermal energy using integrated non-invesive techniques besides using remote sensing products derived from satellite.
                        </span>
                    </div>
                </div>
                {/* Figures */}

                {/* home Buttons */}

                <div className="home-buttons">
                    <motion.buttons className="btn"
                        animate={{ rotate: rotate ? 360 : 0 }}
                        onClick={() => {
                            setRotate(!rotate);
                        }}
                    >
                        <NumberCounter end={40} start={1} delay="1" preFix="+" /> : Projects
                    </motion.buttons>
                    <motion.buttons className="btn"
                        animate={{ rotate: rotate2 ? 360 : 0 }}
                        onClick={() => {
                            setRotate2(!rotate2);
                        }}
                    >
                        <NumberCounter end={200} start={150} delay="3" preFix="+" /> : Papers
                    </motion.buttons>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home
