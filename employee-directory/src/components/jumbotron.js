import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Jumbotron(props) {
    return (
    <div className="jumbotron" style={{ background: "#2b2828"}}>
        <div className="container">
            <h1 style={{ color: "white", textAlign: "center" }} className="display">
                Employee Directory
            </h1>
        </div>
    </div>
    )
}

export default Jumbotron;