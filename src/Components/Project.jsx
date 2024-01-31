import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img3 from './image/img3.png'
import img4 from './image/img4.png'
import img5 from './image/img5.png'


const Project = () => {
  return (

<div className='row' style={{display:'flex',flexWrap:'wrap', margin:'170px'}}>
  <div className='col-lg-4 col-md-4 col-sm-12'>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img4}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"></Button>
      </Card.Body>
    </Card> 
  </div>


<div className='col-lg-4 col-md-4 col-sm-12'>
<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img3}/>
    <Card.Body>
      <Card.Title>TODO-LIST</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card> 
</div>

  <div className='col-lg-4 col-md-4 col-sm-12'>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img5} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> 
  </div>

</div>
  )
}

export default Project