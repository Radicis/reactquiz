import { baseUrl } from '../config';
import React, { useContext } from 'react';
import { Context } from '../store/Store';

function HeaderContainer() {
  const [state] = useContext(Context);
  const { quizId } = state;
  return (
    <div className="tracking-widest flex flex-row w-full justify-center items-center absolute text-2xl font-light flex-grow-0 px-4 mt-2 text-gray-100 z-10">
      <span className="flex flex-grow">Quiz!</span>
      {quizId ? (
        <span className="text-xl">
          {baseUrl}/{quizId}
        </span>
      ) : (
        ''
      )}
    </div>
  );
}

export default HeaderContainer;
