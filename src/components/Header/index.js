import React from 'react';
import { Jumbotron } from 'reactstrap';
import "./style.css";

const Header = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="header">Employee Tracker</h1>
        <p className="lead">Keep track of your company's employees here.</p>
        <hr className="my-2" />
        <p className="p">Search and filter by category below.</p>
        {/* <p className="lead">
          <Button color="primary">Learn More</Button>
        </p> */}
      </Jumbotron>
    </div>
  );
};

export default Header;

