import React from 'react'

const BurgerStack = ({ ingredients, handleRemove }) => {
    return (
      <ul>
        {ingredients.length === 0 ? (
          <p>May I take your Order?</p>
        ) : (
          ingredients.map((ingredient, index) => (
            <li key={index} style={{ backgroundColor: ingredient.color }}>
              {ingredient.name}
              <button onClick={() => handleRemove(index)}>X</button>
            </li>
          ))
        )}
      </ul>
    )
  }
  
  export default BurgerStack