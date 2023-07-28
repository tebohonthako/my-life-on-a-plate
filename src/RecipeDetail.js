import React from 'react';
import { useParams, Link } from 'react-router-dom';
import recipes from './data';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Preparation Steps:</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      {recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.title} />}
      <br />
      <Link to="/">Back to Recipes List</Link>
    </div>
  );
};

export default RecipeDetail;
