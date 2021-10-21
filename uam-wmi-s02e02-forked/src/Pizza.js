import "./styles.css";
import { useEffect, useState } from "react";

export default function Pizza() {
  const [pizzas, setPizzas] = useState([]);
  const pizzaUrl = "https://7b32-150-254-68-128.ngrok.io/api/pizza";

  useEffect(() => {
    fetch(pizzaUrl)
      .then((res) => res.json())
      .then((data) => setPizzas(data));
  }, []);

  return (
    <div>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id.toString()}>{pizza.name.toString()} </li>
        ))}
      </ul>
    </div>
  );
}
