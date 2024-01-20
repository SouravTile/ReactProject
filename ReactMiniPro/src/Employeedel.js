import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
export function Employeedel() {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://localhost:7033/api/Employee/" + id)
      .then((res) => res.json())
      .then((result) => {
        setEmployee(result);
      });
  }, {});
  const handeldel = (event) => {
    fetch("https://localhost:7033/api/Employee/" + id, {
      method: "Delete",
    })
      .then((res) => res)
      .then((result) => {
        console.log(result);
      });
    navigate("/");
    event.preventDefault();
  };

  return (
    <div>
      <h1 style={{ color: "red" }}> Be Sure you want to delete </h1>
      <label>Id:</label>
      {employee.id}
      <br />
      <label>name:</label>
      {employee.name}
      <br />
      <label>Email:</label>
      {employee.email}
      <br />
      <label>Dpartment:</label>
      {employee.department}
      <form onSubmit={handeldel}>
        <input type="submit" />
      </form>
    </div>
  );
}
export default Employeedel;
