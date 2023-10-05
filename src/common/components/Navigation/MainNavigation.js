import React from "react";
import { Link } from "react-router-dom"

import MainHeader from "./MainHeader"
import Navlinks from "./NavLinks"
import "./MainNavigation.css"


const MainNavigation = () => {
    return (<MainHeader>
        <h1 className="mainnav-title">
            <Link to="/">Shatos</Link>
        </h1>
        <nav>
            <Navlinks />
        </nav>
    </MainHeader >
    )
};

export default MainNavigation;