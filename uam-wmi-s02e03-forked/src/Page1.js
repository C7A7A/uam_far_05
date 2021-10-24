import {
  Route,
  Switch,
  Link,
  useRouteMatch,
} from "react-router-dom";
import { useEffect, useState } from "react";

import Page6 from "./Page6";

export default function Page1() {
  const match = useRouteMatch();
  const [pizzas, setPizzas] = useState([]);
  const pizzaUrl = "http://localhost:3333/api/pizza";

  useEffect(() => {
    fetch(pizzaUrl)
      .then((res) => res.json())
      .then((data) => setPizzas(data));
  }, []);

  return (
    <>
      <h1> Menu </h1>
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
      <Link to="/page2"> Redirect to cart </Link>

      <Switch>
        <Route path={`${match.url}/:pizza_data`} component={Page6} />
      </Switch>
    </>
  );
}