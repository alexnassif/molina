import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import MenuIcon from '@material-ui/icons/Menu';

const Header = ({classes}) => {
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        MOLINA
                    </Typography>
                    <Button className={classes.button} color="inherit">MUSIC</Button>
                    <Button className={classes.button} color="inherit">MOVEMENT</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
    button: {
    margin: theme.spacing(1),
  },
});

export default withStyles(styles)(Header);