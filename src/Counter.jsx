const Counter = () => {
  // Normal variable (will NOT trigger re-render)
  let count = 0;

  const increment = () => {
    // Updating the value of count does not update UI
    count++;
    console.log("Count:", count);
  };
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
