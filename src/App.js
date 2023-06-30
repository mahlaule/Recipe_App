import React, {useEffect, useState} from "react"
import './App.css';
import Searchbar from './components/Searchbar'
import RecipeCard from './components/RecipeCard'
import Me from './assets/me.jpg'



const apiUrl ="https://www.themealdb.com/api/json/v1/1/search.php?s="

function App() {
  const [islosding, setIsloading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);


  //function to search recipes
  const searchRecipes = async ()=>{
    setIsloading(true);
    const url = apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    //console.log(data)
    setRecipes(data.meals);
    setIsloading(false)
  }

  useEffect(()=>{
    searchRecipes();
  }, []);


  const handleSubmit = event =>{
    event.preventDefault()
    searchRecipes()
  }

  
  


  return (
    <div className="container">
      <div className="logo">
        <img src ={Me} alt="me" className="pic"/>
      <h2>My recipe App</h2>
      </div>
      <Searchbar
      handleSubmit={handleSubmit}
      value={query}
      onChange={event => setQuery(event.target.value)}
      islosding={islosding}
      
      />
      <div className="recipes">

        {recipes ? recipes.map(recipe =>(   
          <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
          
          />
          
          )):"! No Recipes"}
      </div>
    </div>
  );
}

export default App;
