import React, { Component } from 'react';
// import { Table } from 'reactstrap';
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import EmpDetail from './EmpDetail';
import SearchForm from "./SearchForm";
import API from "../utils/api";
import Moment from 'react-moment';

class EmployeeCard extends Component {
  state = {
    search: "",
    results: [{}]
  };

  // When this component mounts, search the random user API 
  componentDidMount() {
    this.searchEmps();
  }

    searchEmps = query => {
      API.getEmps()
        .then(res => {
          console.log(res)
          this.setState({ results: res.data });
          console.log(this.state.results);
        })
        .catch(err => console.log(err));
    }

  formatDOB = dob => {
    const empDOB = Moment(dob).format("LL");
    return empDOB;
  }

  handleInputChange = event => {
    // const { name, value } = event.target;
    const name = event.target.name
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the random user API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmps(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
           <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
          <Col size="md-8">
            <Card
              heading={this.state.results.name || "Search for an Employee to Begin"}
            >
              {this.state.results.name ? (
                <EmpDetail
                  name={this.state.results.name}
                  phone={this.state.results.phone}
                  email={this.state.results.email}
                  dob={this.state.results.dob}
                  picture={this.state.results.picture.medium}
                />
              ) : (
                  <h3>No Employees by this Name</h3>
                )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EmployeeCard;