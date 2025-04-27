import styles from "./FinishedQuiz.module.css";
import Pagination from "../Pagination/Pagination";
import FinishedHook from "./FinishedHook";

const FinishedQuiz = ({ score, questions, results }) => {
    const scoreShow = (score / questions.length) * 100;
   const {
        currentPage,
        setCurrentPage,
        questionsPerPage,
        currentResults
   } = FinishedHook(1, results);

  return (
        <div className={styles.finishedContainer}>
                <h2 className={styles.quizFinished}>🎉 Quiz Completed! Well Done! 🎉</h2>
                <span className={styles.score}>
                    Your Score: {scoreShow.toFixed(0)}%
                </span>

                <div className={styles.resultsContainer}>
                    {currentResults.map((res, index) => (
                    <div key={index} className={styles.resultItem}>
                        <h2>{res.question}</h2>
                        <span>Your Answer: {res.answer}</span>
                    </div>
                    ))}
                </div>

                <Pagination
                    questionPerPage={questionsPerPage}
                    totalQuestions={results.length}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
        </div>


  );
};

export default FinishedQuiz;
