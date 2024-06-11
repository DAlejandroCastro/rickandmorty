import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import "./styles/residentcard.css";

const ResidentCard = ({ url }) => {
  const [resident, getResident] = useFetch();

  useEffect(() => {
    getResident(url);
  }, []);

  return (
    <article className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <figure className="resident_image">
              <img src={resident?.image} alt="character image" />
              <figcaption className="resident_status">
                <div className={`resident_circle ${resident?.status}`}></div>
                <span>{resident?.status}</span>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="front">
          <div className="img">
            <div className="circle"></div>
            <div id="right" className="circle"></div>
            <div id="bottom" className="circle"></div>
          </div>
          <div className="front-content">
            <h2 className="resident_name">{resident?.name}</h2>
            <hr className="sepator" />
            <ul className="resident_list">
              <li className="resident_item">
                <span>Specie: </span>
                <span>{resident?.species}</span>
              </li>
              <li className="resident_item">
                <span>Origin: </span>
                <span>{resident?.origin.name}</span>
              </li>
              <li className="resident_item">
                <span>Episode: </span>
                <span>{resident?.episode.length}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ResidentCard;
