import React from 'react'
import { Button, Form, FormControl, FormGroup, FormLabel, FormText } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

export const CartForm = ({onSubmit}) => {
  const { register, handleSubmit, formState: { errors }} = useForm()

  return (
    <Form className="text-start" onSubmit={ handleSubmit(onSubmit) }>
      <FormGroup className="mb-3" name="name">
        <FormLabel>Your name</FormLabel>
        <FormControl {...register("name", { required: true })} type="text" placeholder="Enter name" />
        { errors.name && <span className="text-danger"> This field is required </span> } 
      </FormGroup>
      <FormGroup className="mb-3" name="address">
        <FormLabel>Your address</FormLabel>
        <FormControl {...register("address", { required: true })} type="text" placeholder="Enter address" />
        { errors.address && <span className="text-danger"> This field is required </span> }
        <FormText className="text-muted">
          Please enter city, street and apartment number
        </FormText>
      </FormGroup>
      <FormGroup className="mb-3" name="phone">
        <FormLabel>Your phone number</FormLabel>
        <FormControl {...register("phone", { required: true })} type="tel" placeholder="Enter phone number" />
        { errors.phone && <span className="text-danger"> This field is required </span> }
      </FormGroup>
      <Button variant="success" type="submit">   
        Order your pizza 
      </Button>
    </Form>
  )
}
