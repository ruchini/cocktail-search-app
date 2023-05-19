import * as api from "../../api/index.js";
import {
  FETCH_FIVE_ITEMS,
  ADD_FAVOUTITES,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  REMOVE_ONE_FROM_EXISTING_FAVOUTITES,
  REMOVE_BULK_FROM_EXISTING_FAVOUTITES,
  ADD_ONE_TO_EXISTING_FAVOUTITES,
} from "../../constants/actionType";
import { apiUrlSearch } from "../../constants/urls";
import axios from "axios";

export const getRandomCocktails = () => async (dispatch) => {
  try {
    const data = await fetchRandomCocktails();
    dispatch({ type: FETCH_FIVE_ITEMS, payload: [...data] });
  } catch (error) {
    console.log(error.message);
  }
};

const fetchRandomCocktails = async () => {
  //create promises array with five requests and wait till all requests resolved
  const promises = [];
  for (let i = 0; i < 5; i++) {
    promises.push(api.fetchRandomCocktails());
  }
  const responses = await Promise.all(promises);
  const data = await Promise.all(
    responses.map((res) => {
      let cocktail = {
        id: res.data.drinks[0].idDrink,
        category: res.data.drinks[0].strCategory,
        image: res.data.drinks[0].strDrinkThumb,
        name: res.data.drinks[0].strDrink,
        instructions: res.data.drinks[0].strInstructions,
        glass: res.data.drinks[0].strGlass,
        info: res.data.drinks[0].strAlcoholic,
        strIngredient1: res.data.drinks[0].strIngredient1,
        strIngredient2: res.data.drinks[0].strstrIngredient2,
        strIngredient3: res.data.drinks[0].strstrIngredient3
      };
      console.log(cocktail);
      return cocktail;
    })
  );
  return data;
};

export const addToFavourites = (cocktail) => async (dispatch) => {
  try {
    dispatch({ type: ADD_FAVOUTITES, payload: [cocktail] });
  } catch (error) {
    console.log("action error add favourites : ", error.message);
  }
};

export const search = (searchQuery) => async (dispatch) => {
  try {
    // todo : dispatch({ type: SEARCH_REQUEST });
    axios
      .get(`${apiUrlSearch}${searchQuery}`)
      .then((response) => {
        let cocktails1 = [...response.data.drinks];
        const data =
          cocktails1.length > 0 &&
          cocktails1.map((res) => {
            let cocktail = {
              id: res.idDrink,
              category: res.strCategory,
              image: res.strDrinkThumb,
              name: res.strDrink,
              instructions: res.strInstructions,
              glass: res.strGlass,
              info: res.strAlcoholic,
              strIngredient1: res.strIngredient1,
              strIngredient2: res.strIngredient2,
              strIngredient3: res.strIngredient3
            };
            return cocktail;
          });

        dispatch({
          type: SEARCH_SUCCESS,
          payload: [...data],
        });
      })
      .catch((error) => {
        console.log("error", error.message);
        const data = [];
        dispatch({
          type: SEARCH_FAILURE,
          payload: [...data],
        });
      });
  } catch (error) {
    console.log(error.message);
  }
};

export const removeOneFromFavouriteItem = (cocktailId) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_ONE_FROM_EXISTING_FAVOUTITES,
      payload: cocktailId,
    });
  } catch (error) {
    console.log("action error add favourites : ", error.message);
  }
};

export const removeBulkFromFavouriteItem = (cocktailId) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_BULK_FROM_EXISTING_FAVOUTITES,
      payload: cocktailId,
    });
  } catch (error) {
    console.log("action error add favourites : ", error.message);
  }
};

export const addOneToFavouriteItem = (cocktailId) => async (dispatch) => {
  try {
    dispatch({ type: ADD_ONE_TO_EXISTING_FAVOUTITES, payload: cocktailId });
  } catch (error) {
    console.log("action error add favourites : ", error.message);
  }
};
