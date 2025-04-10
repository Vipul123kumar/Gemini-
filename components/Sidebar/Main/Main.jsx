import React from 'react'
import './Main.css'
import { assets } from '../../../assets/assets'
import axios from 'axios'
import { useState } from 'react'
const Main = () => {
    const url=" https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key="
    const API_KEY="AIzaSyAl-YICA7N8-GdnRyo8_yoGhQUA3DAgNCc"
    const [intputData,setInputData]=useState("")
    const [qns,setQns]=useState("Hii")
    const[ans,setAns]=useState("Hello, how can i help you !")

//     const url=" https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key="
//     const API_KEY="AIzaSyAl-YICA7N8-GdnRyo8_yoGhQUA3DAgNCc"
    const sendingData={"contents": [{
        "parts":[{"text": ""}]
        }]}
        const getData=()=>
        {
          const data=axios.post(`${url}+${API_KEY}`,sendingData)
          .then((res)=>
        { 
            console.log("rea",res.data.candidates[0].content.parts[0].text);
            setAns(res.data.candidates[0].content.parts[0].text)
            setQns(sendingData.contents[0].parts[0].text)
            
        })
        .catch((err)=>
        {
            console.log(err);
            
        })
        }
   const handleInput=(event)=>
   {
    // setqns(event.target.value)

//    console.log(event.target.value);
   const inputValue=event.target.value;
    // setInputData(event.target.value)
    sendingData.contents[0].parts[0].text=inputValue;
   
    console.log(sendingData);
      
   }   
    
  return (
    <div className='main'>

      <div className="nav">
        <p>Gimini </p>
        <img src={assets.user_icon} alt=''/>

      </div>
      <div className="main-container">
        <div className="greet">
            <p>
                <span>Hello, Dev</span>
            </p>
            <p>How can i help you today ?</p>
        </div>
     <div className="cards">
            <div className="card">
                <p>Suggest beautiful palce to see on an upcoming  road trip
                </p>
                <img src={assets.compass_icon} alt=''/>

            </div>
            <div className="card">
                <p> COME nad fekjttjlo
                </p>
                <img src={assets.bulb_icon} alt=''/>
                
            </div>
            <div className="card">
                <p>Lorem ipsum  animi? Sapiente expedita saepe libero odio. Asperiores, ullam.
                </p>
                <img src={assets.message_icon} alt=''/>
                
            </div>
            <div className="card">
                <p>Lorem io odio. Asperiores, ullam.
                </p>
                <img src={assets.code_icon} alt=''/>
                
            </div>

     </div>

        <div className="main-bottom">
            <div className="search-box">
                <input type='text' placeholder='Enter a prompt'onChange={handleInput}/>
                <div>
                    <img src={assets.gallery_icon}alt=''/>
                    <img src={assets.mic_icon}alt=''/>
                    <img src={assets.send_icon} onClick={getData}  alt=''/>
                </div>
            </div>
            {/* <p className="bottom-info">
                Gemini may display inaccurate info, including about people so double check its  
            </p> */}
        </div>
      </div>
    </div>
  )
}

export default Main
