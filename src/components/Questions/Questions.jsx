import styles from "./Questions.module.css";
import { questions } from "../../questions";
import Question from '../Question/Question';
import FinishedQuiz from "../FinishedQuiz/FinishedQuiz";
import StartedButton from "../StartedButton/Startedbutton";
import Header from "../Header/Header";
import UseQuiz from "../UseQuiz/UseQuiz";
import { useEffect} from "react";

export default function Questions() {

  const {
    currentQuestion,
    setCurrentQuestion,
    progress,
    setProgress,
    isCompleted,
    setIsCompleted,
    selectedAnswer,
    setSelectedAnswer,
    isAnswerCorrect,
    setIsAnswerCorrect,
    isStarted,
    setIsStarted,
    score,
    setScore,
    timer,
    results,
    setResults
  } = UseQuiz(0);

  useEffect(() => {
    console.log("Current Question:", currentQuestion);
  }, [currentQuestion]);

  useEffect(() => {
    if (isStarted) {
      startTimer();
    }
    return () => clearInterval(timer.current);
  }, [currentQuestion, isStarted]);

  useEffect(() => {
    if (progress >= 100) {
      clearInterval(timer.current);
  
      if (currentQuestion < questions.length - 1) {
        setProgress(0);
        setTimeout(() => {
          setCurrentQuestion(prev => prev + 1);
        }, 100);
      } else {
        setIsCompleted(true);
      }
    }
  }, [progress, currentQuestion]);
  
  const findCorrectAnswer = (questionObject, clickedAnswer) => {
    if (!questionObject) return false;
  
    const correctAnswerText = questionObject.correct;
    console.log("Correct Answer Should Be:", correctAnswerText);
    console.log("User Clicked:", clickedAnswer);
  
    return correctAnswerText === clickedAnswer;
  };
  

  const handleAnswerClick = (answer) => {
    const currentQ = questions[currentQuestion];
    const isCorrect = findCorrectAnswer(currentQ, answer);

    const resultObj = {
      question : currentQ.q,
      answer : answer
    };
    setResults(prev => [...prev, resultObj]); 
    setSelectedAnswer(answer);
    setIsAnswerCorrect(isCorrect);
  
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    if (currentQuestion < questions.length - 1){
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1);
        setProgress(0);
        setSelectedAnswer(null);
        setIsAnswerCorrect(null);
      }, 1000); // 1 second delay
    }else{
      setTimeout(()=>{
        setIsCompleted(true);
      }, 1000)
    }
  };
  
  
  const startTimer = () => {
    clearInterval(timer.current);
    setProgress(0);
    timer.current = setInterval(() => {
      setProgress(prev => Math.min(prev + 2, 100));
    }, 100);
  };

  return (
    <div className={styles.questions}>
      <Header />
        {!isStarted && (<StartedButton setIsStarted={setIsStarted}/>)}
        {isStarted && (
          <div className={styles.questionWrapper}>
            {!isCompleted && (
              <Question
                question={questions[currentQuestion]}
                progress={progress}
                handleAnswerClick={handleAnswerClick}
                selectedAnswer={selectedAnswer}
                isAnswerCorrect={isAnswerCorrect}
              />
            )}

            {isCompleted && (
              <FinishedQuiz score={score} questions={questions} results={results}/>
            )}
          </div>
        )}
  </div>
  );
}
