import React from 'react'
import { Sauces } from './Sauces'
import { Pizzas } from './Pizzas'
import { PizzaModal } from './PizzaModal'
import { Card, Button } from 'react-bootstrap'
import { useState } from 'react'

export const Menu = () => {
  const [pizza, setPizza] = useState("")
  const [ingredients, setIngredients] = useState([])

  const [show, setShow] = useState(false)

  const handleClose = () => {
    setShow(false)
    setPizza("")
    setIngredients([])
  }

  const handleshow = (pizzaName, ingredientList) => {
    setPizza(pizzaName.toLowerCase())
    setIngredients(ingredientList)
    setShow(true)
  }

  const handleAddToCart = () => {
    console.log("XD")
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title> <h2> Menu </h2> </Card.Title>
        <PizzaModal 
          pizzaName={pizza}
          ingredients={ingredients}
          show={show}
          handleClose={handleClose}
        />
        <Pizzas 
          handleShow={handleshow}
        />
        <Sauces />
        <Button variant="success" className="float-end me-3" onClick={handleAddToCart}> Add to Cart </Button>
      </Card.Body>
      
    </Card>
  )
}
