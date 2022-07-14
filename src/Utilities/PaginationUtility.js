import React from "react";
import {
    FaAngleDoubleLeft,
    FaAngleDoubleRight,
    FaAngleLeft,
    FaAngleRight,
} from "react-icons/fa";
import "../Styles/Pagination.css";

const PaginationUtility = ({
    totalDetails,
    detailsPerPage,
    paginatePage,
    firstPage,
    prevPage,
    nextPage,
    lastPage,
}) => {
    const pageNumbers = [];
    for (
        let index = 1;
        index <= Math.ceil(totalDetails / detailsPerPage);
        index++
    ) {
        pageNumbers.push(index);
    }
    const handleClick = (number) => {
        paginatePage(number);
    };

    return (
        <div className="pagination">
            <FaAngleDoubleLeft className="firstBtn" onClick={() => firstPage()} />
            <FaAngleLeft className="firstBtn" onClick={() => prevPage()} />
            {pageNumbers.map((number, id) => (
                <button key={id} className="button" onClick={() => handleClick(number)}>
                    {number}
                </button>
            ))}
            <FaAngleRight className="firstBtn" onClick={() => nextPage()} />
            <FaAngleDoubleRight className="firstBtn" onClick={() => lastPage()} />
        </div>
    );
};

export default PaginationUtility;
