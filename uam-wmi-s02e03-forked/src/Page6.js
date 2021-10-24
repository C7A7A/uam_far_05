import {
  Link,
  useParams
} from "react-router-dom";

export default function Page6(props) {
  // const { pizza_data } = useParams();
  const pizza = props.location.state;
  console.log(pizza);
  // console.log(pizza_data)
  return (
    <div>
      <h1> {pizza.name.toLowerCase()} details </h1>
      <h3> Price: {pizza.price}PLN </h3>
      <h3> Ingredients: </h3>
      <ol>
        {pizza.ingredients.map( (ing) => (
          <li key={ing.toString()}> {ing} </li>
        ))}
      </ol>
      <Link to="/page3">Go to Page 3</Link>
    </div>
  );
}
