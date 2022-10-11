
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css';

const Topics = () => {
    const topics = useLoaderData();
    return (
        <div>
            <div className='header-under-header d-flex justify-content-center align-items-center'>  
                <img className='me-4' src="img/img1.jpg" alt="" />
                <div>
                    <h1 className='text-center'>Master Minds Playground</h1>
                    <p>This is a simple quiz page about React, Javascript, css and Git.</p>
                    <p>Test your knowledge by answering the question.</p>
                </div>
            </div>
            <div className='topic-container mt-4'>
                {
                    topics.data.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>
            <div className='bg-dark mt-5'>
                <footer className='text-white text-center p-4'>
                    <small>Alright reserved @2022</small>
                </footer>
            </div>

        </div>
    );
};

export default Topics;