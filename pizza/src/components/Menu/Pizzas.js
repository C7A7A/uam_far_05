import React from 'react'
import { useState, useEffect } from 'react'
import { ListGroup, ListGroupItem, Row, Col, Form } from 'react-bootstrap'
import { ClipLoader } from 'react-spinners'
import { useFormContext } from 'react-hook-form'

export const Pizzas = ({handleShow}) => {
  const [pizzaList, setPizzaList] = useState([])
  const [loading, setLoading] = useState(false)

  const { register } = useFormContext()

  const pizzaUrlAPI = 'http://localhost:3333/api/pizza'
  
  const fetchPizzas = async () => {
    setLoading(true)
    await fetch(pizzaUrlAPI)
      .then((response) => response.json())
      .then((data) => setPizzaList(data))
    setLoading(false)
  }

  useEffect(() => {
    fetchPizzas()
  }, [])

  const showIngredientList = (pizzaName, ingredientList) => {
    handleShow(pizzaName, ingredientList)
  }

  return (
    <ListGroup as="ul" className="d-flex justify-content-start p-3">
      <ListGroupItem as="li" className="bg-dark text-white">
        Pizzas
      </ListGroupItem>
      {loading ? (
        <section className="p-3">
          <ClipLoader size="40px" color="#157347" />
        </section>
      ) : ( 
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
                    <span className="btn btn-outline-success" onClick={() => showIngredientList(pizza.name, pizza.ingredients)}>
                      Ingredient list
                    </span>
                  </Col>
                  <Col>
                    <Form.Control 
                      type="number" 
                      defaultValue="0" 
                      min="0" 
                      className="text-center" 
                      {...register(`pizzas.${pizza.name}.number`, { min: 0, max: 50 })} 
                    />
                  </Col>
                  <Form.Control
                    type="hidden"
                    value={pizza.price}
                    {...register(`pizzas.${pizza.name}.price`)}
                  />
                </Row>
            </ListGroupItem>
          )
        })
      ) 
      }
    </ListGroup>
  )
}
