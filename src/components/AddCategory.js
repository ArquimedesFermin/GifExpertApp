import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    position: "relative",
    top: "1px",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    }
    
  },
}));

export const AddCategory = ({ setCategory }) => {
  const style = useStyles();

  const [txt, setTxt] = useState("");

  const handleText = (e) => {
    setTxt(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (txt.length > 2) {
      setCategory((arr) => [txt, ...arr]);
    }
  };

  return (
    <form className={style.root} onSubmit={handleSubmit}>
      <InputBase
      id="CustomInput"
        placeholder="Search"
        inputProps={{ "aria-label": "Search" }}
        classes={{
          root: style.inputRoot,
          input: style.inputInput,
        }}
        value={txt}
        onChange={handleText}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired,
};
