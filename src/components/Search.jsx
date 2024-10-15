import React from "react";
import searchIcon from "../assets/images/search.svg";
import dropDown from "../assets/images/drop-down.svg";

function Search() {
  const filters = ["Location", "Job Type", "Sort By Field"];
  return (
    <div className="search">
      <div className="search-box">
        <input type="text" name="search" id="search" placeholder="Search for jobs..." />
        <button type="submit">
          <img src={searchIcon} alt="search image" className="search-img"/>
          Show results
        </button>
      </div>
      <div className="filters">
        {filters.map((filter) => {
          return (
            <div className="filter-cover">
              <div key={filter.id} {...filters} className="filter-item">
                {filter}
              </div>
              <img src={dropDown} alt="drop-down" className="drop-down"/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
