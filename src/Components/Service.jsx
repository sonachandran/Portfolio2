import React from 'react'
import Card from 'react-bootstrap/Card';
import './Service.css'

const Service = () => {
  return (
   <>
   <div className='row '>
      <div className='container col ser'>
         <h3>SERVICES</h3>
      </div>
    </div>

 <div className='row mt-5'style={{marginLeft:'150px'}}>
    <div className='col-lg-4 col-md-4 col-sm-12 '>
   <Card style={{ width: '18rem', height:'300px'}}>
      <Card.Body>
        <Card.Title>Front-End</Card.Title>
        <Card.Text>
        Building the user interface and user experience of a website or application that users interact with directly.<br/>
        Designing and developing the visual aspects of the application, including layouts, buttons, forms, and other elements.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className='col-lg-4 col-md-4 col-sm-12'>
   <Card style={{ width: '18rem' ,height:'300px' }}>
      <Card.Body>
        <Card.Title>Back-End</Card.Title>
        <Card.Text>
        Building the server, database, and application logic that enable the frontend to function. <br />
        Crafting powerful MERN FULL-STACK applications with robust back-end development
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className='col-lg-4 col-md-4 col-sm-12'>
   <Card style={{ width: '18rem' ,height:'300px' }}>
      <Card.Body>
        <Card.Title>UI & UX Design</Card.Title>
        <Card.Text>
        UI/UX design focuses on creating an intuitive, visually appealing, and user-friendly experience for the application's users.<br/>   
        Wireframing and Prototyping: Creating visual representations (wireframes and prototypes) of the application's layout and flow.
        </Card.Text>
      
      </Card.Body>
    </Card>
    </div>


  </div>
   </>
  )
}

export default Service