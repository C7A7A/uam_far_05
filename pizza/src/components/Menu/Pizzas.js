import React from 'react'
import { useState, useEffect } from 'react'
import { ListGroup, ListGroupItem, Row, Col, Form } from 'react-bootstrap'

export const Pizzas = ({handleShow}) => {
  const [pizzaList, setPizzaList] = useState([])

  const pizzaUrlAPI = 'http://localhost:3333/api/pizza'

  useEffect(() => {
    fetch(pizzaUrlAPI)
      .then((response) => response.json())
      .then((data) => setPizzaList(data))
  }, [])

  const showIngredientList = (pizzaName, ingredientList) => {
    handleShow(pizzaName, ingredientList)
  }

  return (
    <>
    <ListGroup as="ul" className="d-flex justify-content-start p-3">
      <ListGroupItem as="li" className="bg-dark text-white">
        Pizzas
      </ListGroupItem>
      {
        pizzaList.map((pizza) => {
          return (
            <ListGroupItem as="li" key={pizza.id}>
                <Row className="text-start">
                  <Col className="align-self-center col-2">
                    {pizza.name.toLowerCase()}
                  </Col>
                  <Col className="align-self-center col-2">
                    {pizza.price} PLN
                  </Col>
                  <Col className="align-self-center col-6">
                    <span className="btn btn-outline-info" onClick={event => showIngredientList(pizza.name, pizza.ingredients)}>
                      Ingredient list
                    </span>
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
