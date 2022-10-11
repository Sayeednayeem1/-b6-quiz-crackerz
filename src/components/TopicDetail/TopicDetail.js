import React from 'react';
import { useNavigate } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './TopicDetail.css';

const TopicDetail = ({ tp }) => {
    const { question, id, correctAnswer, options } = tp;
    // const navigate = useNavigate();
    // console.log(correctAnswer);
    return (
        <div className='topic-detail-section'>
            <h4>{question}</h4>

            <div className='d-flex  justify-content-between'>
                {
                    options.map(option => <Quiz
                        key={option.id}
                        option={option}
                        tp={tp}
                    ></Quiz>)
                }
            </div>

            {/* <div className='answer-list d-flex justify-content-between mt-5'>
                <div onClick={test} className="ans-option border border-secondary p-2 rounded me-2">
                    <p> <input type="radio" name="" id="" /> {options[0]}</p>
                </div>
                <div onClick={test} className="ans-option border border-secondary p-2 rounded me-2">
                    <p> <input type="radio" name="" id="" /> {options[1]}</p>
                </div>
                <div onClick={test} className="ans-option border border-secondary p-2 rounded me-2">
                    <p> <input type="radio" name="" id="" /> {options[2]}</p>
                </div>
                <div onClick={test} className="ans-option border border-secondary p-2 rounded me-2">
                    <p> <input type="radio" name="" id="" /> {options[3]}</p>
                </div>
            </div> */}
        </div>
    );
};

export default TopicDetail;