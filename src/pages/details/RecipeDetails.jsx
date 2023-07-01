import { useParams } from "react-router-dom";
import { useRecipe } from "../../context/Context";

export const RecipeDetails = () => {
  const { recipeId } = useParams();
  const { recipeData } = useRecipe();

  const recipe = recipeData?.find(
    (recipe) => recipe.id.toString() === recipeId
  );
  return (
    <div>
      <div>
        <h1>{recipe.name}</h1>
        <section className="details">
          <section className="image">
            <img src="" alt="" />
          </section>
          <section className="deta">
            <p>
              <b>Cuisine:</b>
              {recipe.cuisine}
            </p>
            <p>
              <b>Ingredients:</b>
              {recipe.ingred}
            </p>
            <p>
              <b>Instructions:</b>
              {recipe.cookInst}
            </p>
          </section>
        </section>
      </div>
    </div>
  );
};
