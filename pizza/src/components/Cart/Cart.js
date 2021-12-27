import React from 'react'
import { Card, Button } from 'react-bootstrap'

export const Cart = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title> <h2> Summary </h2> </Card.Title>
        <section>
          summary table
        </section>
        <section>
          summary price
        </section>
        <section className="col-12">
          <Button className="float-end" variant="success">   
            Accept 
          </Button>
        </section>
      </Card.Body>
    </Card>
  )
}
