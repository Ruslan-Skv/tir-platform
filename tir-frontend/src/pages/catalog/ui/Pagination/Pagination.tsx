import React, { useState } from 'react';
import styles from './Pagination.module.css';

export const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <nav className={styles.pagination} aria-label="Пагинация">
      <button
        className={styles.prevButton}
        disabled={currentPage === 1}
        onClick={handlePrev}
        aria-label="Предыдущая страница"
      >
        Назад
      </button>

      <div className={styles.pages}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            className={`${styles.pageButton} ${page === currentPage ? styles.active : ''}`}
            onClick={() => handlePageChange(page)}
            aria-label={`Страница ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className={styles.nextButton}
        disabled={currentPage === totalPages}
        onClick={handleNext}
        aria-label="Следующая страница"
      >
        Вперед
      </button>
    </nav>
  );
};
