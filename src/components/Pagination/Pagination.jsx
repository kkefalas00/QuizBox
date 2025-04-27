import styles from "./Pagination.module.css";

const Pagination = ({ questionPerPage, totalQuestions, setCurrentPage, currentPage }) => {
  const pageNumbers = [];

  const totalPages = Math.ceil(totalQuestions / questionPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <nav className={styles.pagination}>
      <ul>
        {/* Prev Button */}
        <li
          onClick={goToPreviousPage}
          className={`${styles.pageItem} ${currentPage === 1 ? styles.disabled : ""}`}
        >
          « Prev
        </li>

        {/* Page Numbers */}
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`${styles.pageItem} ${currentPage === number ? styles.active : ""}`}
          >
            {number}
          </li>
        ))}

        {/* Next Button */}
        <li
          onClick={goToNextPage}
          className={`${styles.pageItem} ${currentPage === totalPages ? styles.disabled : ""}`}
        >
          Next »
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
