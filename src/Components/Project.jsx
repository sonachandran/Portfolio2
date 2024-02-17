import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img3 from './image/img3.png'
import img4 from './image/img4.png'
import img5 from './image/img5.png'
import './Project.css'
const Project = () => {

  const registration = () => {
    window.location.href = 'https://github.com/sonachandran/registration.git';
  };


  const todo = () => {
    window.location.href = 'https://github.com/sonachandran/todolist.git'
  }

  const plant = () => {
    window.location.href = 'https://github.com/sonachandran/plant.git'
  }

  return (
    <div>
       <b><h3 className='d-flex justify-content-center'style={{marginTop:'100px'}}>PROJECT</h3></b> 
      <div className='space d-inline-flex flex-wrap  w-100  justify-content-center  align-items-center mt-5vcard'>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img4} />
          <Card.Body>
            <Card.Title>REGISTRATION</Card.Title>
            <Card.Text>
              Allowing individuals to provide necessary information to create an account or sign up for a service.
            </Card.Text>
            <Button variant="primary" onClick={registration} style={{ background: 'rgb(30, 87, 87)' }}>Git Hub</Button>
          </Card.Body>
        </Card>



        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img3} />
          <Card.Body>
            <Card.Title>TODO-LIST</Card.Title>
            <Card.Text>
              The app helps users stay organized, prioritize work, and track progress on various tasks or projects.
            </Card.Text>
            <Button variant="primary" onClick={todo} style={{ background: 'rgb(30, 87, 87)' }}>Git Hub</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img5} />
          <Card.Body>
            <Card.Title>PLANT</Card.Title>
            It is an online platform dedicated to showcasing and sharing information about various plants.
            <Card.Text>

            </Card.Text>
            <Button variant="primary" onClick={plant} style={{ background: 'rgb(30, 87, 87)' }}>Git Hub</Button>
          </Card.Body>
        </Card>

      </div>
    </div>

  )
}

export default Project

