import React, { Fragment } from "react";
import Card from "./Card";

// Robots is destructed to not have to import "props" keyword and later call it as props.robots
const CardList = ({ robots }) => {
  return (
    <Fragment>
      {robots.map(user => {
        let { id, name, email } = user;

        return <Card key={id} id={id} name={name} email={email} />;
      })}
    </Fragment>
  );
};

export default CardList;
