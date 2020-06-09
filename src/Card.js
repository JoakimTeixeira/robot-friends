import React, { Fragment } from "react";

const Card = ({ id, name, email }) => {
  return (
    <Fragment>
      <article className="tc dib mw5 bg-light-green pa3 ma2 br3 shadow-5 grow">
        <img
          alt="robot"
          src={`https://robohash.org/${id}?size=200x200`}
          className="pa3"
        />
        <div className="pa2">
          <h1 className="f5">{name}</h1>
          <p className="measure mt2 mid-gray">{email}</p>
        </div>
      </article>
    </Fragment>
  );
};

export default Card;
