import React from "react";

const Pagination = ({ postPerPage, totalPost , paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPost / postPerPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a href="#" onClick={()=> paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
