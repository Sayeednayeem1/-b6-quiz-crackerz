import React from 'react';
import './Topic.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, total, logo } = topic;
    console.log(topic);
    
    const navigate = useNavigate();
    
    const btnHandler = ()=>{
        navigate(`/topic/${id}`);
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='bg-info' variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>Total Questions: {total}</p>
                    </Card.Text>
                    <Button onClick={btnHandler} variant="primary">Show Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Topic;