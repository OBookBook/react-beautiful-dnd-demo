const Filter = () => {
  const words = ["spray", "elite", "exuberant", "destruction", "present"];
  // 条件を満たさない要素は削除される。
  const results = words.filter((world) => world.length < 6); // spray ,elite

  return (
    <div>
      <h1>Filter</h1>
      {results.map((result) => (
        <div key={result}>{result}</div>
      ))}
    </div>
  );
};

export default Filter;
