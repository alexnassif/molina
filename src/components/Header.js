import AppBar from "@material-ui/core/AppBar";

import React from "react";
import clsx from 'clsx';
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import Toolbar from "@material-ui/core/Toolbar";


const Header = ({classes}) => {
    return (

        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Button className={classes.menuButton} color="inherit" component={Link} to='/'>
                        Molina
                    </ Button>
                    <div className={classes.toolbarButtons}>
                        <Button color="inherit" component={Link} to='/music'>Music</Button>
                        <Button color="inherit" component={Link} to='/movement'>Movement</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>

    );
};

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        fontSize: 20
    },
    title: {
        flexGrow: 1,
    },
    toolbarButtons: {
        marginLeft: 'auto',
    },

});

export default withStyles(styles)(Header);