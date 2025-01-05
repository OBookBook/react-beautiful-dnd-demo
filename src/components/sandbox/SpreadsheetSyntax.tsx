const SpreadsheetSyntax = () => {
  const arr1 = [0, 1, 2];
  const arr2 = [3, 4, 5];
  const arr3 = [...arr1, ...arr2];

  return (
    <div>
      {arr3.map((result) => (
        <div>{result}</div>
      ))}
    </div>
  );
};

export default SpreadsheetSyntax;
