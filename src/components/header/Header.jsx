import React from "react";

function Header(props) {
    const {myClick, numEarn} = props;
  return (
    <div className="row pt-3 pb-3 pr-1 pl-1 m-0 container">
      <div className="col-4 p-0">
        <div className="row ml-2">
          <h4 className="text-white ">Earnings</h4>
          <p className="text-white" id="earnCount">
            {numEarn} payment
          </p>
        </div>
      </div>
      <div className="col-8 text-right p-0">
        <span className="text-white mr-2 dropdown-toggle">Filter</span>
        <button
          id="newCard"
          className="btn badge-pill my-new text-white mr-2"
          style={{ padding: "10px 15px" }}
          onClick={myClick}
        >
          <span className="plus-rnd mr-1 fas fa-plus"></span> New
        </button>
      </div>
    </div>
  );
}

export default Header;
