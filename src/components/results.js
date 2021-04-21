import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Results(props) {
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th><img></img></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Results;