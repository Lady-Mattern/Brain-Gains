import React from 'react';

const Answers = ({handleGuess, 
    data: {correct, incorrect}}) => {

    const reOrdered = [correct, ...incorrect].sort(() => Math.random() - 0.5);

    return (
        <div className="a-container">
            <button className="answer-btn" onClick={() => handleGuess(reOrdered[0])}>
                {reOrdered[0]}
            </button>
            <button className="answer-btn" onClick={() => handleGuess(reOrdered[1])}>
                {reOrdered[1]}
            </button>
            <button className="answer-btn" onClick={() => handleGuess(reOrdered[2])}>
                {reOrdered[2]}
            </button>
            <button className="answer-btn" onClick={() => handleGuess(reOrdered[3])}>
                {reOrdered[3]}
            </button>
        </div>
    )
    
}

export default Answers;