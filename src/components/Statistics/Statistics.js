import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const { data } = useLoaderData();
    console.log(data);
    return (
        <div >
            <h4 className='text-center mb-5 text-secondary'>Simple Rechart Using Data from API!</h4>
            <div className='mt-5 ms-5'>
                <LineChart width={500} height={400} data={data}>
                    <Line type='monotone' dataKey='total' stroke='#82ca9d'></Line>
                    <XAxis></XAxis>
                    <YAxis dataKey="total"></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
            <div className='bg-primary mt-5'>
                <footer className='p-4 text-info'>
                    Alright reserved @2020
                </footer>
            </div>
        </div>
    );
};

export default Statistics;