import React from 'react'


import './Contact.css'
const Contact = () => { 
  return (
    <>
 <div className='container1 bg' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className='row 'style={{marginTop:'100px'}}>
   
        {/* <h3 style={{color:'rgb(30, 87, 87)'}}> <b>CONTACT </b></h3> */}
        <h3 style={{color:'black'}}> <b>CONTACT </b></h3>
      </div>

    <div className='items'>
        <div className='row'>
          <label className='label'>FIRSTNAME</label>
          <input type="text" placeholder='Firstname' className='input' />
          <label className='label'>LASTNAME</label>
          <input type="text" placeholder='Lastname' className='input' />
        </div>

        <div className='row'>
          <label className='label'>EMAIL</label>
          <input type="email" placeholder='Email' className='input' />
          <label className='label'>PHONE</label>
          <input type="number" placeholder='Phone' className='input' />
        </div>

        <div className='row'>
          <label className='label'>MESSAGE</label>
          <textarea placeholder='Type your message' className='input' />
        </div>
 
        <div className='row'>
          <button className='button2' type="submit">Sent Message</button>
        </div> 

    </div>
    </div>

    
     

    
    </>
  )  
}

export default Contact;