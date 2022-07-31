import React from "react";
import loading from "../img/hug.gif";

const Preloader = (props) => {
    return <div className="loading">
        <img src={loading} alt=""/>
    </div>
}

export default Preloader;