import React from 'react';
import YouTube from 'react-youtube';
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';

const Music = ({classes}) => {
    return (
        <div>
            <List className={classes.root}>
                <ListItem className={classes.details}>
                    <YouTube videoId={"JzhIEXiYto4"}  />


                </ListItem>
                <ListItem className={classes.details}>
                    <YouTube videoId={"NYl7HNNQ1Wo"}  />


                </ListItem>
                <ListItem className={classes.details}>
                    <YouTube videoId={"MVoQT3uNg4I"}  />


                </ListItem>
            </List>
        </div>
    );
};

const useStyles = {
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  details: {
    justifyContent: "center"
  },
  link: {
    color: "#424242",
    textDecoration: "none",
    "&:hover": {
      color: "black"
    }
  }
};
export default withStyles(useStyles)(Music);