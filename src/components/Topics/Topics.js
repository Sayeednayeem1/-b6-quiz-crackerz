import React from 'react';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css';

const Topics = () => {
    const topics = useLoaderData();
    console.log(topics);
    return (
        <div>
            <div className="topic-description d-flex justify-content-center mt-4">
                <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src="img/487199.png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className='topic-container mt-4'>
                {
                    topics.data.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
                    ></Topic>)
                }
            </div>

        </div>
    );
};

export default Topics;