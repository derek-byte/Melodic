import React from 'react'
import './Modal.css';
import emailjs from 'emailjs-com';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button   from '@mui/material/Button';
// service_v8xhqon
const Modal = (setModal) => {
    const [email, setEmail] = React.useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_v8xhqon', 'template_spjwo4q', e.target, 'nYSGAfmIgBCUYbMuY')
        .then(function() {
            console.log('SUCCESSFUL');
            setEmail(true);
        }, function(error) {
            console.log('ERRORFUL', error);
        })
    }

  return (
    <div className="emailSend">
        <p style={{color: "white", fontSize: "13px", marginLeft: "10px"}}>Invite Friends to Study With You</p>
        <form onSubmit={sendEmail} style={{display: "flex"}}>
            <TextField id="email" label="Enter Email" variant="filled" style={{width: '100%', color: 'white', marginBottom: "5px"}}/>
            <Button type="submit" variant="submit" style={{backgroundColor: "rgba(30, 40, 97, 0.3)", marginBottom: "5px"}}>Send</Button>
        </form>
        {email ? <div style={{color: "green", fontSize: "13px", marginLeft: "10px"}}>SUCCESS</div>:null}
    </div>
  )
}

export default Modal