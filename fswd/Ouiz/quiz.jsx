import React, { useState } from "react";

const OnlineQuiz = () => {
  const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyperlinks Text Markup Language",
        "Home Tool Markup Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "JQuery", "CSS", "XML"],
      answer: "CSS",
    },
    {
      question: "Which library is used to build UI in React?",
      options: ["Angular", "Vue", "React", "Bootstrap"],
      answer: "React",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Online Quiz</h1>

      <div style={styles.quizBox}>
        {showScore ? (
          <div style={styles.scoreSection}>
            <h2>Your Score</h2>
            <p>
              {score} / {questions.length}
            </p>
          </div>
        ) : (
          <>
            <h3 style={styles.question}>
              Question {currentQuestion + 1} of {questions.length}
            </h3>

            <p style={styles.questionText}>
              {questions[currentQuestion].question}
            </p>

            <div style={styles.options}>
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  style={styles.optionButton}
                  onClick={() => handleAnswerClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>

            <p style={styles.score}>Score: {score}</p>
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#121212",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "40px",
    color: "#ffffff",
  },
  title: {
    marginBottom: "20px",
    fontSize: "32px",
    color: "#ffffff",
  },
  quizBox: {
    width: "400px",
    backgroundColor: "#000000",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 6px 15px rgba(255,255,255,0.1)",
    textAlign: "center",
  },
  question: {
    marginBottom: "10px",
    color: "#ffffff",
  },
  questionText: {
    fontSize: "18px",
    marginBottom: "20px",
    color: "#ffffff",
  },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  optionButton: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #555",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
    cursor: "pointer",
    fontSize: "14px",
  },
  score: {
    marginTop: "15px",
    fontWeight: "600",
    color: "#ffffff",
  },
  scoreSection: {
    fontSize: "20px",
    color: "#ffffff",
  },
};

export default OnlineQuiz;

