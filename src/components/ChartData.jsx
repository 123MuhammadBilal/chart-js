const ChartData = ({ setChartData }) => {
  const onChangeData = (e) => {
    setChartData(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          onChangeData(e);
        }}
      />
      <br />
    </div>
  );
};

export default ChartData;
