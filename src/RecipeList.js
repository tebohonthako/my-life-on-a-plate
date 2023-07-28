import React from 'react';
import { Link } from 'react-router-dom';
import recipes from './data';

const RecipeList = () => {
  return (
    <div>
      <h1>Recipes List</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <h3>{recipe.title}</h3>
              <img src={recipe.imageUrl} alt={recipe.title} style={{ width: '200px' }} />
            </Link>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
