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
                        return (
                          <option value={match[index]}>
                            {match[index]}
                          </option>
                        );
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
<Modal.Body>{console.log(array1[0].length)}</Modal.Body>
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