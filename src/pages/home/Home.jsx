import { Link } from "react-router-dom";
import { Card } from "../../components/AddRecipeCard";
import { useRecipe } from "../../context/Context";

export const Home = () => {
  const { setToggleAddNew, toggleAddNew, recipeData, handleradio } =
    useRecipe();
  return (
    <div className="home__container">
      <div className="search__box">
        <input className="searchInput" type="text" />
        <div className="filters">
          <h3>Filters:</h3>
          <label>
            <input
              name="filter"
              type="radio"
              value="name"
              onChange={(e) => handleradio(e.target.value)}
            />
            Name
          </label>
          <label>
            <input type="radio" name="filter" value="ing" />
            Ingredients
          </label>
          <label>
            <input type="radio" value="cuisine" name="filter" />
            Cuisine
          </label>
        </div>
      </div>

      <section className="add__recipe">
        <button className="add__new__btn" onClick={() => setToggleAddNew(true)}>
          +
        </button>
      </section>

      {toggleAddNew && <Card />}

      <section className="display__recipe">
        {recipeData?.map((recipe) => {
          const { id, name, ingred, cuisine, cookInst, image } = recipe;
          return (
            <div className="recipe__display__card" key={id}>
              <div className="image">
                <img src={image} alt="" />
              </div>
              <div className="recipe__details">
                <h1>{name}</h1>
                <p>
                  <b>Cuisine Type:</b>
                  {cuisine}
                </p>
                <p>
                  <b>Ingredients:</b>
                  <button>
                    <Link to={`/details/${id}`}>See ingredeints</Link>
                  </button>
                </p>
                <p>
                  <b>Instruction:</b>
                  <button>See Instructions</button>
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
