import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
 <div className='container1' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className='row mt-5 '>
        <h3 style={{color:'rgb(30, 87, 87)'}}>CONTACT ME</h3>
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
{/* 
        <div className='row'>
          <button type="submit">Submit</button>
        </div> */}

    </div>
</div>
  )  
}

export default Contact;