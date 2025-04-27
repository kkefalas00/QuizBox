import { useState } from "react";

export default function FinishedHook(setIndexCurrentpage = 1, results){
    const [currentPage, setCurrentPage] = useState(setIndexCurrentpage);
    const questionsPerPage = 5;
    const indexOfLastResult = currentPage * questionsPerPage;
    const indexOfFirstResult = indexOfLastResult - questionsPerPage;
    const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

    return {
        currentPage,
        setCurrentPage,
        questionsPerPage,
        indexOfLastResult,
        indexOfFirstResult,
        currentResults
    };
};