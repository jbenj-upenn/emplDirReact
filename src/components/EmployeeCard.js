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
    results: []
  };

  // When this component mounts, search the random user API 
  componentDidMount() {
    this.searchEmps();
  }

    searchEmps = query => {
      API.getEmps()
        .then(res => {
          console.log(res.data.results)
          this.setState({ results: res.data.results });
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
    // console.log(value);
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
          <Col size="md-8">
            <Card
              heading={"heading"}
            >
              {this.state.results.length ? (
                <EmpDetail
                  name={ this.state.results[0].name.first + " " + this.state.results[0].name.last }
                  phone={this.state.results[0].phone}
                  email={this.state.results[0].email}
                  dob={this.state.results[0].dob.date}
                  picture={this.state.results[0].picture.thumbnail}
                />
              ) : (
                  <h3>No Employees by this Name</h3>
                )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EmployeeCard;