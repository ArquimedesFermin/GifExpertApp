import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { Giphy } from "./components/Giphy";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "./NavBar";
import Footer from "./Footer";
const useStyles = makeStyles({
  text: {
    margin: 15,
  },
});

export const GifExpertApp = () => {
  const classes = useStyles();

  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <>
    <header>
        <NavBar setCategory={setCategories} title="Gif Expert" />
      </header> 
      <main>
        <ol>
          {categories.map((category) => (
            <Giphy key={category} category={category} />
          ))}
        </ol>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
