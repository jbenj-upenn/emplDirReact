import React from "react";

function EmpDetail(props) {
  return (
    <>
    <img alt={props.picture} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
    <tr>
      <h4>Name: {props.name}</h4>
      <h4>Phone: {props.phone}</h4>
      <h4>Email: {props.email}</h4>
      <h4>DOB: {props.dob}</h4>
    </tr>
    </>
  );
}

export default EmpDetail;