import { useDispatch, useSelector } from "react-redux"
import {
  Link,
} from "react-router-dom"
import { actionCreators } from "./store/index.js"
import { useEffect } from "react"

export default function Page6(props) {
  const pizza = props.location.state

  const ingredients = useSelector(state => state.ingredients)

  const dispatch = useDispatch()

  const ingredientUrl = "http://localhost:3333/api/ingredient"

  useEffect(() => {
    fetch(ingredientUrl)
      .then((res) => res.json())
      .then((data) => {
        const filtered_ingredients = data.filter(item => pizza.ingredients.includes(item.id)) 
        dispatch(actionCreators.fetchIngredients(filtered_ingredients))
      })
  }, [dispatch, pizza])

  return (
    <>
      <h1> {pizza.name.toLowerCase()} details </h1>
      <h3> Price: {pizza.price}PLN </h3>
      <h3> Ingredients: </h3>
      <ol>
        {ingredients.map( (ing) => (
          <li key={ing.id.toString()}> {ing.name} </li>
        ))}
      </ol>
      <Link to="/page3">Go to Page 3</Link>
    </>
  )
}
