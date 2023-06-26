import React from "react";

const NewHistogram = () => {
  var data = [];

  // Get today's date
  var today = new Date();

  // Add 30 consecutive dates to the array
  for (var i = 0; i < 30; i++) {
    var currentDate = new Date(today.getTime());
    currentDate.setDate(today.getDate() + i);
    data.push(currentDate.toISOString().split("T")[0]);
  }

  // Print the date array
  console.log(data);
  console.log("Number of items in the array: " + data.length);
  return (
    <div>
      NewHistogram
      {data.map(function (item, index) {
        return <p>{index + 1}</p>;
      })}
    </div>
  );
};

export default NewHistogram;
