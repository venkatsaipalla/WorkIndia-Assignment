import React from "react";
import "./index.css";

export const PaginationComponent = ({
  totalPages,
  pageNumber,
  setPageNumber,
}) => {
  const MAX_PAGES_TO_SHOW = 6; // Maximum number of page numbers to show

  const decreasePageNumber = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const increasePageNumber = () => {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  // const getPageData = (e) => {
  //   setPageNumber(parseInt(e.target.id));
  // };

  const getPageNumbersToShow = () => {
    const pageNumbers = [];

    if (pageNumber <= MAX_PAGES_TO_SHOW) {
      for (let i = 1; i <= Math.min(totalPages, MAX_PAGES_TO_SHOW); i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = pageNumber - Math.floor(MAX_PAGES_TO_SHOW / 2);
      const endPage = pageNumber + Math.floor(MAX_PAGES_TO_SHOW / 2);

      for (let i = startPage; i <= Math.min(endPage, totalPages); i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages) {
        pageNumbers.push(-1); // Insert ellipsis if not ending at the last page
      }
    }

    return pageNumbers;
  };

  const pageNumberList = getPageNumbersToShow();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: "1rem",
      }}
    >
      <div className="paginationContainer">
        <button
          className="paginationIcon"
          onClick={() => setPageNumber(1)}
          disabled={pageNumber === 1}
        >
          &lt;&lt; First
        </button>
        <button
          className="paginationIcon"
          onClick={decreasePageNumber}
          disabled={pageNumber === 1}
          style={{ marginRight: "1.5rem" }}
        >
          &lt;&lt; Previous
        </button>
        {pageNumberList.map((pageNo, index) => (
          <div
            className={`paginationNumber ${
              pageNumber === pageNo ? "activePageNumber" : ""
            }`}
            onClick={() => setPageNumber(pageNo)}
            key={index}
          >
            {pageNo === -1 ? "..." : pageNo}
          </div>
        ))}
        <button
          className="paginationIcon"
          onClick={increasePageNumber}
          disabled={pageNumber === totalPages}
        >
          Next &gt;&gt;
        </button>
        <button
          className="paginationIcon"
          onClick={() => setPageNumber(totalPages)}
          disabled={pageNumber === totalPages}
        >
          Last &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default PaginationComponent;
