import { React, useState } from 'react';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from '@mui/material/Button';
import CocktailItemInputForm from "./CocktailItemInputForm";
import SingleCocktail from '../SingleCocktail';
import classes from './CocktailItemInputForm.module.css'

export default function CocktailItem(props) {
  const [showModal, setShowModal] = useState(false)

  const showSingleCocktail = () => {
    setShowModal(true)
  }

  const hideSingleCocktail = () => {
    setShowModal(false)
  }

  return (
    <Card sx={{ maxWidth: 360 }}>
      <CardHeader
        title={props.cocktail.name}
        subheader={props.cocktail.category}
      />
      <CardMedia
        component="img"
        image={props.cocktail.image}
        alt={props.cocktail.name}
      />
      <CardContent>
        {
          showModal && <SingleCocktail singleItem={props.cocktail} onClose={hideSingleCocktail}/>
        }
        <Button 
          className={classes.buttonCard} 
          variant="text" 
          onClick={showSingleCocktail}
        >
          Details
        </Button>
      </CardContent>
      <CardActions className={classes.actionCard}  disableSpacing={true}>
        <CocktailItemInputForm
          id={props.cocktail.id}
          cocktail={props.cocktail}
        />
      </CardActions>
    </Card>
  );
}
