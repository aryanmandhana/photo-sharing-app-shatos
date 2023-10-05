import React, { useContext } from "react";
import "../Navigation/NavLinks.css"
import { NavLink } from "react-router-dom";
import { LoginContext } from "../context";

const Navlinks = (props) => {
    const loggedin = useContext(LoginContext)

    return (
        <ul className="navlinks">
            <li>
                <NavLink to="/" exact>Everyone</NavLink>

            </li>
            {loggedin.isLoggedIn && (
                <li>
                    <NavLink to={`/${loggedin.userId}/locations`}>My Locations</NavLink>
                </li>

            )}
            {loggedin.isLoggedIn && (
                <li>
                    <NavLink to="/locations/new">Add Location</NavLink>
                </li>
            )}
            {!loggedin.isLoggedIn && (
                <li>
                    <NavLink to="/login">SIGN IN/UP</NavLink>
                </li>

            )}

            {loggedin.isLoggedIn &&(
                <button onClick={loggedin.logout}>LOG OUT</button>
            )}
        </ul>
    )

};

export default Navlinks;