import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import {withRouter} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  margin:{
    marginRight: theme.spacing(3),
  },
}));

const NavBar = ({history}) => {
  const classes = useStyles();

  const handleClick = () => {
    history.push("/")
  }

  const submit = () => {
    history.push("/forecast")
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          
          <Typography variant="h6" color="inherit" >
            <Button onClick={handleClick} color="inherit">
              Current Weather
            </Button>
          </Typography>
          <Typography variant="h6" color="inherit" align="center" className={classes.root}>
            <Button onClick={submit} color="inherit">
              Daily Forecast
            </Button>
        </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(NavBar);