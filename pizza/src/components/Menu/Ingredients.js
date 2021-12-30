import React from 'react'
import { useState, useEffect } from 'react'
import { ClipLoader } from 'react-spinners'

export const Ingredients = ({ingredientList}) => {
  const [ingredients, setIngredients] = useState([])
  const [loading, setLoading] = useState(false)

  const ingredientsUrlAPI = 'http://localhost:3333/api/ingredient'

  const fetchIngredients = async () => {
    setLoading(true)
    await fetch(ingredientsUrlAPI)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((ingredient) => {
          if (ingredientList.includes(ingredient.id)) {
            setIngredients(prevState => [...prevState, ingredient])
          }
        })
      })
    setLoading(false)
  }

  useEffect(() => {
    fetchIngredients()
  }, [])

  return (
    <>
      {loading ? (
          <section className="p-3 d-flex justify-content-center">
            <ClipLoader size="40px" color="#157347" />
          </section>
        ) : (
          ingredients.map((ingredient) => {
            return (
              <li key={ingredient.id} > {ingredient.name} </li>
            )
          })
        )
      }
    </>
  )
}
