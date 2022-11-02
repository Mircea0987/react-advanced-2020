import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setLoading] = useState(true);
  const [original, setOriginal] = useState(false);
  const handleClick = () => {
    setLoading(false);
    setOriginal(true);
  };
  if (isLoading) {
    return (
      <>
        <h1>Is loading.....</h1>
        <button onClick={handleClick}>Go to Origianl state</button>
      </>
    );
  }
  const goToLoading = () => {
    setOriginal(false);
    setLoading(true);
  };
  if (original) {
    return (
      <>
        <h1>Original State</h1>
        <button onClick={goToLoading}>Go to loading state</button>
      </>
    );
  }
};

export default MultipleReturns;
