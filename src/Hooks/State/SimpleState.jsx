function SimpleState() {
  let clicked = 0;
  const increment = () => {
    console.log(clicked);
    clicked = clicked + 1; //In clicked++
  };

  return (
    <div>
      <div>
        <button onClick={increment}>Click Me</button>
      </div>
      <h3>Clicked {clicked}</h3>
    </div>
  );
}

export default SimpleState;
