import React from 'react';
import { Table } from 'reactstrap';

const empTable = (props) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Phone</th>
          <th>EMail</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark Otto</td>
          <td>1234567899</td>
          <td>mark@mdo.com</td>
          <td>1/2/78</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Susan Sharpe</td>
          <td>1234567799</td>
          <td>susan@mdo.com</td>
          <td>8/4/76</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Feliz Negron</td>
          <td>1234562781</td>
          <td>feliz@mdo.com</td>
          <td>5/15/78</td>
        </tr>

      </tbody>
    </Table>
  );
}

export default empTable;