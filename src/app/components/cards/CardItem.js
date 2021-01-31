import React from "react";
import { Link } from "react-router-dom";

export const CardItem = (props) => {
  return (
    <>
      <li className="cards__item">
        <a className="cards__item__link" target='_blank' href={props.path}>
          <figure className="cards__item__pic-wrap">
            <img className="cards__item__img" alt="Travel" src={props.src} />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
};
