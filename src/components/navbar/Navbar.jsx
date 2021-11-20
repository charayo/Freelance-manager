import React from "react";

function Navbar() {
  return (
    <div>
      <div className="top-bar pt-3 pb-3 row">
        <div className="col-6">
          <span className="my-menu-icon top-left h1 fas fa-bars ml-2"></span>
        </div>
        <div className="col-6 text-right">
          <span className="top-right text-white p-4 font-weight-bold">
            Charayo
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
