import React from 'react'
import { Modal } from 'react-bootstrap'
import { Ingredients } from './Ingredients'

export const PizzaModal = ({pizzaName, ingredients, show, handleClose}) => {
  return (
    <Modal show={show} size="lg" centered>
      <Modal.Header closeButton onClick={event => handleClose(event)}>
        <Modal.Title> <h3> {pizzaName} ingredients </h3> </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h4> Ingredient List </h4>
        <ul>
          <Ingredients ingredientList={ingredients} />
        </ul>
      </Modal.Body>

    </Modal>
  )
}
