import React from 'react';
import loader from '../../images/loader.svg';

function Loading() {
  return (
    <div className="z-20 text-lg absolute top-0 left-0 w-full h-full flex error-container items-center justify-center">
      <img className="z-30 h-16 absolute" src={loader} alt="Loading.." />
    </div>
  );
}

export default Loading;
