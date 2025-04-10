import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import Main from './Main/Main'
const Sidebar = () => {
    const [extend, setExtende] = useState(false);
    return (
             
        <div className='sidebar'> 
            <div className="top">
                <img onClick={()=>setExtende(prev=>!prev)} className='menu' src={assets.menu_icon} alt='' />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt='' />
                    {extend ?<p>New Chat</p>:null } 
                </div>
            
               {extend ? 
                <div className="recent"> 
                    <p className="recent-title"> Recent</p>
                    <div className="recent-entry"> 
                        <img src={assets.message_icon} alt='' />
                       {extend ? <p>yt</p>:null }
                    </div>
                </div>
                :null}
            </div>

            <div className="bottom">
                <div className=" buttom-item recent-entry">
                    <img src={assets.question_icon} alt=''></img>
                   {extend ?<p>Help</p>:null } 

                </div>
                <div className=" buttom-item recent-entry">
                    <img src={assets.history_icon} alt=''></img>
                    {extend ?<p>Activity</p>:null } 

                </div>
                <div className="buttom-item recent-entry">
                    <img src={assets.setting_icon} alt=''></img>
                    {extend ?<p>Setting</p>:null } 

                </div>


            </div>
        </div>
    )
}

export default Sidebar
