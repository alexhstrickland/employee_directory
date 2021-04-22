import React, { Component } from "react";
import API from "../utils/API";
import Results from "../components/results";
import Jumbotron from "../components/jumbotron";
import Search from "../components/search";


class Gallery extends Component {
  state = {
    employees: [], input: "", sorted: "ascending", searchResults: []};

  componentDidMount() {
    API.get("https://randomuser.me/api/?results=100").then(data => {
      console.log(data.data)
      this.setState({ 
        employees: data.data.results,
        empResults: data.data.results
      });
    }).catch(err => {
      console.log(err)
    })
  }

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

  sortFirstName = () => {
    const firstName = this.state.employees.sort((a, b) => a.name.first.localeCompare(b.name.first));
      this.setState({
        employees: firstName
      })
  };

  sortLastName = () => {
    const lastName = this.state.employees.sort((a, b) => a.name.last.localeCompare(b.name.first));
      this.setState({
        employees: lastName
      })
  };


  sortCity = () => {
    const city = this.state.employees.sort((a, b) => a.location.city.localeCompare(b.location.city));
      this.setState({
        employees: city
      })
  };

  sortState = () => {
    const state = this.state.employees.sort((a, b) => a.location.state.localeCompare(b.location.state));
      this.setState({
        employees: state
      })
  };




  render() {
    return (
      <>
      <Jumbotron />
      <Search handleInputChange={this.handleInputChange} input={this.state.input}/>
      <Results results = {this.state.employees} firstName = {this.firstName} lastName = { this.lastName} city = {this.city} state = {this.state} />
      </>
    );
  };

};


export default Gallery;
