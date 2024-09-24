import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  // Reasoning and Aptitude questions array
  const questions = [
    {
      questionText: "If A is the brother of B and B is the brother of C, how is C related to A?",
      answerOptions: [
        { answerText: 'Brother', isCorrect: true },
        { answerText: 'Sister', isCorrect: false },
        { answerText: 'Cousin', isCorrect: false },
        { answerText: 'Uncle', isCorrect: false },
      ],
    },
    {
      questionText: "In a code language, if 'DOG' is written as 'EPH', how would 'CAT' be written?",
      answerOptions: [
        { answerText: 'DBU', isCorrect: true },
        { answerText: 'DCV', isCorrect: false },
        { answerText: 'EFX', isCorrect: false },
        { answerText: 'DAT', isCorrect: false },
      ],
    },
    {
      questionText: "A clock shows the time as 3:00. If the minute hand gains 2 minutes every hour, what is the correct time after 6 hours?",
      answerOptions: [
        { answerText: '8:12', isCorrect: false },
        { answerText: '8:00', isCorrect: true },
        { answerText: '9:00', isCorrect: false },
        { answerText: '7:48', isCorrect: false },
      ],
    },
    {
      questionText: "Find the odd one out: 2, 4, 8, 16, 32, 64, 100",
      answerOptions: [
        { answerText: '32', isCorrect: false },
        { answerText: '16', isCorrect: false },
        { answerText: '100', isCorrect: true },
        { answerText: '64', isCorrect: false },
      ],
    },
    {
      questionText: "A train running at 60 km/hr crosses a man standing on the platform in 10 seconds. What is the length of the train?",
      answerOptions: [
        { answerText: '166.67 meters', isCorrect: true },
        { answerText: '120 meters', isCorrect: false },
        { answerText: '600 meters', isCorrect: false },
        { answerText: '60 meters', isCorrect: false },
      ],
    },
    {
      questionText: "In a certain code language, 'TEACHER' is written as 'VGCEJGT'. How will 'STUDENT' be written?",
      answerOptions: [
        { answerText: 'UVWFPGV', isCorrect: true },
        { answerText: 'TQWFOVU', isCorrect: false },
        { answerText: 'RQYVMTQ', isCorrect: false },
        { answerText: 'XWZGHUV', isCorrect: false },
      ],
    },
    {
      questionText: "Ravi is twice as old as his brother Ramesh. Five years ago, Ravi was three times as old as Ramesh. What is the present age of Ramesh?",
      answerOptions: [
        { answerText: '10 years', isCorrect: true },
        { answerText: '5 years', isCorrect: false },
        { answerText: '15 years', isCorrect: false },
        { answerText: '20 years', isCorrect: false },
      ],
    },
    {
      questionText: "A sum of money becomes double itself at 5% per annum simple interest in how many years?",
      answerOptions: [
        { answerText: '20 years', isCorrect: false },
        { answerText: '15 years', isCorrect: false },
        { answerText: '30 years', isCorrect: true },
        { answerText: '25 years', isCorrect: false },
      ],
    },
    {
      questionText: "If the perimeter of a square is 40 cm, what is the area?",
      answerOptions: [
        { answerText: '100 cm²', isCorrect: true },
        { answerText: '200 cm²', isCorrect: false },
        { answerText: '400 cm²', isCorrect: false },
        { answerText: '50 cm²', isCorrect: false },
      ],
    },
    {
      questionText: "The average of 5 consecutive odd numbers is 35. What is the largest number?",
      answerOptions: [
        { answerText: '39', isCorrect: true },
        { answerText: '37', isCorrect: false },
        { answerText: '41', isCorrect: false },
        { answerText: '43', isCorrect: false },
      ],
    },
    {
      questionText: "What is the smallest number that is divisible by 12, 15, and 20?",
      answerOptions: [
        { answerText: '60', isCorrect: false },
        { answerText: '120', isCorrect: true },
        { answerText: '180', isCorrect: false },
        { answerText: '240', isCorrect: false },
      ],
    },
    {
      questionText: "If the radius of a circle is 7 cm, what is the circumference?",
      answerOptions: [
        { answerText: '44 cm', isCorrect: false },
        { answerText: '22 cm', isCorrect: false },
        { answerText: '14 cm', isCorrect: false },
        { answerText: '44π cm', isCorrect: true },
      ],
    },
    {
      questionText: "If 12 men can build a wall in 30 days, how many men are required to build it in 15 days?",
      answerOptions: [
        { answerText: '24 men', isCorrect: true },
        { answerText: '15 men', isCorrect: false },
        { answerText: '20 men', isCorrect: false },
        { answerText: '18 men', isCorrect: false },
      ],
    },
    {
      questionText: "A bag contains 5 red, 3 blue, and 2 green balls. If one ball is drawn randomly, what is the probability that it is blue?",
      answerOptions: [
        { answerText: '1/3', isCorrect: true },
        { answerText: '1/2', isCorrect: false },
        { answerText: '1/5', isCorrect: false },
        { answerText: '1/4', isCorrect: false },
      ],
    },
    {
      questionText: "A man walked 5 km towards the north, then 10 km towards the east. How far is he from the starting point?",
      answerOptions: [
        { answerText: '5 km', isCorrect: false },
        { answerText: '10 km', isCorrect: false },
        { answerText: '15 km', isCorrect: false },
        { answerText: '11.18 km', isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timer, setTimer] = useState(null);

  // Function to handle answer click
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      resetTimer(); // Reset timer for the next question
    } else {
      setShowScore(true);
      clearInterval(timer); // Stop the timer when quiz is finished
    }
  };

  // Timer function
  useEffect(() => {
    if (timeLeft === 0) {
      handleAnswerOptionClick(false); // Auto move to next question if time runs out
    } else {
      const interval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
      setTimer(interval);
      return () => clearInterval(interval);
    }
  }, [timeLeft]);

  // Reset timer for each question
  const resetTimer = () => {
    setTimeLeft(30);
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <div className="prize-bar">
            {score === questions.length
              ? "Congratulations! You've won the grand prize!"
              : "Better luck next time!"}
          </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="timer-section">
            Time Left: {timeLeft} seconds
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
