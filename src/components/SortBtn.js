import React from "react";
import Filter from "../Images/filter.svg";
import Sort from "../Images/sort.svg";

const SortBtn = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="sort">
        <p>
          <img src={Filter} alt="filter" />
          Filter<span style={{ fontSize: 30, margin: "-10px 10px" }}>|</span>
          <img src={Sort} alt="filter" />
          Sort
        </p>
      </div>
    </div>
  );
};

export default SortBtn;
