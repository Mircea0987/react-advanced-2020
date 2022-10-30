import React from "react";

const ErrorExample = () => {
  let title = "Test title";
  const handleClickFunction = () => {
    title = "new title";
    console.log(title);
  };
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button type="button" className="btn" onClick={handleClickFunction}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
