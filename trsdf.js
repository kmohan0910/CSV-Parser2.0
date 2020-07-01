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
  const [lenght1, setlenght] = useState([]);
  // const [show2, setshow2] = useState(false);
  // const handleClose1 = () => {
  //   setshow1(false);
  // };
  // const handleClose2 = () => {
  //   setshow1(false);
  //   setshow2(true);
  // };
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
  const handleignore = () => {};
  const [array3, setarray3] = useState({});
  const handleback = () => {
    if (tabindex == 2) {
      settab(tabindex - 2);
    } else {
      settab(tabindex - 1);
    }
  };
  const handlenext = () => {
    if (tabindex == 0) {
      settab(tabindex + 2);
      setUpload(false);
    } else {
      settab(tabindex + 1);
      // const newMatch = JSON.parse(JSON.stringify(array2));
      // setarray(array2);
      console.log("set", array1);
    }
  };
  // const [userList, setuser] = useState([]);
  const [noofcol, setcol] = useState([0, 1, 2]);
  const [match, setmatch] = useState(["FirstName", "Lastname", "Email"]);
  const [upload, setUpload] = useState(false);
  const [tabindex, settab] = useState(0);
  const handlematch = (e, index) => {
    const newMatch = JSON.parse(JSON.stringify(match));
    const newOrder = JSON.parse(JSON.stringify(match));
    let x = match.indexOf(e);
    let temp = newMatch[index];
    newMatch[index] = e;
    newMatch[x] = temp;
    setmatch(newMatch);
    console.log(match, "here");
  };

  const setinput1 = (myvalue, index, index1) => {
    const array2 = JSON.parse(JSON.stringify(array1));
    array2[index].splice(index1, 1, myvalue);
    // setinput([...inputfield,inputfield.length+1])
    //    console.log(array1)
    setarray(array2);
    console.log(array1, "holla");
  };

  const handleadd = (e) => {
    handladd([...columndata, value]);
    setcol([...noofcol, noofcol.length + 1]);
    //columndata.push(value)
  };

  useEffect(() => {});

  // States for Confirming
  const [confirmstat, setconfirm] = useState([false, false, false]);
  const [order, setorder] = useState([0, 1, 2]);

  const confirmcol = (index) => {
    const x = JSON.parse(JSON.stringify(confirmstat));
    x[index] = true;

    setconfirm(x);
    // setconfirm(x);
    console.log(confirmstat, "lock");
    //   let x1 = match.indexOf(value);
    //  x.splice(x1,1)
    //   setmatch(x);
    //   console.log(match,"hiih")
  };
  const undoconfirm = (index) => {
    const x = JSON.parse(JSON.stringify(confirmstat));
    x[index] = false;

    setconfirm(x);
    // setconfirm(x);
    console.log(confirmstat, "lock");
    //   let x1 = match.indexOf(value);
    //  x.splice(x1,1)
    //   setmatch(x);
    //   console.log(match,"hiih")
  };
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
          console.log(data, "hii");
          var userList = [];
          //lenght1=data[0].length;
          let columns = [];
          for (var i = 0; i < data[0].length; i++) {
            columns.push(i);
          }
          setlenght(columns);
          for (var i = 0; i < data.length; i++) {
            const newUser = [];
            for (var j = 0; j < data[0].length; j++) {
              newUser.push(data[i][j]);
            }
            userList.push(newUser);
            console.log(userList, "git");
          }
          setarray3(userList);
          setUpload(true);
          //  setarray(userList)
        });
        // setshow1(!show1);
        // setShow(!show);

        settab(1);
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
            {tabindex == 0 ? (
              <h4>Add Bulk Records</h4>
            ) : tabindex == 1 ? (
              <div>
                <h4>Add Bulk {array3.length} Records - Match Headers</h4>
              </div>
            ) : tabindex == 2 ? (
              <div>
                <h4>Repair Records</h4>
              </div>
            ) : (
              ""
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Basic columndata={columndata}userList={userList}/> */}
          {tabindex == 0 ? (
            <div>
              <section className="container">
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  <span className="uploadbtu">
                    <Button>Upload Files</Button>
                    <p>
                      You can upload any .csv, .tsv file with any set of columns
                      as long as it has 1 record per row. The next step will
                      allow you to match your spreadsheet columns to the right
                      data points. You'll be able to clean up or remove any
                      corrupted data before finalizing your report.
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
            </div>
          ) : tabindex == 1 ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              {lenght1.map((attr, index1) => {
                return (
                  <div style={{ width: "100%", display: "flex" }}>
                    <Table style={{ width: "50%" }}>
                      <thead>
                        <tr>
                          <th style={{ background: "#efefef6e" }}>
                            <div style={{ padding: "10px" }}>
                              {array1[0][index1]}

                              <select
                                name="columns"
                                id="headers"
                                style={{ display: "flex", float: "right" }}
                                onChange={(e) => {
                                  handlematch(e.target.value, index1);
                                }}
                                value={match[index1]}
                                disabled={confirmstat[index1]}
                              >
                                {console.log(confirmstat)}
                                <option value={match[index1]} selected>
                                  {/* Select the Column Name */}
                                  {match[index1]}
                                </option>
                                {match.map((attr, index) => {
                                  if (index === index1) return <></>;
                                  return (
                                    <option
                                      disabled={confirmstat[index]}
                                      value={match[index]}
                                    >
                                      {match[index]}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      {array3.length
                        ? array3.map((item, index) => {
                            return index < 4 ? (
                              <tr>
                                <td>{array3[index][index1]}</td>
                              </tr>
                            ) : (
                              ""
                            );
                          })
                        : ""}
                    </Table>
                    <div className="volla" style={{ width: "50%" }}>
                      <div style={{ marginTop: "30px" }}>
                        <aside class="column-matched">
                          <ul>
                            {" "}
                            {match[index1] ? (
                              <li
                                style={{ fontWeight: "500", color: "#50535b" }}
                              >
                                <CheckCircleIcon
                                  fontSize="small"
                                  style={{ color: "green", padding: "2px" }}
                                />
                                Matched to the{" "}
                                <span class="suggested-fieldname primaryTextColor">
                                  {match[index1]}
                                </span>{" "}
                                field.
                              </li>
                            ) : (
                              <li
                                style={{ fontWeight: "500", color: "#50535b" }}
                              >
                                {/* <CheckCircleIcon
                                fontSize="small"
                                style={{ color: "green", padding: "2px" }}
                              /> */}
                                Not Matched!
                                {/* <span class="suggested-fieldname primaryTextColor">
                                {match[index1]}
                              </span>{" "} */}
                              </li>
                            )}
                            {/* <li>
                          <i class="fa fa-info-circle"></i>100% of your rows
                          have a value for this column
                        </li> */}
                          </ul>
                          {!confirmstat[index1] ? (
                            <div class="confirm-box">
                              <span>
                                <button
                                  className="comfirm-button2"
                                  id="confirmed-0"
                                  // tabindex="4"
                                  onClick={() => confirmcol(index1)}
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
                                  onclick={() => handleignore}
                                >
                                  Ignore this column
                                </button>
                              </span>
                            </div>
                          ) : (
                            <div class="confirm-box">
                              <span>
                                <button
                                  className="comfirm-button"
                                  id="confirmed-0"
                                  // tabindex="4"
                                  // onClick={() => confirmcol(index1)}
                                >
                                  confirmed
                                </button>
                              </span>
                              <span>
                                <button
                                  className="hello12"
                                  // class="button invert"
                                  id="ignored-0"
                                  tabindex="5"
                                  onClick={() => undoconfirm(index1)}
                                >
                                  Undo
                                </button>
                              </span>
                            </div>
                          )}
                        </aside>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              {upload ? (
                <Table>
                  <thead>
                    <tr>
                      {/* <th>SNo</th> */}
                      {match.map((attr, index) => {
                        if (attr == undefined) {
                          return;
                        }
                        return <th>{attr}</th>;
                      })}
                      {console.log(match, "looo")}
                    </tr>
                  </thead>
                  <tbody>
                    {array3.map((inputi, index) => {
                      return (
                        <tr>
                          {/* <td>{index+1}</td> */}
                          {array3[index].length == 0
                            ? ""
                            : order.map((attr, index1) => {
                                return array3[index][attr] ? (
                                  <td>{array3[index][attr]}</td>
                                ) : (
                                  <td className="modal2">
                                    {array3[index][attr]}
                                  </td>
                                );
                              })}
                        </tr>
                      );
                    })}
                    {console.log(array3, order)}
                  </tbody>
                </Table>
              ) : (
                <Table>
                  <thead>
                    <tr>
                      {/* <th>SNo</th> */}
                      {match.map((attr, index) => {
                        return <th>{attr}</th>;
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
                                  <td className="modal2">
                                    {array1[index][index1]}
                                  </td>
                                );
                              })}
                        </tr>
                      );
                    })}
                    {console.log(array1)}
                  </tbody>
                </Table>
              )}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          {tabindex == 0 ? (
            ""
          ) : (
            <Button className="hello1" variant="primary" onClick={handleback}>
              Back
            </Button>
          )}
          <Button onClick={handlenext} disabled={tabindex < 2 ? false : true}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Compo;
