import React, { Fragment } from "react";
import { Container } from "@material-ui/core";
// import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

import Banner from "../Banner.jsx";
import Banner2 from "../Banner2.jsx";
import Banner3 from "../Banner3.jsx";
import Banner4 from "../Banner4.jsx";
import Banner6 from "../Banner6.jsx";

import { Mision } from "../Mision.jsx";

const useStyle = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    marginTop: "30px",
    marginBottom: "30px",
  },
  cont: {
    padding: 0,
    background: "#837B72",
  },
});

const Home = () => {
  const classes = useStyle();

  return (
    <Fragment>
      <Container maxWidth="xl" className={classes.cont}>
        <Banner titulo="Centro de Mediación y Formación en Resolución de Conflictos" />

        <Banner2 />
        <Mision />

        <section id="equipo">
          <Banner3 />
        </section>

        <section id="contacto">
          <Banner4 />
        </section>
        <Banner6 />
      </Container>
    </Fragment>
  );
};

export default Home;
