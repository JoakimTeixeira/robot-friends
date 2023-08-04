import { Fragment } from "react";
import "./Card.css";

const Card = ({ id, name, email }) => {
  return (
    <Fragment>
      <article className="card">
        <img
          className="card-img"
          alt="robot"
          src={`https://robohash.org/${id}?size=250x250`}
        />
        <div className="card-description">
          <h2 className="card-title">{name}</h2>
          <p className="card-detail">{email}</p>
        </div>
      </article>
    </Fragment>
  );
};

export default Card;
