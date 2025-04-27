import styles from "./Startedbutton.module.css";

export default function StartedButton({setIsStarted}){
    return (
        <button
            className={styles.startButton}
            onClick={() => setIsStarted(true)}
        >
            Start Quiz
        </button>
    );
}