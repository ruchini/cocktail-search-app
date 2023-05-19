import React from "react";
import Modal from "../../UI/Modal";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modalContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    maxHeight: "70vh",
    overflow: "auto",
  },
  header: {
    marginBottom: theme.spacing(2),
  },
  drink: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: "200px",
    marginRight: theme.spacing(2),
  },
  data: {
    fontWeight: "bold",
    marginRight: theme.spacing(1),
  },
}));

const SingleCocktail = (props) => {
  const classes = useStyles();

  const { singleItem, onClose } = props;
  
  return (
    <Modal onClose={onClose}>
      <Box className={classes.modalContent}>
        <Typography variant="h4" className={classes.header}>
          Cocktail Details
        </Typography>
        <div className={classes.drink}>
          <img
            className={classes.image}
            src={singleItem.image}
            alt={singleItem.name}
            data-testid="cocktail-image"
          />
          <div>
            <Typography variant="body1" data-testid="cocktail-name">
              Name: {singleItem.name}
            </Typography>
            <Typography variant="body1" data-testid="cocktail-category">
              Category: {singleItem.category}
            </Typography>
            <Typography variant="body1" data-testid="cocktail-info">
              Info: {singleItem.info}
            </Typography>
            <Typography variant="body1" data-testid="cocktail-glass">
              Glass: {singleItem.glass}
            </Typography>
            <Typography variant="body1" data-testid="cocktail-instructions">
              Instructions: {singleItem.instructions}
            </Typography>
            <Typography variant="body1" data-testid="cocktail-ingredients">
              Ingredients: {`${singleItem.strIngredient1}, ${singleItem.strIngredient2}, ${singleItem.strIngredient3}`}
            </Typography>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default SingleCocktail;
