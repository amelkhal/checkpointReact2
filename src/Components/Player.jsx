import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Player = ({data}) => {
    const {name='ahmed',age,team,nationality,jerseyNumber,imageUrl}=data
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        
        <Card.Title>{name} {age}</Card.Title>
        <Card.Title>{team},{nationality} {jerseyNumber}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}
