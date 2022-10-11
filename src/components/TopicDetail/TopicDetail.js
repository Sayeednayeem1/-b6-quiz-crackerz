import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import Quiz from '../Quiz/Quiz';
import './TopicDetail.css';


const TopicDetail = ({ tp }) => {
    const { question, correctAnswer, options } = tp;
    // const navigate = useNavigate();
    // console.log(tp);
    const fontMeAwesome = () =>{
        alert(correctAnswer);
    }
    return (
        <div className='topic-detail-section'>
            <div className='d-flex justify-content-between align-items-center'>
                <h4 className='text-center'> {question}</h4>
                <FontAwesomeIcon onClick={fontMeAwesome} icon={faEye}></FontAwesomeIcon>
            </div>
            {/* d-flex  justify-content-between */}
            <div className='is-this-test'>  
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