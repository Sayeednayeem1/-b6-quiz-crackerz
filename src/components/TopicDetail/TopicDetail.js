import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopicDetail.css';

const TopicDetail = ({ tp }) => {
    const { question, id,  correctAnswer, options } = tp;
    const navigate = useNavigate();
    
    const btnHandler = ()=>{
        navigate(`/tp/${id}`);
        if(correctAnswer){
            
        }
    }
    return (
        <div className='topic-detail-section'>
            <h4>{question}</h4>
            <div className='answer-list d-flex justify-content-between mt-5'>
                <div onClick={btnHandler} className="border border-secondary p-2 rounded me-2">
                    <p> <input type="radio" name="" id="" /> {options[0] ? options[0] : undefined}</p>
                </div>
                <div onClick={btnHandler} className="border border-secondary p-2 rounded me-2">
                    <p> <input type="radio" name="" id="" /> {options[1] ? options[1] : undefined}</p>
                </div>
                <div onClick={btnHandler} className="border border-secondary p-2 rounded me-2">
                    <p> <input type="radio" name="" id="" /> {options[2] ? options[2] : undefined}</p>
                </div>
                <div onClick={btnHandler} className="border border-secondary p-2 rounded me-2">
                    <p> <input type="radio" name="" id="" /> {options[3] ? options[3] : undefined}</p>
                </div>
            </div>
        </div>
    );
};

export default TopicDetail;