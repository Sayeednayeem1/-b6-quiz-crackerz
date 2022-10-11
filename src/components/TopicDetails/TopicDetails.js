import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicDetail from '../TopicDetail/TopicDetail';
import './TopicDetails.css';

const TopicDetails = () => {
    const topic = useLoaderData();
    // console.log(topic.data.questions);
    
    return (
        <div className='topic-details-section'>
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