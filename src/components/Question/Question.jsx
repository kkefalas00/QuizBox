import styles from "./Question.module.css";

const Question = ({ question, progress, handleAnswerClick, selectedAnswer, isAnswerCorrect }) => {
  return (
    <div className={`${styles.questionBlock} ${styles.fadeIn}`}>
      <div className={styles.progressBarContainer}>
        <div
          className={styles.progressBar}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className={styles.question}>
        <h2 className={styles.questionTitle}>{question.q}</h2>

        <ol className={styles.answersList}>
          {Object.values(question.answers).map((answer, index) => {
            let answerClass = styles.answerItem;

            if (selectedAnswer) {
              if (answer === selectedAnswer && isAnswerCorrect) {
                answerClass = `${styles.answerItem} ${styles.correct}`;
              } else if (answer === selectedAnswer && !isAnswerCorrect) {
                answerClass = `${styles.answerItem} ${styles.wrong}`;
              }
            }

            return (
              <li
                key={index}
                className={answerClass}
                onClick={() => handleAnswerClick(answer)}
              >
                {answer}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Question;
