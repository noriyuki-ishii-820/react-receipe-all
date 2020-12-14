import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Recipe from "./Recipe";
import './App.css';

const App = () => {
  const APP_ID = "5202907c";
  const APP_KEY = "c72dd2f533820e0c77f3f2c967691418";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");


  const exampleReq =
  `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  useEffect(() => {
    getRecipes()    
  },[query])
  
  const getRecipes = async () => {
      const response = await fetch(exampleReq);
      const data = await response.json();
      setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value)
    console.log(search)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch("");
  }
  
  return (
    
      <div className="App">
          <Jumbotron>
            <h1>Type the Ingredients You have in Your Kitchen!</h1>
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                <button className="search-button btn-warning" type="submit">Search</button>
            </form>
            <h6>You can put multiple keywords, separating by space.</h6>
            
          </Jumbotron>
          {recipes.map(recipe => (
              <Recipe
                key= {recipe.recipe.label} 
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories} 
                image = {recipe.recipe.image}
                ingredients = {recipe.recipe.ingredients}
              />
          ))}
      </div>

  )
}


export default App;
