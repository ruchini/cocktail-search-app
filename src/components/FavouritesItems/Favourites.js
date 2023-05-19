import React from "react";
import Modal from "../UI/Modal";
import { Box, Typography } from "@material-ui/core";
import classes from "./Favourites.module.css";
import { useSelector } from "react-redux";
import Item from "./FavouriteItem/Item";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";

const useStyles = makeStyles((theme) => ({
  modalContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    maxHeight: "60vh",
    overflow: "auto",
  },
}));

const Favourites = (props) => {
  const favouriteCocktails = useSelector((state) => state.favourites);
  const modalClasses = useStyles();
  return (
    <Modal onClose={props.onClose}>
      <Box className={modalClasses.modalContent}>
        <Typography variant="h4" className={classes.header}>
          <FavoriteIcon className={classes.icon} />
          FAVOURITE ITEMS
        </Typography>
        <ul className={classes["favourite-items"]}>
          {favouriteCocktails.map((item) => (
            <Item item={item} />
          ))}
        </ul>
      </Box>
    </Modal>
  );
};

export default Favourites;
