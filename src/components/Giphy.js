import React from "react";
import PropTypes from "prop-types";
import { GifImage } from "./GifImage";
import { useFecthGif } from "../hooks/useFecthGif";
import Typography from "@material-ui/core/Typography";

export const Giphy = ({ category }) => {
  const { data: images, loading } = useFecthGif(category);

  return (
    <>
    
      <div className="subDis">
      {loading ? (
        <Typography
          id="textLoading"
          variant="h6"
          className="animate__animated animate__flash"
        >
          Cargarndo...
        </Typography>
      ) : (
        images.map((arr) => {
          return <GifImage key={arr.id} {...arr} />;
        })
      )}
     </div>
     
    </>
  );
};

Giphy.propTypes = {
  category: PropTypes.string.isRequired,
};
