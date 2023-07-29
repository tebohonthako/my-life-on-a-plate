import React from 'react';
import { Link } from 'react-router-dom';
import recipes from './data';

const RecipeList = () => {
  return (
    <div>
      {/* <h1>Recipes List</h1> */}
      <div className="card-deck">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="card" style={{ width: '18rem' }}>
            <img
              src={recipe.imageUrl}
              className="card-img-top"
              alt={recipe.title}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">{recipe.title}</h5>
              <p className="card-text">{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">
                Go to Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
