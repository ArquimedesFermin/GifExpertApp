import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { AddCategory } from "./components/AddCategory";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  NavBar:{
    
    backgroundColor:"#101124"
  },
  MuiToolbarRegular: {
   
    minHeight:"48px"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    //  flexGrow: 1,
  },
}));

const NavBar = ({ title, setCategory }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.NavBar} position="static">
        <Toolbar className={classes.MuiToolbarRegular}>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          {/*<div className={classes.search}>*/}

          <AddCategory setCategory={setCategory} />
          {/* </div>*/}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
