import React from 'react'
import { useState, useEffect } from 'react'
import { ListGroup, ListGroupItem, Row, Col, Form } from 'react-bootstrap'

export const Sauces = () => {
  const [sauceList, setSauceList] = useState([])

  const sauceUrlAPI = 'http://localhost:3333/api/sauce'

  useEffect(() => {
    fetch(sauceUrlAPI)
      .then((response) => response.json())
      .then((data) => setSauceList(data))
  }, [])

  return (
    <>
    <ListGroup as="ul" className="d-flex justify-content-start p-3">
      <ListGroupItem as="li" className="bg-dark text-white">
        Sauces
      </ListGroupItem>
      {
        sauceList.map((sauce) => {
          return (
            <ListGroupItem as="li" key={sauce.id}>
                <Row className="text-start">
                  <Col className="align-self-center col-2">
                    {sauce.name}
                  </Col>
                  <Col className="align-self-center col-8">
                    {sauce.price} PLN
                  </Col>
                  <Col>
                    <Form.Control type="number" defaultValue="0" min="0" className="text-center" />
                  </Col> 
                </Row>
            </ListGroupItem>
          )
        })
      } 
    </ListGroup>
    </>
  )
}
