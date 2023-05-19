import { useState } from 'react'
import Header from './components/Layout/Header';
import Favourites from './components/FavouritesItems/Favourites'
import classes from './App.css';
import Cocktails from './components/Cocktails/Cocktails';

function App() {
  const [showModal, setShowModal] = useState(false)

  const showFavourites = () => {
    setShowModal(true)
  }

  const hideFavourites = () => {
    setShowModal(false)
  }
  return (
      <div className={classes.main}>
        {
          showModal && <Favourites onClose={hideFavourites}/>
        }
        <Header onShowFavourites={showFavourites}/>
        <Cocktails/>
      </div>
    
  );
}

export default App;
