import React from "react";

const FilterBtn = ({ name, index, active, current }) => {
  return (
    <div
      className={index === current ? "filter-btn" : "filter-btn-inactive"}
      onClick={() => active(index)}
    >
      {name}
    </div>
  );
};

export default FilterBtn;
