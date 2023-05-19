import { useState, useEffect } from "react";
import { InputBase, IconButton, Paper } from "@material-ui/core";
import ClearIcon from '@mui/icons-material/Clear';
import classes from "./Search.module.css";
import { search, getRandomCocktails } from "../../../store/actions/cocktails";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  //perform lodash debounce search
  const debouncedSearch = debounce((term) => {
    dispatch(search(query));
  }, 500);

  useEffect(() => {
    query.length > 0 && debouncedSearch(query);
  }, [query, debouncedSearch]);

  const handleClearSeartch = (e) => {
    e.preventDefault();
    //on clear search render random five cocktails
    query.trim().length > 0 && dispatch(getRandomCocktails());
    setQuery("");
  }

  return (
    <section>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search for a Cocktail"
          inputProps={{ "aria-label": "search" }}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
          onClick={handleClearSeartch}
        >
          <ClearIcon />
        </IconButton>
      </Paper>
    </section>
  );
};

export default SearchBar;
