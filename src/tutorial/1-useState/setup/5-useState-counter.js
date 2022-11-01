import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    const newValue = value + 1;
    setValue(newValue);
    if (value == 5) {
      alert("cant go to 6 .... reseting");
      setValue(0);
    }
  };
  const handleReset = () => {
    setValue(0);
  };
  const handleDescrese = () => {
    const newValue = value - 1;
    setValue(newValue);
  };
  const complexIncrese = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prev) => {
        return prev + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={handleIncrement}>
          Increment by 1
        </button>
        <button className="btn" onClick={handleReset}>
          reset
        </button>
        <button className="btn" onClick={handleDescrese}>
          Descrese by 1
        </button>
      </section>

      <section>
        <h2>complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrese}>
          Increse Button
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
