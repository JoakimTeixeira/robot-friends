import React from "react";
import Card from "./Card";

// Robots is destructed to don't have to import "props" keyword and later call it as props.robots
const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map(user => {
        let { id, name, email } = user;

        return <Card key={id} id={id} name={name} email={email} />;
      })}
    </div>
  );
};

export default CardList;
