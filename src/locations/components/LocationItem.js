import React from "react";
import "./LocationItem.css";

const LocationItem = (props) => {
    return(
        <li className="locationitem">
            <div className="locationitem-content">
                <div className="locationitem-pic">
                    <img src={`http://localhost:5000/${props.Pic}`} alt={props.Title} />

                </div>
                <div className="locationitem-infor">
                    <h2>{props.title}</h2>
                    <h3>{props.desc}</h3>
                    <p>{props.address}</p>
                </div>
            </div>
        </li>
    );
};

export default LocationItem;