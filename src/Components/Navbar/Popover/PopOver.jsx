import React, { useState } from 'react';
import './PopOver.css'; // Import your CSS file for styling
import google_icon from '../../../assets/google_icon.png/'
import switch_account_icon from '../../../assets/switch_account_icon.png/'
import logout_icon from '../../../assets/logout_icon.png/'
import profile_icon from '../../../assets/jack.png'
import setting_icon from '../../../assets/setting_icon.png'
import help_icon from '../../../assets/help_icon.png'
import feedback_icon from '../../../assets/feedback_icon.png'
import greater_then_icon from '../../../assets/greater_then_icon.png'
import {useNavigate} from 'react-router-dom';
import Mymodal from './Mymodal';
import Profile from './Profile';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Popover = ({Toggle,close}) => {
  // const navigate = useNavigate();
  //  const [ProfileBox,setProfileBox] = useState()
  return (
    <>  
    <Modal
    open={Toggle  }
    onClose={close}

    >

    {/* <Box sx={{ ...style, width: 200 }}> */}
      <div className="youtube-popover-container">
     
      {Toggle && (
        <div className="popover-content">
          {/* Your popover content goes here */}

    {/* <div className='popover-flex'>
    <img src={profile_icon} alt=""  className='profile_icon'/><p>Profile</p>
    </div> */}
    
    <Profile />
    <hr />

    <div className='popover-flex'>
    <img src={google_icon} alt="" /><p>Google Accout</p>
    </div>

 <div  className='popover-flex'>
 <img src={switch_account_icon} alt="" /><p>Switch Account</p>      <span><img src={greater_then_icon} alt="" /></span> 
 </div>


     <Mymodal/>      

   <hr /> 

  <div   className='popover-flex'>
  <img src={setting_icon} alt="" /><p>Setting</p>
  </div> 

<hr />

<div   className='popover-flex'>
  <img src={help_icon} alt="" /><p>Help</p>
  </div> 
<div   className='popover-flex'>
  <img src={feedback_icon} alt="" /><p>Send feedback</p> 
  </div> 
        </div>
      )}

    </div>
    {/* </Box> */}
    </Modal>
    </>

  );
};

export default Popover;




// ----------------------------------------------------

