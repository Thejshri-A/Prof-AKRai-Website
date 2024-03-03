import React, {useState} from 'react'
import './About.css'
import {motion} from 'framer-motion'

const About = () => {
  
  const transition = { type: "spring", duration: 3};
  const [selected, setSelected]= useState(0);
  const [move, setMove]= useState(false);

  return (
    <div className='about-container' id='about'>
      <div className='blur about-blur-1'></div>
      <div className='blur about-blur-2'></div>
        <div className="academics-header" style={{
            gap: "2rem",
        }}>
            <span> Explore </span>
            <span>More Opportunities </span>
            <span>Learn More</span>
        </div>

        {/* About Card */}
        <span>
        <div className="about">
        <motion.div className="plan"
         animate={{x: move? -10: 100}}
         transition={{type:"tween"}}
          whileHover={{scale:1.2}}
         >
              Students
              <span>PhD Researchers</span>
          
          <div className="feature justify-the-text">
            <span>
              <li>Anup Upadhyaya (Crustal Deformation Studies) </li>
              <li>Mohd Sayeed Ul Hasan (Remote Sensing and GIS in Groundwater studies) </li>
              <li>Shaishav Kumar Jha (Geothermal Modeling) </li>
              <li>Sukanta Malakar (Remote Sensing and GIS) </li>
              <li>Susmita Goswami (Geothermal Energy) </li>
              <li>Vijay Kumar Kannaujiya (Crustal Deformation) </li>
            </span>
            </div>
            {/* <div><span>See More Benefits -</span></div> */}
          <button className="btn">Students</button>
          </motion.div>

          <motion.div className="plan"
         animate={{x: move? -10: 100}}
         transition={{type:"tween"}}
          whileHover={{scale:1.2}}
         >
              Opportunities
              <span>Research Interests</span>
          
          <div className="feature justify-the-text">
            <li>Natural Hazards Modelling</li>
            <li>Active Earth Deformation</li>
            <li>Basin-wide Groundwater Modeling</li>
            <li>Geothermal Energy</li>
            </div>
            <div><span>Are you interested in these fields -</span></div>
          <button className="btn">Interested?</button>
          </motion.div>

          <motion.div className="plan"
            animate={{x: move? -10: 100}}
            transition={{type:"tween"}}
            whileHover={{scale:1.2}}
         >
              Conferences
              <span></span>
         
          <div className="feature justify-the-text">
            <span>
              <li>Study of change in forest cover in Haridwar Region of Uttarakhand State, India Jena R., Pradhan B. , Rai A. K., Beydoun G. By Int. Confrence on Climate Change Impacts, Vulnerabilities, and adaptation 33- (2019)</li>
              <li>Urbanization and Its Impact on Groundwater Availability Using Geospatial Technique Hasan S. U., Rai A. K. By Int. Confrence on Climate Change Impacts, Vulnerabilities, and adaptation (CCIVA2019) 217- (2019)</li>
              <li>Study of Seasonal Variation in Flow Pattern of Baitarni River, Odisha Jena R., Pradhan B. , Rai A. K., Beydoun G. By Int. Confrence on Climate Change Impacts, Vulnerabilities, and adaptation 204- (2019)</li>
              <li>Seismic Hazard in Northern and Central Himalayan Region Malakar S., Rai A. K. By Int. Confrence on Climate Change Impacts, Vulnerabilities, and adaptation 103- (2019)</li>
              </span>
            </div>
            {/* <div><span>See More Benefits -</span></div> */}
          <button className="btn">Published</button>
          </motion.div>

          {/* <div className="feature">
            <span>These are features 1</span>
         
            <span>These are features 2</span>
          
            <span>These are features 3</span>
          </div>

        
          <div><span>See More Benefits -</span></div>
          <button className="btn">Join Now</button> */}

         

        </div>
        </span>
    </div>
  )
}

export default About
