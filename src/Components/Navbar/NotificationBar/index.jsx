import React, { useState } from "react";
import "./NotificationBar.css"; // Import your CSS file for styling
import google_icon from "../../../assets/google_icon.png/";
import switch_account_icon from "../../../assets/switch_account_icon.png/";
import setting_icon from "../../../assets/setting_icon.png";
import help_icon from "../../../assets/help_icon.png";
import feedback_icon from "../../../assets/feedback_icon.png";
import greater_then_icon from "../../../assets/greater_then_icon.png";
import Mymodal from "../Popover/Mymodal";
import Profile from "../Popover/Profile";

import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Popover = ({ Toggle, close }) => {
  return (
    <>
      <Modal open={Toggle} onClose={close}>
        <div className="youtube-popover-container">
          {Toggle && (
            <div className="popover-content">
              <hr />

              <div className="popover-flex">
                <p>Google Accout lorem sfsdkjfnjs njsdjgnsd jnfsdjkfsd jnfnfsd nfhjifsdf  fnsdjifs</p>
              </div>
              <hr />
              <div className="popover-flex">
            
                <p>Switch Account </p>{" "}
                <p>Google Accout lorem sfsdkjfnjs njsdjgnsd jnfsdjkfsd jnfnfsd nfhjifsdf  fnsdjifs</p>

               
              </div>
              <hr />

              <div className="popover-flex">

                <p>Setting</p>
                <p>Google Accout lorem sfsdkjfnjs njsdjgnsd jnfsdjkfsd jnfnfsd nfhjifsdf  fnsdjifs</p>

              </div>

              <hr />

              <div className="popover-flex">
        
                <p>Help</p>
                <p>Google Accout lorem sfsdkjfnjs njsdjgnsd jnfsdjkfsd jnfnfsd nfhjifsdf  fnsdjifs</p>

              </div>
              <div className="popover-flex">
        
                <p>Send feedback</p>
                <p>Google Accout lorem sfsdkjfnjs njsdjgnsd jnfsdjkfsd jnfnfsd nfhjifsdf  fnsdjifs</p>

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
