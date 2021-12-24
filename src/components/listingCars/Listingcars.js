import React, { useState } from "react";
import CarItem from "./CarItem";
import "./ListingCars.css";

function Listingcars(props) {
  const [search, setSearch] = useState(null);
  const [data, setData] = useState(props.cars);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSort = (e) => {
    console.log(e.target.value);
    if (e.target.value == "low") {
      setData(
        data.sort(function (a, b) {
          return a.price - b.price;
        })
      );
    } else if (e.target.value == "high") {
      setData(
        data.sort(function (a, b) {
          return b.price - a.price;
        })
      );
    }
    console.log(data);
  };

  return (
    <div className="Car-list-container">
      <div className="background">
        <div className="overlay">
          <h1>Vehicle Model </h1>
        </div>
      </div>
      <div className="cars mt-5">
        <div className="search-sort p-5">
          <input
            type="text"
            placeholder="Search ..."
            className="mr-5"
            onChange={handleSearch}
          />
          <div>
            <label className="pr-2">Sort by:</label>
            <select onChange={handleSort}>
              <option value="All">Default</option>
              <option value="low">price low to High </option>
              <option value="high">price High to low </option>
            </select>
          </div>
        </div>
        <div>
          {search == null
            ? data.map((car) => {
                {
                  return <CarItem carsData={car} />;
                }
              })
            : data.map((car) => {
                {
                  return car.name
                    .toLowerCase()
                    .includes(search.toLowerCase()) ? (
                    <CarItem carsData={car} />
                  ) : (
                    ""
                  );
                }
              })}
        </div>
      </div>
    </div>
  );
}

export default Listingcars;
