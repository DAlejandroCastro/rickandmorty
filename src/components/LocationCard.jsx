import React from "react";
import "./styles/locationcard.css";

const LocationCard = ({ info }) => {
  return (
    <article className="location">
      <h2 className="location_name">{info?.name}</h2>
      <ul className="location_list">
        <li className="location_item">
          <span>Type: </span>
          <span>{info?.type}</span>
        </li>
        <li className="location_item">
          <span>Dimension: </span>
          <span>{info?.dimension}</span>
        </li>
        <li className="location_item">
          <span>Population: </span>
          <span>{info?.residents?.length}</span>
        </li>
      </ul>
    </article>
  );
};

export default LocationCard;
