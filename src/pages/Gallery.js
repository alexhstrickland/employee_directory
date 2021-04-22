import React, { Component } from "react";
import API from "../utils/API";
import Results from "../components/results";
import Jumbotron from "../components/jumbotron";
import search from "../components/search";
import axios from "axios";


class Gallery extends Component {
  state = {
    employees: [], input: "", sorted: "ascending", searchResults: []};

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=100").then(data => {
      console.log(data.data)
      this.setState({ 
        employees: data.data.results,
        empResults: data.data.results
      });
    }).catch(err => {
      console.log(err)
    })
  }

  handleEmpSort = event => {
  
    this.setState(newState);
    
  };

  handleInputChange = event => {
    const {name, value} = event.target;

    this.setState({
      [name]: value
    }
    );
    const empResults = this.state.empResults.filter((employee) => {
      return employee.name.last.toLowerCase().includes(value.toLowerCase());
    });
    this.setState({
      employees: empResults
    })
  };

  sortFirstName = () = {};

  sortLastName = () = {};

  sortEmail = () = {};

  sortPhone = () = {};

  sortCity = () = {};

  sortState = () = {};


  render() {
    return (
      <Jumbotron />
      <Search />
      <Results />
    );
  }
}


export default Gallery;
