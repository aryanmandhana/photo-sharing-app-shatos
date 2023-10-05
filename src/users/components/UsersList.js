import React from "react";
import UsersItem from "./UsersItem";
import "./UsersList.css";

const UsersList = (props) => {
    if(props.items.lenght === 0){
        return(
            <div className=""></div>
        )
    }
    return (
        <ul className="userlist">
            {props.items.map((user) => {
                return (<UsersItem
                    key={user._id}
                    id={user._id}
                    name={user.name}
                    pic={user.pic}
                    locationcount={user.locationid.lenght}
                />
                );
            })}
        </ul>
    );
};

export default UsersList