import React from 'react'

const ProgressBar = ({ progressPercentage }) => {
    return (
        <div className='h-1 w-full bg-gray-300 my-3'>
            <div
                style={{ width: `${progressPercentage}%`}}
                className={`h-full ${
                    progressPercentage < - 0 ? 'bg-red-600' : 'bg-indigo-600'}`}>
            </div>
        </div>
    );
};


export default ProgressBar;