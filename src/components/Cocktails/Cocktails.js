import React from "react";
import RandomCocktails from "./RandomCocktails/RandomCocktails";
import classes from "./RandomCocktails/RandomCocktails.module.css";

const Cocktails = () => {
  return (
    <div className={classes.cocktailContainer}>
      <RandomCocktails />
    </div>
  );
};

export default Cocktails;
