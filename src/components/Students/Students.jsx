import React, {useState} from 'react'
import './Students.css'
import { studentsData } from "../../data/studentsData";
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import {motion} from 'framer-motion'

const Students = () => {

  const [selected, setSelected]= useState(0);
  const tLength = studentsData.length;
  const transition = { type: "spring", duration: 3};


  return (<>
    <div className='students'>
       <div className='left-t'>
        <span>Students</span>
        <span>Papers Published</span>
        <motion.span
        key={selected}
        initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}}
        exit={{opacity:0, x:100}}
        transition={transition}
        >
          {studentsData[selected].review}
        </motion.span>
        <span style={{color: 'var(--orange)'}}>
          {studentsData[selected].name}
        </span>
      
    </div>
    <div className='right-t'>
      <motion.div
        initial={{ opacity: 0, x: -100}}
        transition={{...transition, duration: 2}}
        whileInView={{opacity: 1, x: 0}}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100}}
        transition={{...transition, duration: 2}}
        whileInView={{opacity: 1, x: 0}}
      ></motion.div>
      <motion.img 
      key={selected}
      initial={{opacity:0, x:100}}
      animate={{opacity:1, x:0}}
      exit={{opacity:0, x:-100}}
      transition={transition}
      src={studentsData[selected].image} alt=""/>
      <div className="arrows">
        <NavigateBeforeRoundedIcon style={{color: 'white', fontSize:'large'}} 
         onClick={()=>{
          selected===0?setSelected(tLength-1):
          setSelected((prev)=>prev-1);
        }}
        />
        <NavigateNextRoundedIcon style={{color: 'white', fontSize:'large'}} 
         onClick={()=>{
          selected===tLength-1?setSelected(0):
          setSelected((prev)=>prev+1);
        }}
        />
      </div>
      
    </div>
    </div>
    </>
  )
}

export default Students
