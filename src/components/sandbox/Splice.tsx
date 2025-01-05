const Splice = () => {
  const items = ["item1", "item2", "item3"];
  const remove = items.splice(0, 1);
  console.log(items); // ["item2","item3"]
  console.log(remove); // ["item1"]
  items.splice(1, 0, remove[0]); // ["item2", "item1" , "item3"]

  return (
    <div>
      <h1>slice</h1>
      {items.map((result, index) => (
        <div key={index}>{result}</div>
      ))}
    </div>
  );
};

export default Splice;
