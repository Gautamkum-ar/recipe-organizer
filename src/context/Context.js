import { createContext, useContext, useState } from "react";

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipeData, setRecipeData] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    image: "",
    cuisine: "",
    ingred: "",
    cookInst: [],
  });

  const [toggleAddNew, setToggleAddNew] = useState(false);

  const handleAddRecipe = () => {
    setRecipeData([...recipeData, { ...newRecipe, id: 1 }]);
    localStorage.setItem("recipe", recipeData);
  };
  console.log(recipeData);

  const handleradio = () => {};
  return (
    <RecipeContext.Provider
      value={{
        setNewRecipe,
        handleradio,
        newRecipe,
        setToggleAddNew,
        toggleAddNew,
        handleAddRecipe,
        recipeData,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = () => useContext(RecipeContext);
