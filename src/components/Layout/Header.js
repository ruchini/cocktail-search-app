import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import FavouriteItemsButton from "./FavouriteItemsButton";
import classes from "./Header.module.css";
import SearchCocktails from "../Cocktails/SearchCocktails/Search";
import Box from '@material-ui/core/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#33032d',
    },
  },
});

function Header(props) {
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <AppBar  className={classes.appBarHeader} >
        <Toolbar>
          <Box display='flex' flexGrow={1} >
            <SearchCocktails/>
          </Box>
          <Box display='flex' sx={{ ml: '5rem' }}>
            <FavouriteItemsButton onClick={props.onShowFavourites} />
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
    </>
  );
};

// const Header = ({ onShowFavourites }) => {
//   return (
//     <>
//       <AppBar  className={classes.appBarHeader} >
//         <Toolbar>
//           <Box display='flex' flexGrow={1} >
//             <SearchCocktails/>
//           </Box>
//           <Box display='flex' sx={{ ml: '5rem' }}>
//             <FavouriteItemsButton onClick={onShowFavourites} />
//           </Box>
//         </Toolbar>
//       </AppBar>
      
      
//     </>
//   );
// };

export default Header;
