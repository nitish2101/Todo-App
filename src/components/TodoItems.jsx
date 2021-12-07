import React, { useState } from "react";
function Items(props) {
  const [lineThrough, setLineThrough] = useState(false);

  function handleClick() {
    setLineThrough((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <li
      onClick={handleClick}
      style={{
        textDecoration: lineThrough ? "line-through" : "none",
        cursor: "pointer",
      }}
    >
      {props.text}
    </li>
  );
}

export default Items;
