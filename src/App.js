import React from 'react';
import logo from './logo.svg';
import './App.css';
import withStyles from "@material-ui/core/styles/withStyles";
import Image from './images/molinamain.jpg';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const App = ({classes}) => {

    return (

        <Typography className={classes.container} />

    );
};


const styles = theme => ({
  container: {
      backgroundImage: `url(${Image})`,
      backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			backgroundSize: "cover",
			backgroundAttachment: "fixed",
			height: "100vh"
  }
});

export default withStyles(styles)(App);
