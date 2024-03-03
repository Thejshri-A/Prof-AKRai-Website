import React, {useState} from 'react'
import './Awards.css'
import SmileQuote from "../../assets/DummyPic.png"
import Aesthetic from "../../assets/DreamPic.jpg"
import WomanPowerQuote from "../../assets/WomanPowerQuote.jpg"
import WhereToVoteRoundedIcon from '@mui/icons-material/WhereToVoteRounded';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import AttractionsIcon from '@mui/icons-material/Attractions';
import CelebrationIcon from '@mui/icons-material/Celebration';
import SimpleImageSlider from "react-simple-image-slider";


const Awards = () => {

    const [imageNum, setImageNum] = useState(1);
    const sliderImages = [
        {
            url: SmileQuote
        },
        {
            url: Aesthetic
        },
        {
            url: WomanPowerQuote
        },
    ];

  return (<>
    <div className='Awards' id='awards'>
        {/* Left Section */}
      <div className="left-r">
        <img src={SmileQuote} alt=""/>
        <img src={Aesthetic} alt=""/>
        <img src={Aesthetic} alt=""/>
        <img src={WomanPowerQuote} alt=""/>
      </div>

        {/* Right Section */}
      <div className="right-r">
        <span>Some Insights</span>
        <div>
        <span>Awards and </span>
        <span>Accolades</span>
        </div>

        <div className='details-r'>
            <div>
                {/* <WhereToVoteRoundedIcon/> */}
                <MilitaryTechRoundedIcon/>
                <span>Cambridge Ph.D. Fellowship. (Cambridge Commonwealth Trust)</span>
            </div>
            <div>
            <MilitaryTechRoundedIcon/>
                <span>IIT BHU Gold Medal (For 1st rank in M.Sc.(Tech.))</span>
            </div>
            <div>
            <MilitaryTechRoundedIcon/>
                <span>Prof. J. S. Memorial Grant of Indian Geophysical Union</span>
            </div>
            <div>
            <MilitaryTechRoundedIcon/>
                <span>National Scholarship India during schooling</span>
            </div>
        </div>
        <div className='details-r'>
            <div>
                <WhereToVoteRoundedIcon/>
                <span>Post-Doctorate: Univ. of Oslo (Norway),  IPG Paris (France).</span>
            </div>
            <div>
                <WhereToVoteRoundedIcon/>  
                <span>Ph.D. (University of Cambridge, UK) </span>
            </div>
            <div>
                <WhereToVoteRoundedIcon/>
                <span>M.Sc. (Tech.) in Geophysics (IIT BHU, Varanasi) (Gold Medal)</span>
            </div>
            <div>
                <WhereToVoteRoundedIcon/>
                <span>B.Sc. (VBS Purvanchal University Jaunpur)</span>
            </div>
        </div>
        

        {/* <div className='partners'>
            <span className='interests'>Catastrophe Modelling</span>
            <span className='interests'>Active Earth Deformation</span>
            <span className='interests'>Basin-wide Groundwater Modelling</span>
            <span className='interests'>Geothermal Energy</span>
        </div> */}
        
      </div>
    </div>
    <div className="Awards-buttons button1" >
    <span style={{
            color : 'white', fontWeight: "bold",
        }}>Research Interests</span>
    <buttons className="awards-btn button1">Catastrophe Modelling</buttons>
    <buttons className="awards-btn">Active Earth Deformation</buttons>
    <buttons className="awards-btn">Basin-wide Groundwater Modelling</buttons>
    <buttons className="awards-btn">Geothermal Energy</buttons>
    </div>
<div className="slider">
        <SimpleImageSlider
            width={1350}
            height={600}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
               index=index+1;
            }}
               autoPlayDelay = {3}
         />
</div>
</>
  )
}

export default Awards
