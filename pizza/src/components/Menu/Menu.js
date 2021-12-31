import React from 'react'
import { Sauces } from './Sauces'
import { Pizzas } from './Pizzas'
import { PizzaModal } from './PizzaModal'
import { Card, Button } from 'react-bootstrap'
import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useStateMachine } from 'little-state-machine'
import { updateOrder } from '../../state_helpers/updateOrder'
import { createOrder } from '../../state_helpers/createOrder'
import { clearOrder } from '../../state_helpers/clearOrder'

export const Menu = () => {
  const [pizza, setPizza] = useState("")
  const [ingredients, setIngredients] = useState([])
  
  const methods = useForm()

  const { actions } = useStateMachine({ updateOrder, clearOrder })

  const [disabled, setDisabled] = useState('')
  const navigate = useNavigate()

  const [show, setShow] = useState(false)

  const handleClose = () => {
    setShow(false)
    setPizza("")
    setIngredients([])
  }

  const handleShow = (pizzaName, ingredientList) => {
    setPizza(pizzaName.toLowerCase())
    setIngredients(ingredientList)
    setShow(true)
  }

  const onSubmit = (formData) => {
    setDisabled('disabled')

    const order = createOrder(formData)
    actions.updateOrder(order)

    setDisabled('')

    navigate("/cart")
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

        <FormProvider { ...methods } >
          <form onSubmit={ methods.handleSubmit(onSubmit) }>
            <Pizzas 
              handleShow={handleShow}
            />
            <Sauces 
            />
            <Button 
              type="submit"
              variant="success" 
              className={`float-end me-3 ${disabled}`} 
            > 
              Add to Cart 
            </Button>
          </form>
        </FormProvider>

      </Card.Body>
    </Card>
  )
}
