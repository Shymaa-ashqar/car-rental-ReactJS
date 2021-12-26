import React, { useState, useEffect } from "react";
import CarItem from "./CarItem";
import "./ListingCars.css";

function Listingcars(props) {
  const [search, setSearch] = useState(null);
  const [data, setData] = useState(props.cars);
  const [sortValue, setSortValue] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSort = (e) => {
    if (e.target.value == "low") {
      setSortValue("low");
      setData(
        data.sort(function (a, b) {
          return a.price - b.price;
        })
      );
    } else if (e.target.value == "high") {
      setSortValue("high");
      setData(
        data.sort(function (a, b) {
          return b.price - a.price;
        })
      );
    } else if (e.target.value == "All") {
      setSortValue("All");
      setData(
        data.sort(function (a, b) {
          return a.id - b.id;
        })
      );
    }
  };

  return (
    <div className="Car-list-container">
      <div className="background">
        <div className="overlay">
          <h1>Vehicle Model </h1>
        </div>
      </div>
      <div className="cars pt-5">
        <div className="search-sort p-5 container mb-5">
          <input
            type="text"
            placeholder="Search ..."
            className="mr-5"
            onChange={handleSearch}
          />
          <div className="sorting-input">
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
                  return <CarItem carsData={car} key={car.id} />;
                }
              })
            : data.map((car) => {
                {
                  return car.name
                    .toLowerCase()
                    .includes(search.toLowerCase()) ? (
                    <CarItem carsData={car} key={car.id} />
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
