import React from 'react';
import Grid from '@material-ui/core/Grid';
import YouTube from 'react-youtube';
import withStyles from "@material-ui/core/styles/withStyles";
import {Card} from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";


const videoData =[
    {
        id: "JzhIEXiYto4"
    },
    {
        id: "NYl7HNNQ1Wo"
    },
    {
        id: "NYl7HNNQ1Wo"
    },
];



const Music = ({classes}) => {
    return (

        <div className={classes.root} >
            <GridList  cellHeight={"auto"} cols={2}>
                {videoData.map(tile => (
                    <GridListTile  key={tile.id}>
                        <YouTube  videoId={tile.id} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
)
    ;
};

const useStyles = theme => ({

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,

  margin:50
  },
  video: {
    justifyContent: 'center'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});
export default withStyles(useStyles)(Music);