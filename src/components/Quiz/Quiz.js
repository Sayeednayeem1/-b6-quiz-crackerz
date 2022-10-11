import React from 'react';
import './Quiz.css';

const Quiz = ({ option, tp }) => {;
    const {correctAnswer} = tp;
    const test = ()=>{
        if(correctAnswer === option){
            alert("Your answer is correct!")
        }
        else{
            alert("Your answer is wrong! Try again! Or click on the eye icon to see the correct answer.")
        }
    }
   
    return (

        <div onClick={test} className='quiz-section'>
            <p>{option}</p>
        </div>
    );
};

export default Quiz;