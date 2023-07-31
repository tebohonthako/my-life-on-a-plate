import React from 'react';
import './RecipeDetail.css'
import { useParams, Link } from 'react-router-dom';
import recipes from './data';
import { WhatsappShareButton } from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  // Function to generate the share URL
  const getShareUrl = () => {
    // Replace 'your-website-url' with the actual URL of your website
    return `https://your-website-url/recipes/${id}`;
  };

  return (
    <div className="recipe-details">
      <h2 className="title-recipe">{recipe.title}</h2>
            <p className="description">{recipe.description}</p>
      <div className="recipe-content">
        {recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.title} className="recipe-picture" />}
        <div className="ingredients-container">
          <h3 className="ingredients">Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      <br />
      <div className="steps-container">
        <h3 className="steps">Preparation Steps:</h3>
        <ol className="preparation-steps">
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
      <br />
      <Link className="back-to-recipes" to="/">
        Back to Recipes List
      </Link>

      <div className='whatsapp-btn'>
        {/* WhatsApp Share Button */}
        <WhatsappShareButton url={getShareUrl()} title={recipe.title}>
        <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#3dd115', fontSize: '2rem', marginRight: '0.5rem' }} />
        Share via WhatsApp
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default RecipeDetail;
