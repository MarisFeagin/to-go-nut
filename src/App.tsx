import MapJS from './assets/map.jsx'
import './App.css'

function App() {


  return (
      <>
          <div className="header">
              <img src="assets/" height="60px" width="60px" alt="green apple speeding"/><h1><em>To Go Nutrition</em></h1>
          </div>
          // Insert Login page //
          <div className="login"></div>

          //-----------------------------Search-----------------------------------------------------------------------//
          <div className="search">
              <form id="nav" className="search-cats">
                  <input type="search" className="search-bar" id="search" name="search"
                         placeholder="Your next meal..."/>
                  <button type="submit" className="submit">Search</button>

                  <div className="dropdown">
                      <button className="dropbtn">Diets and Allergens</button>
                      <div className="dropdown-content">
                          <h3 className="diets">Diets:</h3>
                          <label className="diets">High-Protein</label><input type="checkbox" name="high-protein" id="high-protein" value="high-protein"/>
                          <label className="diets">High-Fiber</label><input type="checkbox" name="high-fiber" id="high-fiber" value="high-fiber"/>
                          <label className="diets">Low-Carb</label><input type="checkbox" name="low-carb" id="low-carb" value="low-carb"/><br/>
                          <label className="diets">Vegan</label><input type="checkbox" name="vegan" id="vegan" value="vegan"/>
                          <label className="diets">Vegetarian</label><input type="checkbox" name="vegetarian" id="vegetarian" value="vegetarian"/>
                          <label className="diets">Pescatarian</label><input type="checkbox" name="pescatarian" id="pescatarian" value="pescatarian"/><br/>
                          <label className="diets">Keto</label><input type="checkbox" name="keto" id="keto" value="keto"/>
                          <label className="diets">Paleo</label><input type="checkbox" name="paleo" id="paleo" value="paleo"/>
                          <label className="diets">Kosher</label><input type="checkbox" name="kosher" id="kosher" value="kosher"/><br/>
                          <label className="diets">Organic</label><input type="checkbox" name="organic" id="organic" value="organic"/>
                          <label className="diets">Carnivore</label><input type="checkbox" name="carnivore" id="carnivore" value="carnivore"/>
                          <label className="diets">Raw</label><input type="checkbox" name="raw" id="raw" value="raw"/><br/>
                          <label className="diets">Non-Dairy</label><input type="checkbox" name="non-dairy" id="non-dairy" value="non-dairy"/>
                          <label className="diets">Anti-Inflammatory</label><input type="checkbox" name="anti-inflammatory" id="anti-inflame" value="anti-inflame"/>
                          <h3 className="allergens">Allergens:</h3>
                          <label className="allergens">Milk</label><input type="checkbox" name="milk" id="milk" value="milk"/>
                          <label className="allergens">Eggs</label><input type="checkbox" name="eggs" id="eggs" value="eggs"/>
                          <label className="allergens">Wheat</label><input type="checkbox" name="wheat" id="wheat" value="wheat"/>
                          <label className="allergens">Soy</label><input type="checkbox" name="soy" id="soy" value="soy"/><br/>
                          <label className="allergens">Fish</label><input type="checkbox" name="fish" id="fish" value="fish"/>
                          <label className="allergens">Crustacean</label><input type="checkbox" name="crustacean" id="crustacean" value="crustacean"/>
                          <label className="allergens">Shellfish</label><input type="checkbox" name="shellfish" id="shellfish" value="shellfish"/><br/>
                          <label className="allergens">Tree Nuts</label><input type="checkbox" name="tree-nuts" id="tree-nuts" value="tree-nuts"/>
                          <label className="allergens">Peanuts</label><input type="checkbox" name="peanuts" id="peanuts" value="peanuts"/>
                          <label className="allergens">Legumes</label><input type="checkbox" name="Legumes" id="Legumes" value="Legumes"/>
                          <label className="allergens">Sesame</label><input type="checkbox" name="sesame" id="sesame" value="sesame"/>
                      </div>
                  </div>

                  <div className="dropdown">
                      <button className="dropbtn">Type of Business</button>
                      <div className="dropdown-content">
                          <h3 className="business">Business:</h3>
                          <label className="restaurant">Restaurant</label><input type="checkbox" name="restaurant" id="restaurant" value="restaurant"/>
                          <label className="restaurant">Cafe</label><input type="checkbox" name="cafe" id="cafe" value="cafe"/>
                          <label className="restaurant">Bar</label><input type="checkbox" name="bar" id="bar" value="bar"/>
                          <label className="restaurant">Gas Station</label><input type="checkbox" name="gas-station" id="gas" value="fuel"/>
                          <label className="restaurant">Quick Service</label><input type="checkbox" name="chain" id="chain" value="fast_food"/>
                          <label className="restaurant">Ice Cream Parlor</label><input type="checkbox" name="ice_cream" id="ice_cream" value="ice_cream"/>
                      </div>
                  </div>

                  // <div className="slide-container">
                  //     <p>Calories Per Meal: <span id="demo"></span></p>
                  //     <input type="range" min="180" max="3000" value="500" className="slider" id="myRange"/>
                  // </div>
              </form>
          </div>
          <br/>

          // Insert Map JS API
          <div id="MapJS"></div>

          // Insert Menu Page
          <div className="menu"></div>

          //-----------------------------User Profile-----------------------------------------------------------------------//
          <div className="user-profile"></div>
          <br/>
          <div className="footer">
              <div className="nav-content">
                  <h4>Disclaimer: Crave Right does not claim to recommend diets nor nutrition advice to any of our users. We only arm you with the knowledge of a food's value and numbers. Please meet with a licensed dietitian and/or nutritionist for your individual consumption needs. Everyone will require a different plan. Please consume responsibly!</h4>
                  <h3 className="nav-header">Crave Right&trade;</h3>
                  <p className="nav-p">&copy; All Rights Reserved Crave Right, 2024</p>
              </div>
          </div>
      </>
  )
}

export default App
