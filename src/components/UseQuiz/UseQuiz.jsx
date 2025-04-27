import { useState, useRef } from "react";

export default function UseQuiz(initialQuestionindex = 0){
    const [currentQuestion, setCurrentQuestion] = useState(initialQuestionindex);
    const [progress, setProgress] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
    const [isStarted, setIsStarted] = useState(false);
    const [score, setScore] = useState(0);
    const [results, setResults] = useState([]);
    const timer = useRef(null);

    return {
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
      };
}