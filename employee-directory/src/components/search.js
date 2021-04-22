import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Search(props) {
    return (
        <form className="bg-dark">
            <div className="form-group bg-dark" >
                <input
                    onChange={props.handleInputChange}
                    value={props.input}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search for an Employee"
                    id="search"
                    key={props.key}
                />
            </div>
        </form>
    )
}

export default Search;