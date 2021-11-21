import React, { useEffect, useState } from "react";

function Form({ store }) {
  const [acntName, setAcntName] = useState("");
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [exRes, setExRes] = useState("");
  const [note, setNote] = useState("");
  const compute = () => {
    if (rate && amount) {
      setExRes(rate * amount);
    }
  };
  useEffect(() => {
    compute();
  }, [exRes, rate, amount,compute]);
  const onHandleFormChange = (e, params) => {
    params === "actNam" && setAcntName(e.target.value);
    // params === "amount" && setAmount(e.target.value);
    if (params === "amount") {
      // setExRes('');
      setAmount(e.target.value);
      compute();
    }
    if (params === "rate") {
      // setExRes('');
      setRate(e.target.value);
      setExRes(rate * amount);
    }
    // params === "rate" && setRate(e.target.value);
    params === "dueDate" && setDueDate(e.target.value);
    // params === "exRes" && setExRes(e.target.value);
    params === "note" && setNote(e.target.value);
  };
  const addEarning = () => {
    let eData = {
      accountName: acntName,
      amount: amount,
      rate: rate,
      dueDate: dueDate,
      earning: exRes,
      note: note,
    };
    // console.log(eData);
    store(eData);
    setAcntName('');
    setAmount('');
    setDueDate('');
    setExRes('');
    setNote('');
    setRate('');
    window.$("#myModal").modal("hide");
  };
  return (
    <div className="modal" id="myModal">
      <div className="modal-dialogue modal-dialog-centered modal-lg">
        <div
          className="modal-content card shadow-sm"
          style={{ backgroundColor: "#141625" }}
        >
          {/* Modal Header */}
          <div className="modal-header text-white">
            <h4 className="modal-title">Add Earning</h4>
            <button
              type="button"
              className="close text-white"
              data-dismiss="modal"
            >
              &times;
            </button>
          </div>
          {/* Modal body */}
          <div className="modal-body">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Account username here"
              value={acntName}
              onChange={(event) => onHandleFormChange(event, "actNam")}
              required
              id="acctNamInp"
              maxLength="25"
            />
            {acntName}
            <input
              type="number"
              className="form-control mb-2"
              placeholder="Amount in USD"
              value={amount}
              onChange={(event) => onHandleFormChange(event, "amount")}
              required
              id="usdInp"
            />
            <input
              type="number"
              className="form-control mb-2"
              placeholder="Enter USD to Naira Exchange Value"
              value={rate}
              onChange={(event) => onHandleFormChange(event, "rate")}
              required
              id="xchRate"
            />
            <input
              type="number"
              className="form-control mb-2"
              placeholder="USD to Naira Preview Value"
              value={exRes}
              id="xchRes"
              disabled
            />
            <input
              type="date"
              name="begin"
              className="form-control"
              id="dueDate"
              value={dueDate}
              onChange={(event) => onHandleFormChange(event, "dueDate")}
              placeholder="mm/dd/yyyy"
            />
            <textarea
              name="note"
              cols="30"
              rows="10"
              className="form-control mt-1"
              maxLength="500"
              value={note}
              onChange={(event) => onHandleFormChange(event, "note")}
              id="noteInp"
            ></textarea>
            <input
              type="button"
              className="btn mybg text-white mt-1 d-block"
              value="Add"
              onClick={addEarning}
              id="addBtn"
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
              id="closeMod"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
