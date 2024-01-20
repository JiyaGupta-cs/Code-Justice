import React from 'react'
import Sidebar from './Sidebar'
import Webcam from "react-webcam";
import { useRef } from 'react';

const Create = () => {
    const webRef=useRef(null);
    let img = "";
    const showImage=()=>{
         img = webRef.current.getScreenshot();
    }
    
  return (
    <div className="App">
        <div className="AppGlass">

        <Sidebar/>
        <br />
        <div className='me' style={{position:'absolute',right:"14%",bottom:'10%', backgroundColor:'#F4C6ED',borderRadius:'2%'}}>
    <div className='Create'>
      {/* <script src="https://unpkg.com/webcam-easy/dist/webcam-easy.min.js"></script> */}
      

      <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',minHeight:'80vh', minWidth:'60vw'}}>
        <p>Allow Access to Camera</p>
<Webcam ref={webRef}   style={{marginTop:'50px',backgroundColor:'purple'}}  /> 
<br />
<button style={{backgroundColor:'#9264d9', padding:'20px', color:'white', borderRadius:'2px', border:'2px solid white', fontSize:'18px', fontWeight:'800', width:'500px'}} onClick={()=>{
    showImage();
}}>CLICK IMAGE OR SHOOT VIDEO</button>
<br />
{/* <img src={img} alt="" /> */}
</div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Create