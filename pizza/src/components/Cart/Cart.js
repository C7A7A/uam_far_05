import React from 'react'
import { useState } from 'react'
import { Card, ListGroupItem, ListGroup, Row, Col } from 'react-bootstrap'
import { useStateMachine } from 'little-state-machine'
import { CartForm } from './CartForm'
import { clearOrder } from '../../state_helpers/clearOrder'

export const Cart = () => {
  const [cartInfo, setCartInfo] = useState('')

  const { state, actions } = useStateMachine({clearOrder})
  const order = state['order']

  const onSubmit = (formData) => {
    if (state.order.price > 0) {
      setCartInfo(
        <span className="text-success"> 
          <h5> Your ordered pizza successfully </h5> 
        </span>
      )
      actions.clearOrder()
    } else {
      setCartInfo(
        <span className="text-danger"> 
          <h5> There is nothing in your cart </h5> 
        </span>
      )
    }
    
  }

  const pizzas = Object.entries(order.pizzas).map(([name, value]) => {
    return (
      <ListGroupItem key={name}> 
        <Row className="text-start">
          <Col className="align-self-center col-6">
            {name.toLowerCase()}
          </Col>
          <Col className="align-self-center col-6">
            {value}
          </Col>
        </Row>
      </ListGroupItem>
    )
  })

  const sauces = Object.entries(order.sauces).map(([name, value]) => {
    return (
      <ListGroupItem key={name}> 
        <Row className="text-start">
          <Col className="align-self-center col-6">
            {name}
          </Col>
          <Col className="align-self-center col-6">
            {value}
          </Col>
        </Row>
      </ListGroupItem>
    )
  })

  return (
    <Card>
      <Card.Body>
        <Card.Title> <h2> Summary </h2> </Card.Title>
        {cartInfo}
        <ListGroup className="d-flex justify-content-start p-3">
          <ListGroupItem className="bg-dark text-white" key='summary_table_description'> 
          <Row className="text-start">
            <Col className="align-self-center col-6">
              Name
            </Col>
            <Col className="align-self-center col-6">
              Value
            </Col>
          </Row>
        </ListGroupItem>
          {pizzas}
          {sauces}
        </ListGroup>
        <section className="d-flex text-start justify-content-end">
          <Col className="col-4"> <h5> Total to pay: {order.price} PLN </h5> </Col>
        </section>
        <CartForm 
          onSubmit={onSubmit}
        />
      </Card.Body>
    </Card>
  )
}
