import React from "react";
import LocationList from "../components/LocationsList"
import "./LocationList.css";
import LocationItem from "./LocationItem";

const LocationsList = (props) => {

    if (props.items.lenght === 0) {
        return (
            <div className="center">
                <h2>No Location Exists</h2>

            </div>
        );
    }

    return (
        <ul className="locationlist">
            {props.item.map((loaction) => {
                return (
                    <LocationItem
                        key={loaction.id}
                        id={loaction.id}
                        title={loaction.title}
                        pic={loaction.pic}
                        address={loaction.address}
                        desc={loaction.Desc}
                    />
                );
            })}
        </ul>
    )
};

export default LocationList;