import React, { useState } from "react";
import "./Histogram.css";

const mokeData = [];
// here i am getting the date
var today = new Date();

// trying loop till 30
for (var i = 0; i < 30; i++) {
  var currentDate = new Date(today.getTime());
  currentDate.setDate(today.getDate() + i);
  const graphValue = Math.random() * (90 - 30 + 1) + 30;
  //push the new date in array : mokeData
  mokeData.push({
    date: currentDate.toISOString().split("T")[0],
    id: i + 1,
    value: graphValue.toFixed(),
  });
}
//check that arry data is ok????
console.log("mokeData_____", mokeData);

const Histogram = () => {
  // using this satate fro input range hanlders
  const [range, setRange] = useState([0, mokeData.length]);
  console.log("ranges____", range[0], range[1]);

  //getting data that is between both handles according to state
  const filteredData = mokeData.filter(
    (item) => item.id >= range[0] && item.id <= range[1]
  );

  // getting the first item from filtered data
  const firstItem = filteredData.length > 0 ? filteredData[0] : null;
  // getting the last item from filtered data
  const lastItem =
    filteredData.length > 0 ? filteredData[filteredData.length - 1] : null;

  const handleChangeRange = (e, isMinRange) => {
    const newValue = isMinRange
      ? [parseInt(e.target.value), range[1]]
      : [range[0], parseInt(e.target.value)];
    setRange(newValue);
  };


  return (
    <div className="histogram">
      <div className="container">
        <div className="arrayIndex">
          {mokeData.map(function (elm) {
            return <span key={elm.id}>{elm.id}</span>;
          })}
        </div>
        <div className="arrayBar">
          {mokeData.map(function (elm) {
            return (
              <span
                key={elm.id}
                style={{ height: elm.value + "%" }}
                className="arrayBarItem"
              >
                <p className="graphValue">{elm.value}</p>
              </span>
            );
          })}
        </div>
        <div className="arrayDate">
          {mokeData.map(function (elm) {
            return <span key={elm.id}>{elm.date}</span>;
          })}
        </div>
        <div className="slider" id="slider-distance">
          <input
            type="range"
            value={range[0]}
            max={mokeData.length}
            min="0"
            step="1"
            onChange={(e) => handleChangeRange(e, true)}
          />
          <input
            type="range"
            value={range[1]}
            max={mokeData.length}
            min={ range[1] - range[0] * 2 }
            step="1"
            onChange={(e) => handleChangeRange(e, false)}
          />
        </div>
      </div>
      <div className="data">
        <h5>Data Between First & Last Item</h5>
        <div className="dataDetails">
          {filteredData.map((item) => {
            return <p key={item.id}>{item.date}</p>;
          })}
        </div>
      </div>
      <div className="details">
        <div>
          <div
            className="inverse-left"
            style={{ width: `${(range[0] / mokeData.length) * 100}%` }}
          ></div>
          <div
            className="inverse-right"
            style={{
              width: `${
                ((mokeData.length - range[1] - 1) / mokeData.length) * 100
              }%`,
            }}
          ></div>
          <div
            className="range"
            style={{
              left: `${(range[0] / mokeData.length) * 100}%`,
              right: `${
                ((mokeData.length - range[1] - 1) / mokeData.length) * 100
              }%`,
            }}
          ></div>
          <span
            className="thumb"
            style={{ left: `${(range[0] / mokeData.length) * 100}%` }}
          ></span>
          <span
            className="thumb"
            style={{ left: `${(range[1] / mokeData.length) * 100}%` }}
          ></span>
          <div
            className="sign"
            style={{ left: `${(range[0] / mokeData.length) * 100}%` }}
          >
            <span id="value1">{range[0]}</span>
          </div>
          <div
            className="sign"
            style={{ left: `${(range[1] / mokeData.length) * 100}%` }}
          >
            <span id="value2">{range[1]}</span>
          </div>
        </div>
        <p>
          First Item:{" "}
          {firstItem ? (
            <span>{firstItem.date}</span>
          ) : (
            <span>No Item Selected</span>
          )}
        </p>
        <p>
          Last Item:{" "}
          {lastItem ? (
            <span>{lastItem.date}</span>
          ) : (
            <span>No Item Selected</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Histogram;
