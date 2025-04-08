import React, { useState } from 'react'
import axios from 'axios'
import {ScaleLoader} from 'react-spinners'

const Chatbot = () => {
    const [intputData,setInputData]=useState("")
    const [qns,setQns]=useState("Hii")
    const[ans,setAns]=useState("Hello, how can i help you !")
    const [loading,setLoading]=useState(false)

    const url=" https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key="
    const API_KEY="AIzaSyAl-YICA7N8-GdnRyo8_yoGhQUA3DAgNCc"
    const sendingData={"contents": [{
        "parts":[{"text": ""}]
        }]}
        const getData=()=>
        { setLoading(true)
            setAns("")
            setQns("")
            
          const data=axios.post(`${url}+${API_KEY}`,sendingData)
          .then((res)=>
        { 
            console.log("rea",res.data.candidates[0].content.parts[0].text);
            setAns(res.data.candidates[0].content.parts[0].text)
            setQns(sendingData.contents[0].parts[0].text)
            setLoading(false)
            
        })
        .catch((err)=>
        {
            console.log(err);
            setLoading(false)
            
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
    // AIzaSyAl-YICA7N8-GdnRyo8_yoGhQUA3DAgNCc
    <div className='container'>  
       <div className="data-container">
        <p className="qns">{qns} </p>
        <p className="ans">{ans}</p>
        <ScaleLoader className='loader' loading={loading}/>

         </div>

       <div className="input-container">
        <input type='text' placeholder='Ask to A.I' onChange={handleInput}></input>
        <button onClick={getData}>Submit</button>
       </div>
    </div>
  )
}

export default Chatbot 
