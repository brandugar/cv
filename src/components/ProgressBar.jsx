import React from 'react';

const ProgressBar = ({ progressPercentage }) => (
  <div className='h-1 w-full bg-gray-300'>
    <div
      style={{ width: `${progressPercentage}%` }}
      className={`h-full ${
        progressPercentage < 50 ? 'bg-yellow-600' : 'bg-green-600'
      }`}
    >
      {progressPercentage}%
    </div>
  </div>
);

export default ProgressBar;
