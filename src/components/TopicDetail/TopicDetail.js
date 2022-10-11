import React from 'react';
import './TopicDetail.css';

const TopicDetail = ({tp}) => {
    const {question, correctAnswer, options} = tp
    console.log(options);
    return (
        <div className='topic-detail-section'>
            <h4>{question}</h4>
            <div className='answer-list'>
                <p>{options[0]}</p>
                <p>{options[1]}</p>
                <p>{options[2]}</p>
                <p>{options[3]}</p>
            </div>
        </div>
    );
};

export default TopicDetail;