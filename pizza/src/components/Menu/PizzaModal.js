import React from 'react'
import { Modal } from 'react-bootstrap'

export const PizzaModal = ({pizzaName, ingredients, show, handleClose}) => {
  return (
    <Modal show={show} size="lg" centered>
      <Modal.Header closeButton onClick={event => handleClose(event)}>
        <Modal.Title>{pizzaName} ingredients</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h4> Ingredient List </h4>
        <ul>
        {
            ingredients.map((ingredient) => {
              return (
                <li key={ingredient}> {ingredient} </li>
              )
            })
          }
        </ul>
      </Modal.Body>

    </Modal>
  )
}
