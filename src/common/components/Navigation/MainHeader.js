import React from "react";
import "../Navigation/MainHeader.css"


const MainHeader = (props) =>{
    return<header className="mainheader"> {props.children}</header>;
};

export default MainHeader;