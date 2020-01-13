import React from 'react';
import Grid from '@material-ui/core/Grid';
import YouTube from 'react-youtube';
import withStyles from "@material-ui/core/styles/withStyles";

const Music = ({classes}) => {
    return (
        <div className={classes.root}>
            {/*<List className={classes.root}>
                <ListItem className={classes.details}>
                    <YouTube videoId={"JzhIEXiYto4"}  />


                </ListItem>
                <ListItem className={classes.details}>
                    <YouTube videoId={"NYl7HNNQ1Wo"}  />


                </ListItem>
                <ListItem className={classes.details}>
                    <YouTube videoId={"MVoQT3uNg4I"}  />


                </ListItem>
            </List>*/}
            <Grid container spacing={3}>

                <Grid item xs={6} >
                    <YouTube videoId={"JzhIEXiYto4"}/>
                </Grid>
                <Grid item xs={6} >
                    <YouTube videoId={"NYl7HNNQ1Wo"}/>
                </Grid>
                <Grid item xs={6} >
                    <YouTube videoId={"MVoQT3uNg4I"}/>
                </Grid>
            </Grid>
        </div>
    );
};

const useStyles = theme => ({
  root: {
    flexGrow: 1,
      margin: 20
  },
});
export default withStyles(useStyles)(Music);