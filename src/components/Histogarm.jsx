import React, { useState } from "react";
import "./Histogram.css";

const mokeData = [];

// here i am getting the current date
var today = new Date();

// trying loop till 30
for (var i = 0; i < 30; i++) {
  var currentDate = new Date(today.getTime());
  currentDate.setDate(today.getDate() + i);
  // i am getting the values between 30 to 90 using formula 
  const graphValue = Math.random() * (90 - 30 + 1) + 30;
  //push the new date in array : mokeData
  mokeData.push({
    date: currentDate.toISOString().split("T")[0],
    //every loop pushing id with increment 
    id: i + 1,
    //every loop pushing random value for graph bar
    value: graphValue.toFixed(),
  });
}

//check that arry data is ok????
console.log("mokeData_____", mokeData);

const Histogram = () => {
  // using this satate fro input range hanlders
  // there is an array in state where i have just to value 
  // first value is bind with left side handler and second is bind with second handler
  const [range, setRange] = useState([0, mokeData.length]);
  console.log("ranges____", range[0], range[1]);

  //getting data that is between both handles according to state
  // new variable 

  //and now i have new array after applying filter()
  const filteredData = mokeData.filter(
    // here matching item id and range id are same thats reason i am geting data by filter()
    (item) => item.id >= range[0] && item.id <= range[1]
  );

  // getting the first and last item from filtered data
  // i know that my data lenght always more then 0 
  //on this base i am using simple technic to get first and last item form array 
  const firstItem = filteredData.length > 0 ? filteredData[0] : null;
  // getting the last item 
  const lastItem =
    filteredData.length > 0 ? filteredData[filteredData.length - 1] : null;

    //traget value and handling conditionaly  
    //that which value of array should set  rang[0] or range[1]
  const handleChangeRange = (e, isMinRange) => {
    //after move the hadler i get value in a variable and set in state
    const newValue = isMinRange ? [parseInt(e.target.value), range[1]]
      : [range[0], parseInt(e.target.value)];
    setRange(newValue);
  };

  return (
    <div className="histogram">
      <div className="container">
        <div className="data">
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
        <div className="arrayIndex">
          {mokeData.map( (elm)=> {
            return <span key={elm.id}>{elm.id}</span>;
          })}
        </div>
        <div className="arrayBar">
          {mokeData.map( (elm)=> {
            return (
              <span
                key={elm.id}
                // its little tricky work 
                style={{ height: elm.value + "%" }}
                className="arrayBarItem"
              >
                <p className="graphValue">{elm.value}</p>
              </span>
            );
          })}
        </div>
        <div className="arrayDate">
          {mokeData.map( (elm)=> {
            return <span key={elm.id}>{elm.date}</span>;
          })}
        </div>
        <div className="slider">
          <input
            type="range"
            //rang is starting from 0
            value={range[0]}
            //and max range is 30 
            max={mokeData.length}
            min="0"
            step="1"
            onChange={(e) => handleChangeRange(e, true)}
          />
          <input
            style={{
              width: 100 - (range[0] / mokeData.length) * 100 - 0.3 + "%",
              float: "right",
              marginTop: "-5px",
            }}
            type="range"
            value={range[1]}
            max={mokeData.length}
            //min range of my second handler is the max range of first handler
            min={range[0]}
            step="1"
            onChange={(e) => handleChangeRange(e, false)}
          />
        </div>
      </div>
    </div>
  );
};
export default Histogram;
