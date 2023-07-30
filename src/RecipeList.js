import React from 'react';
import { Link } from 'react-router-dom';
import recipes from './data';
import './RecipeList.css'

const RecipeList = () => {
  return (
    <div>
      <h1 className = "mission">Indulge your taste buds and embark on a mouthwatering journey at "My Life on a Plate!" <br/> We've gathered an irresistable array of recipes that'll make every meal a celebration. </h1>
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
              <div className='time-rating'>
                <small><p className="card-text">{recipe.time}</p></small>
                <p className="card-text">{recipe.rating}</p>
              </div>
              <Link to={`/recipe/${recipe.id}`} className="go-to-recipe">
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
