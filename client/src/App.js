import React from 'react';

import Store from './store/Store';
import SocketContainer from './containers/SocketContainer';
import ErrorContainer from './containers/ErrorContainer';
import QuizContainer from './containers/QuizContainer';
import UserSetupContainer from './containers/UserSetupContainer';
import AccentContainer from './containers/AccentContainer';
import OwnerControlsContainer from './containers/OwnerControlsContainer';
import TimerContainer from './containers/TImerContainer';

function App() {
  return (
    <Store>
      <SocketContainer />
      <header className="absolute text-2xl font-light flex-grow-0 z-10 px-4 text-gray-100 z-30">
        Quiz!
      </header>
      <main className="overflow-hidden h-full flex text-lg relative border-l-0 border-r-0 border-gray-400 bg-gray-100 md:border-r-2 md:border-l-2 p-4 text-2xl font-semibold text-gray-600">
        <ErrorContainer />
        <TimerContainer />
        <AccentContainer />
        <UserSetupContainer />
        <QuizContainer />
        <OwnerControlsContainer />
      </main>
      <div className="absolute bottom-0 w-full z-40 right-0 mr-4 text-sm font-semibold text-right mb-1 text-gray-400">
        HawkDeluxe 2020
      </div>
    </Store>
  );
}

export default App;
