import { combineReducers } from "redux";

import cocktails from './cocktails';
import favourites from './favourites';

export default combineReducers({
    cocktails,
    favourites
})
