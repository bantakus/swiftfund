import React from 'react'

const ProgressBar = ({ progressPercentage }) => {
    return (
        <div className='h-1 w-full bg-gray-300 my-3 flex items-center py-1'>
            <div
                style={{ width: `${progressPercentage}%`}}
                className={`h-full py-1 ${
                    progressPercentage < - 0 ? 'bg-red-600' : 'bg-sky-600'}`}>
            </div>
        </div>
    );
};


export default ProgressBar;