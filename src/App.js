import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Recipe from "./Recipe";
import SearchCountry from "./SearchCountry";
import SearchProtein from "./SearchProtein";
import NavBar from "./Navbar";
import Footer from "./Footer";
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
      console.log(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
    console.log(search)
  }

  const getSearch = e => {
    e.preventDefault();

    if (!e.target.value){
      var input = document.getElementById("text-input").value
   
      setQuery(input)
    } else {
      setQuery(search)
    }

    setSearch("");
  }
  
  return (
      
      <div className="App">
          <NavBar />
          <Jumbotron className="searchBox ">
            <h1>Type the Ingredients You have in Your Kitchen!</h1>
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" id="text-input" type="text" value={search} onChange={updateSearch}/>
                <button className="search-button btn-warning" type="submit">Search</button>
            </form>
            <h6>You can put multiple keywords, separating by space.</h6>
            <br />
            <h6>Or search by popular keywords:</h6>
            <ul class="popularSearch">
              <li><SearchCountry /></li>
              <li><SearchProtein /></li>
            </ul>
            
          </Jumbotron>
          {recipes.map(recipe => (
              <Recipe
                key= {recipe.recipe.label} 
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories} 
                image = {recipe.recipe.image}
                ingredients = {recipe.recipe.ingredients}
                healthlabels = {recipe.recipe.healthLabels}
                digest = {recipe.recipe.digest}
                url = {recipe.recipe.url}
              />
          ))}
          <Footer />
      </div>

  )
}


export default App;
