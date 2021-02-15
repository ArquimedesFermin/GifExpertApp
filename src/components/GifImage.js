import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },

  text: {
    height: 80,
  },

  card: {
    width: "100%",
  },
});

export const GifImage = ({ title, url }) => {
  const classes = useStyles();

  return (
    <div className="card animate__animated animate__fadeIn">
        {" "}
        <Card className={classes.root}>
          <CardActionArea className={classes.card}>
            <CardMedia
              component="img"
              alt={title}
              height="190"
              image={url}
              title={title}
            />
            
          </CardActionArea>
        </Card>
    </div>
  );
};
