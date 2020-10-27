import React from 'react';
// import Question from '../question/Question';
// import Answers from '../answers/Answers';

const QuestionCard = (props) => {;
    const questions = this.props;
    return (
        <div>
            <h1>First Question!</h1>
            <ul>
                {questions.map((index) => {
                    return (
                        <li>
                            index
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default QuestionCard;