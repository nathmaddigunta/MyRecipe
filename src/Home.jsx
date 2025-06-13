import React, { useState, useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from 'react-router-dom';
import './Home.css'
import { useNavigate } from 'react-router-dom';
import Recipe from './Recipe';
import Navbar from './Navbar';

function Home() {
//   const [searchTerm, setSearchTerm] = useState('');
  const [recipeData, setrecipeData] = useState('');
//   const navigate = useNavigate();


  const RecipeHandler = async() => {
        const respone = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        const newData = await respone.json()
        setrecipeData(newData)
  }

  useEffect(()=>{
    RecipeHandler()
  },[])

  return (
    <div>
      <Navbar />
      {/* <div className="hero">
        <h1>Discover Delicious Recipes</h1>
        <br />
        <p>Find your next favorite dish</p>
      </div> */}
      <div className="content">
        <h2>Welcome to MyRecipes</h2>
        <p>Explore a wide variety of recipes from around the world. Whether you're looking for appetizers, main courses, or desserts, we have something for everyone!<br />
        Use the search bar to find specific recipes or browse through our collection.</p>
        <div className='dish-cards'>
            {recipeData && recipeData.meals ? (
             recipeData.meals.map(meal => (
            <div className='card'>
                <img src={meal.strMealThumb} />
                <p>Name: {meal.strMeal}</p>
                <p>Category: {meal.strCategory}</p>
                <div className='yt-button'>
                    <p>Yt tutorial: </p>
                    <a href={meal.strYoutube}><IoLogoYoutube /></a>
                </div>
                <div className='recipe-button'>
                    <Link to={`/recipe/${meal.idMeal}`}>
                    <button>View Full Recipe</button>
                    </Link>
                </div>
            </div>
             ))
 ) : (
    <p>No recipes found.</p>
  )}
        </div>
      </div>
    </div>
  )
}

export default Home