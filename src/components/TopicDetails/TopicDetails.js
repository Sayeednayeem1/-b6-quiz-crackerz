import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicDetail from '../TopicDetail/TopicDetail';
import './TopicDetails.css';

const TopicDetails = () => {
    const topic = useLoaderData();
    console.log(topic);
    
    return (
        <div className='topic-details-section container'>
            <h4 className='text-center text-primary mt-4'>Quiz Name: {topic.data.name}</h4>
            {
                topic.data.questions.map(tp => <TopicDetail
                tp={tp}
                key={tp.id}
                ></TopicDetail>)
            }
        </div>
    );
};

export default TopicDetails;