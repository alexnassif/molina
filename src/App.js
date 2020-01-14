import React from 'react';
import logo from './logo.svg';
import './App.css';
import withStyles from "@material-ui/core/styles/withStyles";
import Image from './images/molinamain.jpg';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const App = ({classes}) => {

    return (

        <div className={classes.container}/>

    );
};


const styles = theme => ({
    container: {
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        opacity: 0.5
    }
});

export default withStyles(styles)(App);
