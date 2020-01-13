import AppBar from "@material-ui/core/AppBar";
import Toolbar, {styles as toolbarStyles} from '../components/Toolbar';
import React from "react";
import clsx from 'clsx';
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import {Link as LinkR} from 'react-router-dom';


const Header = ({classes}) => {
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.left}/>
                    <Link
                        variant="h6"
                        underline="none"
                        color="inherit"
                        className={classes.title}
                        component={LinkR}
                        to='/'
                    >
                        {'Molina'}
                    </Link>
                    <div className={classes.right}>
                        <Link
                            color="inherit"
                            variant="h6"
                            underline="none"
                            className={classes.rightLink}
                            component={LinkR}
                            to='/music'
                        >
                            {'Music'}
                        </Link>
                        <Link
                            variant="h6"
                            underline="none"
                            className={clsx(classes.rightLink, classes.linkSecondary)}
                            component={LinkR}
                            to='/movement'
                        >
                            {'Movement'}
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

const styles = theme => ({
    title: {
        fontSize: 24,
    },
    placeholder: toolbarStyles(theme).root,
    toolbar: {
        justifyContent: 'space-between',
    },
    left: {
        flex: 1,
    },
    leftLinkActive: {
        color: theme.palette.common.white,
    },
    right: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    rightLink: {
        fontSize: 16,
        color: theme.palette.common.white,
        marginLeft: theme.spacing(3),
    },
    linkSecondary: {
        color: theme.palette.secondary.main,
    },
});

export default withStyles(styles)(Header);