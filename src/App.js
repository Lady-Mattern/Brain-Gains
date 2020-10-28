import React, { useEffect } from 'react';
// import quizBank from './quizBank.json';

import Layout from './components/layout/Layout';
// import QuestionCard from './components/questionCard/QuestionCard';

function App() {

  // Pulling the data from the local file stored in the public directory
  useEffect(() => {
    fetch('./quizBank.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  });

  return (
    <Layout>
      <h1>Let's Play!</h1>
      <div className="q-container">
        
      </div>
      <div className="a-container">

      </div>
    </Layout>
  );
}

export default App;
