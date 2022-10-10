import React from 'react';
import './Topic.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Topic = ({ topic }) => {
    const { name, logo } = topic;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>test</p>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Topic;