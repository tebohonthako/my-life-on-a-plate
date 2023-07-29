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
    <div className ="recipe-details">
      <h2 className ="title-recipe" >{recipe.title}</h2>
      <br/>
      {recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.title} className="recipe-picture"/>}
      <p className='description'>{recipe.description}</p>
      <h3 className ="ingredients" >Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3 className='steps'>Preparation Steps:</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <br />
      <Link className="back-to-recipes" to="/">Back to Recipes List</Link>
    </div>
  );
};

export default RecipeDetail;
