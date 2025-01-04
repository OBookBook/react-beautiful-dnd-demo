const Map = () => {
  const list = [1, 2, 3, 4];
  const dataList = [
    {
      name: "taro",
      age: 21,
    },
    {
      name: "naobe",
      age: 20,
    },
  ];

  return (
    <div>
      <h1>Map</h1>
      {list.map((number) => (
        <div key={number}>{number * 2}</div>
      ))}
      {dataList.map((data) => (
        <div key={data.name}>
          <div>{data.name}</div>
          <div>{data.age}</div>
        </div>
      ))}
    </div>
  );
};

export default Map;
