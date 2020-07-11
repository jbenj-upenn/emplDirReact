import React from 'react';
import { Jumbotron } from 'reactstrap';
// import SearchForm from '../SearchForm';
import "./style.css";

const Header = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="header">Employee Tracker</h1>
        <p className="lead">Keep track of your company's employees here.</p>
        <hr className="my-2" />
        <p className="p">Search and filter by category below.</p>
        {/* <SearchForm /> */}
      </Jumbotron>
    </div>
  );
};

export default Header;