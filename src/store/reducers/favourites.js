import {
  ADD_FAVOUTITES,
  REMOVE_ONE_FROM_EXISTING_FAVOUTITES,
  REMOVE_BULK_FROM_EXISTING_FAVOUTITES,
  ADD_ONE_TO_EXISTING_FAVOUTITES,
} from "../../constants/actionType";
import { findIndex, remove } from "lodash";

const favouritesReducer = (favourites = [], action) => {
  switch (action.type) {
    case ADD_FAVOUTITES: {
      const existingItemIndex = findIndex(favourites, {
        id: action.payload[0]?.id,
      });
      //get existing item
      const existingItem = favourites[existingItemIndex];
      //updated items array
      let updatedItems;
      //if existing item available update that with amount
      if (existingItem) {
        const updatedFavouriteItem = {
          ...existingItem,
          amount:
            parseInt(action.payload[0].amount) + parseInt(existingItem.amount),
        };
        updatedItems = [...favourites];
        updatedItems[existingItemIndex] = updatedFavouriteItem;
      } else {
        updatedItems = favourites.concat(action.payload);
      }
      return [...updatedItems];
      // return [...favourites, ...action.payload];
    }
    case ADD_ONE_TO_EXISTING_FAVOUTITES: {
      const existingItemIndex = findIndex(favourites, {
        id: action.payload,
      });
      //get existing item
      const existingItem = favourites[existingItemIndex];
      //updated items array
      let updatedItems;
      //if existing item available update that with amount
      if (existingItem) {
        //if existing item found simply add one and return updated array
        const updatedFavouriteItem = {
          ...existingItem,
          amount: parseInt(existingItem.amount) + 1,
        };
        updatedItems = [...favourites];
        updatedItems[existingItemIndex] = updatedFavouriteItem;
      }
      return [...updatedItems];
    }
    case REMOVE_ONE_FROM_EXISTING_FAVOUTITES: {
      const existingItemIndex = findIndex(favourites, {
        id: action.payload,
      });
      //get existing item
      const existingItem = favourites[existingItemIndex];
      //updated items
      let updatedItems;
      //if existing item available update that with amount
      if (existingItem) {
        let updatedFavouriteItem;
        //amount greater than one, remove one
        if (parseInt(existingItem.amount) > 1) {
          updatedFavouriteItem = {
            ...existingItem,
            amount: parseInt(existingItem.amount) - 1,
          };
          updatedItems = [...favourites];
          updatedItems[existingItemIndex] = updatedFavouriteItem;
        } else if (parseInt(existingItem.amount) === 1) {
          //only one item has, need to remove item from favourites
          remove(favourites, (item) => item.id === action.payload);
          updatedItems = [...favourites];
        }
      }
      return [...updatedItems];
    }
    case REMOVE_BULK_FROM_EXISTING_FAVOUTITES: {
      const existingItemIndex = findIndex(favourites, {
        id: action.payload,
      });
      //get existing item
      const existingItem = favourites[existingItemIndex];
      //updated items
      let updatedItems;
      //if existing item available update that with amount
      if (existingItem) {
        remove(favourites, (item) => item.id === action.payload);
        updatedItems = [...favourites];
      }
      return [...updatedItems];
    }
    default:
      return favourites;
  }
};

export default favouritesReducer;
