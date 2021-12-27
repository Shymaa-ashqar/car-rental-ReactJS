import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import carsData from "./carsData";
import Popup from "./popup";
import "./formStyle.css";

function BookingForm() {
  let { id } = useParams();
  const [submitted, setSubmitted] = useState(false);
  const [test, setTest] = useState(null);

  if (!localStorage.getItem("reservations"))
    localStorage.setItem("reservations", JSON.stringify([]));

  let [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("logged_user"))
  );

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setUserInfo({ ...userInfo, [id]: value });
  };

  let ppd;
  for (let obj of carsData) {
    if (obj.id == id) {
      ppd = obj.price;
    }
  }

  //****************** Start Date*******************//
  //Min and default//
  let lcl = JSON.parse(localStorage.getItem("reservations"));
  let found;
  let starting;
  let indx;
  let hrs;
  for (let i in lcl)
    if (lcl[i].id == id) {
      indx = i;
      let starting1 = new Date(lcl[i].end);
      let mid = starting1.getDate();
      starting1.setDate(mid + 1);

      let start = starting1.toISOString();
      starting = start.substring(0, 10);
      found = true;
    }

  let today = new Date();
  const start = today.toISOString();
  const valueCut1 = start.substring(0, 10);
  const [valueCut, setValueCut] = useState(found ? starting : valueCut1);

  // Max //
  let todayMax = new Date();
  let maxStartDate = todayMax.getDate();
  todayMax.setDate(maxStartDate + 45);
  const maxStartString = todayMax.toISOString();
  const maxStartCut = maxStartString.substring(0, 16);

  //****************** End Date*****************//
  //Min and default//

  let minEndDate = new Date(valueCut);
  let date = minEndDate.getDate();
  minEndDate.setDate(date + 7);
  let minEndString = minEndDate.toISOString();
  let minEndCut = minEndString.substring(0, 10);
  const [valueCut2, setValueCut2] = useState(0);

  useEffect(() => {
    setValueCut2(minEndCut);
  }, [valueCut]);

  const handleDateChange = (e) => {
    setValueCut(e.target.value);
  };
  const handleDateChange2 = (e) => {
    setValueCut2(e.target.value);
  };

  let reservation;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    reservation = {
      id: id,
      ...userInfo,
      tel: e.target.tel.value,
      start: valueCut,
      end: valueCut2,
      hour: e.target.hours.value,
    };

    setSubmitted(true);
    setTest(reservation);
  };

  let duration =
    (new Date(valueCut2).getTime() - new Date(valueCut).getTime()) / 86400000;

  return (
    <>
      <div className="car-form-container ">
        <form className="form" onSubmit={(e) => handleFormSubmit(e)}>
          <div className="textsCont">
            <div className="texts" id="texts1">
              <input
                onChange={(e) => handleInputChange(e)}
                value={userInfo.fName}
                required
                placeholder="First Name"
                type="text"
                name="fName"
                id="fName"
              />
              <input
                onChange={(e) => handleInputChange(e)}
                value={userInfo.lName}
                required
                placeholder="Last Name"
                type="text"
                name="lName"
                id="lName"
              />
            </div>
            <div className="texts" id="texts2">
              <input
                value={userInfo.email}
                required
                placeholder="Email"
                onChange={() => {
                  return null;
                }}
                type="email"
                name="email"
                id="email"
              />
              <input
                type="tel"
                pattern="[0-9]{10}"
                required
                placeholder="Mobile Number"
                name="tel"
                id="tel"
              />
            </div>
          </div>
          <div className="dates">
            <input
              onChange={(e) => handleDateChange(e)}
              value={valueCut}
              type="date"
              name="start"
              min={found ? starting : valueCut1}
            />
            <input
              onChange={(e) => handleDateChange2(e)}
              min={valueCut2}
              value={valueCut2}
              type="date"
              name="end"
            />
            <input required type="time" name="hours" />
          </div>
          <div className="total">
            <p className="state">{duration} Days</p>
            <p>Total :{duration * ppd} JOD</p>
          </div>
          <div className="submit">
            <input type="submit" value="Book Now !" />
          </div>
        </form>

        {found && (
          <>
            <h2 className="register-label">
              You already have a reservation from {lcl[indx].start} to{" "}
              {lcl[indx].end}
            </h2>
          </>
        )}
      </div>
      {submitted && <Popup test={test} setSubmitted={setSubmitted} />}
    </>
  );
}

export default BookingForm;
