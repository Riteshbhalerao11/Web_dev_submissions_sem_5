import { useState } from "react";
import { quiz } from "./quiz";
import "./quizpage.css";
import SideBar from "./CustomSideBar";
import { useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Quiz = () => {
  const { Id } = useParams();
  console.log(Id);
  const { currentUser } = useAuth();
  const userId = currentUser ? currentUser.uid : null;

  //   const Id = Number(quizId["id"]);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { topic } = quiz[Id];
  const { questions } = quiz[Id];
  const { question, choices, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  function StoreData() {
    const data = {
      uid: userId,
      id: Id,
      topic: topic,
      ...result,
    };
    fetch("/scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  const handleDone = () => {
    StoreData();
    setActiveQuestion(0);
    setSelectedAnswer("");
    setShowResult(false);
    setSelectedAnswerIndex(null);
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    });
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div style={{ display: "flex" }}>
      <SideBar selected={"quiz"} />
      <div className="quiz-container">
        {!showResult ? (
          <div>
            <h1>{topic}</h1>
            <div>
              <span className="active-question-no">
                {addLeadingZero(activeQuestion + 1)}
              </span>
              <span className="total-question">
                /{addLeadingZero(questions.length)}
              </span>
            </div>
            <h2>{question}</h2>
            <ul>
              {choices.map((answer, index) => (
                <li
                  onClick={() => onAnswerSelected(answer, index)}
                  key={answer}
                  className={
                    selectedAnswerIndex === index ? "selected-answer" : null
                  }
                >
                  {answer}
                </li>
              ))}
            </ul>
            <div className="flex-right">
              <button
                onClick={onClickNext}
                disabled={selectedAnswerIndex === null}
              >
                {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        ) : (
          <div className="result">
            <h3>Result</h3>
            <p>
              Total Question: <span>{questions.length}</span>
            </p>
            <p>
              Total Score:<span> {result.score}</span>
            </p>
            <p>
              Correct Answers:<span> {result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers:<span> {result.wrongAnswers}</span>
            </p>
            <button onClick={handleDone}>Done</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
