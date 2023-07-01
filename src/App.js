import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { RecipeDetails } from "./pages/details/RecipeDetails";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h2>Recipe Organizer</h2>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
