import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Statistics.css';

const Statistics = () => {
    const { data } = useLoaderData();
    console.log(data);
    return (
        <div>
            <h4 className='text-center mt-5 mb-5 text-secondary'>Simple Rechart Using Data from API!</h4>
            <div className=''>
                <LineChart className='mt-5 ms-5' width={500} height={400} data={data}>
                    <Line type='monotone' dataKey='total' stroke='#82ca9d'></Line>
                    <XAxis></XAxis>
                    <YAxis dataKey="total"></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
            <div className='bg-dark mt-4'>
                <footer className='p-4 text-white text-center'>
                    <small>Alright reserved @2020</small>
                </footer>
            </div>
        </div>
    );
};

export default Statistics;