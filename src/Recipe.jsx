import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Recipe.css'
import { CiSearch } from "react-icons/ci";
import Navbar from './Navbar';


function RecipeDetails() {
  const { id } = useParams(); // id from URL
  const [recipe, setRecipe] = useState(null);
  useEffect(() => {
    fetchRecipe(); // call the function when component mounts or id changes
  }, []);


  const fetchRecipe = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      if (data.meals && data.meals.length > 0) {
        setRecipe(data.meals[0]);
      } else {
        setRecipe(null); // fallback if no data found
      }
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };
  if(!recipe) return <p>Loading recipee</p>
    
  
 return (
  <div>
    <Navbar />
    <div className='recipe'>
      <div className='recipe-img'>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      </div>
      <div className='recipe-details'>
        <h1>{recipe.strMeal}</h1>
        <h3>Ingredients</h3>
        <ul>
            {Array.from({ length: 20 }, (_, i) => {
                const ingredient = recipe[`strIngredient${i + 1}`];
                const measure = recipe[`strMeasure${i + 1}`];
                // Only show if ingredient exists and is not empty
                return ingredient && ingredient.trim() ? (
                <li key={i}>{measure} {ingredient}</li>
                ) : null;
            })}
        </ul>
        
      </div>
    </div>
    <div className='Instructions'>
        <h2>Instructions</h2>
        <p>{recipe.strInstructions}</p>
    </div>
  </div>
);
}
export default RecipeDetails;
