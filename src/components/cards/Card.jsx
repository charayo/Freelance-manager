import React from "react";

function Card(props) {
  let today = new Date();
  let dateUpdate = () => {
    setInterval(() => {
      today = new Date();
    }, 3600000);
  };
  dateUpdate();
//   console.log(props);
  const { amount, accountName, id, dueDate, earning, delBtn } = props;
  function getDate(date) {
    return (new Date(date));
  }
  let icon;
  let mydueDate = getDate(dueDate);
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = String(today.getFullYear());
  let thisDay = mm + " " + dd + " " + yyyy;
  let currentDate = getDate(thisDay);
  // console.log(dueDate > currentDate);
  let bootstrap, payStatus;
  if (mydueDate > currentDate) {
    bootstrap = "btn-warning text-warning";
    payStatus = "Pending";
    icon = "fa fa-spinner";
  } else if (mydueDate < currentDate) {
    bootstrap = "btn-success text-success";
    payStatus = "Cleared";
    icon = "fa fa-check-circle";
  } else {
    bootstrap = "btn-primary text-primary";
    payStatus = "Releasing";
    icon = "fa fa-spinner fa-spin";
  }
  return (
    <div className="my-card  w-100 container mb-2">
      <span
        className="text-danger fa fa-trash float-right pt-3 ml-2 delBtn"
         onClick={()=>delBtn(id)} 
      ></span>
      <div className="container pt-2">
        <span className="text-white">${amount} </span>
        <span className="text-white float-right ">{accountName}</span>
        <span className="text-primary">
          ID: C{id + 1}
          <span></span>
        </span>
      </div>
      <div className="row">
        <div className="text-left text-white container col-7">
          <p className="">Due {dueDate}</p>
          <h3 className="mt-0">₦{earning}</h3>
        </div>
        <div className="col-5 text-right">
          <button
            className={
              bootstrap + " btn bg-transparent text-white mt-4 status-btn "
            }
          >
            <span className={icon}> </span> {payStatus}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
