import React from 'react';

const Blog = () => {
    return (
        <div >
            <div className='blog-container ms-5 mt-4'>
                <h2 className='text-info'>Blog Section Is Here!</h2>
                <div>
                    <h3>All The Question Answers Are Given Bellow.</h3>
                    <h4>Q-1: What is the purpose of react router?</h4>
                    <p>Ans: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                    <br />
                    <h4>Q-2: How does context API works?</h4>
                    <p>Ans: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                    <br />
                    <h4>Q-3: What is useRef? Describe about useRef.</h4>
                    <p>Ans: In English
                        useRef returns a mutable ref object whose current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. In English, this means you can assign any value to current property of useRef hook and update it without causing a re-render.</p>
                </div>
            </div>
            <footer className='p-5 mt-5 bg-dark text-white d-flex justify-content-center text-align-center'><small>All right reserved@2022</small></footer>
        </div>
    );
};

export default Blog;