import React from 'react';
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
      <br />
      {recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.title} className="recipe-picture" />}
      <p className="description">{recipe.description}</p>
      <h3 className="ingredients">Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3 className="steps">Preparation Steps:</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <br />
      <Link className="back-to-recipes" to="/">
        Back to Recipes List
      </Link>
          {/* WhatsApp Share Button */}
      <WhatsappShareButton url={getShareUrl()} title={recipe.title}>
        <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#3dd115' }} />
      </WhatsappShareButton>
    </div>
  );
};

export default RecipeDetail;
