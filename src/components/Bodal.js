import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "./Bodal.css";
import Basic from "./Dragdrop";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import Compo from "./compo";

const Bodal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(!show);
  const [inputfield, setinput] = useState([0, 1, 2, 3]);
  const tablecoloums = [0, 1, 2];
  const [columndata, handladd] = useState(["Email", "FirstName", "Last Name"]);
  const [value, setvalue] = useState("");
  let firstname = [];
  const array1 = {
    0: [],
    1: [],
    2: [],
    3: [],
  };
  let lastname = [];
  let email = [];
  const [noofcol, setcol] = useState([0, 1, 2]);

  const setinput1 = (myvalue, index, index1) => {
    array1[index].splice(index1, 1, myvalue);
    console.log(array1);
  };

  const handleemail = (myvalue, index) => {
    email.splice(index, 1, myvalue);
    console.log(email, "here");
  };

  const handlefirstname = (myvalue, index) => {
    firstname.splice(index, 1, myvalue);
    console.log(firstname);
  };
  const handleadd = (e) => {
    handladd([...columndata, value]);
    setcol([...noofcol, noofcol.length + 1]);
    //columndata.push(value)
  };
  const setlastname = (index, e) => {
    firstname.splice(e, 1, index);
    console.log(lastname);
  };
  useEffect(() => {});

  return (
    <div>
      <Button variant="primary" className="hi" onClick={handleShow}>
        {" "}
        Upload CSV{" "}
      </Button>
      {show ? <Compo columndata1={columndata} /> : ""}
    </div>
  );
};

export default Bodal;
