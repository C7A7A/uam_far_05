import {
  Route,
  Switch,
  Link,
  useRouteMatch,
} from "react-router-dom"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { actionCreators } from "./store/index.js"

import Page6 from "./Page6";

export default function Page1() {
  const pizzas = useSelector(state => state.pizzas)
  const sauces = useSelector(state => state.sauces)

  const dispatch = useDispatch()

  const match = useRouteMatch()

  const pizzaUrl = "http://localhost:3333/api/pizza"
  const sauceurl = "http://localhost:3333/api/sauce"

  useEffect(() => {
    fetch(pizzaUrl)
      .then((res) => res.json())
      .then((data) => dispatch(actionCreators.fetchPizzas(data)))

    fetch(sauceurl)
      .then((res) => res.json())
      .then((data) => dispatch(actionCreators.fetchSauces(data)))
  }, [dispatch])

  return (
    <>
      <h1> Menu </h1>
      <h2> Pizzas </h2>
      <ul>
        {
          pizzas.map( (pizza) => (
            <li key={ pizza.id.toString() }>
              <Link 
                to={{
                  pathname: `${match.url}/${pizza.name.toLowerCase()}`,
                  state: pizza
                }}
              > 
                { pizza.name.toLowerCase() } 
              </Link>
            </li>
          ))
        }
      </ul>

      <h2> Sauces </h2>
      {
        sauces.map( (sauce) => (
          <li key={ sauce.id.toString() }>
              { `${sauce.name.toString()} ${sauce.price.toString()}PLN` }
          </li>
        ))
      }

      <Switch>
        <Route path={`${match.url}/:pizza_data`} component={Page6} />
      </Switch>
      <Link to="/page2"> Redirect to cart </Link>
    </>
  )
}