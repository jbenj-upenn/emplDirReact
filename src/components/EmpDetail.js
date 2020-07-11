import React from "react";

function EmpDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.picture} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3>Name: {props.name}</h3>
      <h3>Phone: {props.phone}</h3>
      <h3>Email: {props.email}</h3>
      <h3>DOB: {props.dob}</h3>
    </div>
  );
}

export default EmpDetail;