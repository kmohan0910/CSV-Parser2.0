import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "./Bodal.css";
import Basic from "./Dragdrop";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import $ from "jquery";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Dropzone from "react-dropzone";
import "./Dragdrop.css";
import SearchIcon from "@material-ui/icons/Search";
import csv from "csv";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const Compo = ({ columndata1 }) => {
  const [show, setShow] = useState(true);
  const [show2, setshow2] = useState(false);
  const handleClose1 = () => {
    setshow1(false);
  };
  const handleClose2 = () => {
    setshow1(false);
    setshow2(true);
  };
  const [show1, setshow1] = useState(false);
  const handleClose = () => {
    setshow1(!show1);
    setShow(!show);
  };
  // const handleShow = () => setShow(true);
  const [inputfield, setinput] = useState([0, 1, 2, 3]);
  // const tablecoloums=[0,1,2]
  const [columndata, handladd] = useState(columndata1);
  const [value, setvalue] = useState("");
  // let firstname=[]
  const [array1, setarray] = useState({
    0: [],
    1: [],
    2: [],
    3: [],
  });
  const [userList, setuser] = useState([]);
  const [noofcol, setcol] = useState([0, 1, 2]);
  const [match, setmatch] = useState(["FirstName", "Lastname", "Email"]);
  const handlematch = (e, index) => {
    let match1 = match;
    let x = match1.indexOf(e);
    let temp = match1[index];
    match1[index] = e;
    match1[x] = temp;
    console.log(x);
    setmatch(match1);
    console.log(match, "here");
  };
  const setinput1 = (myvalue, index, index1) => {
    array1[index].splice(index1, 1, myvalue);
    // setinput([...inputfield,inputfield.length+1])
    //    console.log(array1)
    console.log(array1, "holla");
  };

  const handleadd = (e) => {
    handladd([...columndata, value]);
    setcol([...noofcol, noofcol.length + 1]);
    //columndata.push(value)
  };
  
  useEffect(() => {});

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
        csv.parse(reader.result, (err, data) => {
          console.log(columndata);
          var userList = [];

          for (var i = 0; i < data.length; i++) {
            const newUser = [];
            for (var j = 0; j < columndata.length; j++) {
              newUser.push(data[i][j]);
            }
            // const name = data[i][0];
            // const phoneNumber = data[i][1];
            // const address = data[i][2];
            // const newUser = { 0: name, 1: phoneNumber, 2: address };
            userList.push(newUser);
            console.log(userList);
          }
          setarray(userList);
        });
        setshow1(!show1);
        setShow(!show);
      };
      reader.readAsText(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    accept: ".csv",
    onDrop,
  });

  return (
    // Page1
    <div style={{ color: "#50535b" }}>
      <Modal dialogClassName="modal-90w" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>Add Bulk Records</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Basic columndata={columndata}userList={userList}/> */}

          <section className="container">
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <span className="uploadbtu">
                <Button>Upload Files</Button>
                <p>
                  You can upload any .csv, .tsv file with any set of columns as
                  long as it has 1 record per row. The next step will allow you
                  to match your spreadsheet columns to the right data points.
                  You'll be able to clean up or remove any corrupted data before
                  finalizing your report.
                </p>
              </span>
            </div>
            <aside></aside>
          </section>

          {/* Manual Data entry */}
          <h2>....or just manually add data here :</h2>
          <div className="add-column">
            <input
              className="add-input"
              onChange={(e) => setvalue(e.target.value)}
            ></input>
            <button className="hello" onClick={handleadd}>
              Add Column
            </button>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                {/* <th>SNo</th> */}
                {columndata.map((attr, index) => {
                  return <th>{columndata[index]}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {inputfield.map((inputi, index) => {
                return (
                  <tr>
                    {/* <td>{index+1}</td> */}
                    {noofcol.map((attr, index1) => {
                      return (
                        <td>
                          <input
                            value={array1[index][index1]}
                            onChange={(e) =>
                              setinput1(e.target.value, index, index1)
                            }
                          ></input>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Proceed
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal dialogClassName="modal-90w" show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>Bulk Add {array1.length} Records</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {noofcol.map((attr, index1) => {
              return (
                <div style={{ width: "100%", display: "flex" }}>
                  <Table>
                    <thead>
                      <tr>
                        <th style={{ background: "#efefef6e" }}>
                          <div style={{ padding: "10px" }}>
                            {array1[0][index1]}
                            {/* <form
                              action="/action_page.php"
                              style={{
                                display: "flex",
                                float: "right",
                                paddingBottom: "2px",
                              }}
                            >
                              <input
                                style={{
                                  border: "1px solid gray",
                                  paddingBottom: "5px",
                                  color: "#50535b",
                                }}
                                className="colums"
                                placeholder="Select a Column Name"
                                list="columns"
                                name="browser"
                                onBlur={(e) => {
                                  handlematch(e.target.value, index1);
                                }}
                              />

                              <datalist id="columns">
                                {match.map((attr, index) => {
                                  return <option value={attr} />;
                                })}
                              </datalist>
                            </form> */}
                            <select
                              name="columns"
                              id="headers"
                              style={{ display: "flex", float: "right" }}
                              onChange={(e) => {
                                handlematch(e.target.value, index1);
                              }}
                              Value={match[index1]}
                            >
                              <option value="none" selected disabled hidden>
                                {/* Select the Column Name */}
                                {match[index1]}
                              </option>
                              {match.map((attr, index) => {
                                return <option value={match[index]} >{match[index]}</option>;
                              })}
                            </select>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    {array1.length
                      ? array1.map((item, index) => {
                          return index < 4 ? (
                            <tr>
                              <td>{array1[index][index1]}</td>
                            </tr>
                          ) : (
                            ""
                          );
                        })
                      : ""}
                  </Table>
                  <div className="volla" style={{ width: "100%" }}>
                    <div style={{ marginTop: "30px" }}>
                      <aside class="column-matched">
                        <ul>
                          <li style={{ fontWeight: "500", color: "#50535b" }}>
                            <CheckCircleIcon
                              fontSize="small"
                              style={{ color: "green", padding: "2px" }}
                            />
                            Matched to the{" "}
                            <span class="suggested-fieldname primaryTextColor">
                              {match.map((attr, index) => {
                                return index == index1 ? match[index] : "";
                              })}
                            </span>{" "}
                            field.
                          </li>
                          {/* <li>
                          <i class="fa fa-info-circle"></i>100% of your rows
                          have a value for this column
                        </li> */}
                        </ul>
                        <div class="confirm-box">
                          <span>
                            <button
                              className="comfirm-button"
                              id="confirmed-0"
                              tabindex="4"
                            >
                              Confirm mapping
                            </button>
                          </span>
                          <span>
                            <button
                              className="hello12"
                              // class="button invert"
                              id="ignored-0"
                              tabindex="5"
                            >
                              Ignore this column
                            </button>
                          </span>
                        </div>
                      </aside>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="hello1"
            variant="primary"
            id="next-trigger"
            onClick={handleClose}
          >
            Back
          </button>
          <Button variant="primary" id="next-trigger" onClick={handleClose2}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Page 2 */}
      {/* Repair Modal */}

      <Modal dialogClassName="modal-90w" show={show2} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>Repair</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table>
            <thead>
              <tr>
                {/* <th>SNo</th> */}
                {columndata.map((attr, index) => {
                  return <th>{columndata[index]}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {inputfield.map((inputi, index) => {
                return (
                  <tr>
                    {/* <td>{index+1}</td> */}
                    {array1[index].length == 0
                      ? ""
                      : noofcol.map((attr, index1) => {
                          return array1[index][index1] ? (
                            <td>{array1[index][index1]}</td>
                          ) : (
                            <td className="modal2">{array1[index][index1]}</td>
                          );
                        })}
                  </tr>
                );
              })}
              {console.log(array1)}
            </tbody>
          </Table>

          {console.log(array1[0].length)}
        </Modal.Body>
        <Modal.Footer>
          <button
            className="hello1"
            variant="primary"
            id="next-trigger"
            onClick={handleClose}
          >
            Back
          </button>
          <Button variant="primary" id="next-trigger" onClick={handleClose1}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Compo;
