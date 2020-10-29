import React, { useState, useEffect } from 'react';

import Layout from './components/layout/Layout';

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, nextQuestion] = useState(0);

  // Pulling the data from the local file stored in the public directory
  useEffect(() => {
    fetch('./quizBank.json')
    .then((res) => res.json())
    .then((data) => {
      setQuestions(data);
    });
  }, []);

  const handleClick = (event) => {
    event = event.target;
    
  }

  return questions.length > 0 ? (
      <Layout>
      <h1>Let's Play!</h1>
      <div className="q-container">
        {questions[current].question}
      </div>
      <div className="a-container">
        <button className="answer-btn" onClick={handleClick()}>
          {questions[current].correct}
        </button>
        <button className="answer-btn" onClick={handleClick()}>
          {questions[current].incorrect[0]}
        </button>
        <button className="answer-btn" onClick={handleClick()}>
          {questions[current].incorrect[1]}
        </button>
        <button className="answer-btn" onClick={handleClick()}>
          {questions[current].incorrect[2]}
        </button>
      </div>
    </Layout>
    ) : (
      <p>Loading questions...</p>
    )
}

export default App;
