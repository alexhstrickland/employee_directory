import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Results(props) {
    return (
        <div className="container">
            <table style={{color: "white"}} className="table">
                <thead>
                    <tr>
                        <th scope="col">Photo</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">City</th>
                        <th scope="col">State</th>
                    </tr>
                </thead>
                <tbody>
                {props.results.map(result => (
                    <tr key={result.login.uuid}>
                        <td><img alt="headshot" src={result.picture.large}></img></td>
                        <td>{result.name.first}</td>
                        <td>{result.name.last}</td>
                        <td>{result.email}</td>
                        <td>{result.phone}</td>
                        <td>{result.location.city}</td>
                        <td>{result.location.state}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Results;