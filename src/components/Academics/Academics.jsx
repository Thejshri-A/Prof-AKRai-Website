import React from 'react'
import './Academics.css'
import {academicsData} from '../../data/academicsData'
import { motion } from "framer-motion"

const Academics = () => {
    console.log("Academics Data: ", academicsData)
  return (
    <div className='Academics' id="academics">
      {/* Header */}
      <motion.div className="academics-header"
      
      >
        <span>Academic Interests </span>
      </motion.div>
      <div className="program-categories">
        <div  className="category">
            <span>Teaching</span>
            <span className="justify-the-text">Teaching is something which I like the most.  I have taught the following courses of PG level at IIT Kharagpur, IIT Bhubaneswar and University of Oslo.  At IIT Kharagpur:
                Global Tectonics and Climate (CL60004),
                Dynamics of Fluvial Systems (CL60001),
                Atmospheric and Hydrological Modeling Lab (CL69003).
                At IIT Bhubaneswar : 
                Geophysical Techniques (ES5L201); 
                Understanding Earth System (ES5L101); 
                Computational Geosciences (ES5L105); 
                Reservoir Characterization (ES5L401); 
                Engineering Geology and Rock Mechanics (ES5L204); 
                Tectonics and Crustal Evolution (ES5L417) 
                Coal and Petroleum Geology (ES5L302)
                Computational Geosciences Lab (ES5P105) 
                and a few more similar courses. 
                At Univ. of Oslo: 
                Seismic Signal Processing (Geo4280) 
            </span>
        </div>
        <div  className="category">
            <span>Projects</span>
            <span className="justify-the-text">I am involved in the following projects with students: 

2019-21. (PI): Modeling converted phases in OBS data (ISIRD, IIT Kharagpur).
2019-24 (PI). An Integrated Geophysical Approach to Understand Hot-springs and Geothermal Resources of Odisha (MoES). 
2019-23 (PI) Mapping Active Earth Movements along Odisha and Bengal Coast by CORS-GPS, Seismological and MT-InSAR Observations (DST)
2016-18. Sub-project (Co-PI): Identifying the Seismogenic Sources (faults/fractures) in the Bay of Bengal Using Multi-Disciplinary Geophysical Experiments (Under BoBCO) IIT Bhubaneswar.  </span></div>
        <div  className="category">
            <span>Memberships</span>
            <span className="justify-the-text">Guest Faculty/Invited Lectures: 
2017 (Nov. 19-25th).  “Course on Mineralogy, Petrology, Structural Geology and Geophysics”, at Indian Academy of Sciences, Bangalore. 

Dec. 2006. Invited Lecture in short-term course "Theory of Plate Tectonics” and “Probing the Earth using Seismology” at DST sponsored Intensive course on “Elasticity theory of Dislocation and Inversion of Ground Surface strain fields”. Tezpur University. 

Conference/Workshop Organised
Feb. 26th - March 2nd, 2019. International Conference on "Climate Change Impacts, Vulnerabilities, and Adaptation: Emphasis on India and Neighbourhood (CCIVA 2019)", at CORAL, IIT Kharagpur.   

Feb. (11,12) 2010. International Workshop “NERIES-ESONET OBS-Marine Seismology” at IPG. Paris, France.  


Member of Scientific Expeditions
Aug. 31st –Sept. 11th 2009: Member of the scientific expedition on the Multi-disciplinary Project (BATHYLUCK09), Mid-Atlantic Ridge (37°N), on the French R/V Pourquoi Pas?  </span>        </div>
        </div>
    <div className="program-categories">
        {academicsData.map((program)=>{
            <>
            <span>Here</span>
            <div className="category">
                <span>Change</span>
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className='join-now'>
                    <span>
                        Prof Abhishek
                    </span>
                </div>
            </div></>

        })}
    </div>
    </div>
  )
}

export default Academics
