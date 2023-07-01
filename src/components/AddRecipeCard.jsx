import React from "react";
import { useRecipe } from "../context/Context";

export const Card = () => {
  const {
    setNewRecipe,
    newRecipe,
    handleAddRecipe,
    setToggleAddNew,
    toggleAddNew,
  } = useRecipe();

  console.log(newRecipe);

  const handleAddInput = () => {
    const multipeInput = React.createElement("input");
    console.log(multipeInput);
    return multipeInput;
  };

  return (
    <div className="add__card">
      <div className="card">
        <h1>Enter New Cuisine Details</h1>

        <label>
          Upload Image{" "}
          <input
            type="file"
            onChange={(e) =>
              setNewRecipe({ ...newRecipe, image: e.target.value })
            }
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            onChange={(e) =>
              setNewRecipe({ ...newRecipe, name: e.target.value })
            }
          />
        </label>
        <label>
          ingredients:
          <input
            type="text"
            onChange={(e) =>
              setNewRecipe({ ...newRecipe, ingred: e.target.value })
            }
          />
        </label>
        <label>
          cooking instructions
          <input
            type="text"
            onChange={(e) =>
              setNewRecipe({ ...newRecipe, cookInst: e.target.value })
            }
          />
          <button onClick={() => handleAddInput()}>Add more</button>
        </label>
        <label>
          Cuisine type
          <input
            type="text"
            onChange={(e) =>
              setNewRecipe({ ...newRecipe, cuisine: e.target.value })
            }
          />
        </label>

        <button
          onClick={() => {
            handleAddRecipe();
            setToggleAddNew(false);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};
