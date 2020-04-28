import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Store from './store/Store';
import SocketContainer from './containers/SocketContainer';
import ErrorContainer from './containers/ErrorContainer';
import QuizContainer from './containers/QuizContainer';
import UserSetupContainer from './containers/UserSetupContainer';

import { baseUrl } from './config';

function App() {
  return (
    <Store>
      <SocketContainer />
      <Router>
        <main
          className="overflow-hidden h-full flex flex-col text-lg relative border-l-0 border-r-0 border-gray-400
      bg-gray-200 md:border-r-2 md:border-l-2 text-2xl font-semibold text-gray-800"
        >
          <div className="tracking-widest flex flex-row w-full justify-center items-center absolute text-2xl font-light flex-grow-0 px-4 mt-2 text-gray-100 z-10">
            <span className="flex flex-grow">Quiz!</span>
            <span className="text-xl">{baseUrl}/test</span>
          </div>
          <ErrorContainer />
          <div className="wave" />
          <Switch>
            <Route path="/:quizId">
              <QuizContainer />
            </Route>
            <Route path="/">
              <UserSetupContainer />
            </Route>
          </Switch>
        </main>
        <div className="absolute bottom-0 w-full z-10 right-0 mr-4 text-sm font-semibold text-right mb-1 text-gray-400">
          HawkDeluxe 2020
        </div>
      </Router>
    </Store>
  );
}

export default App;
