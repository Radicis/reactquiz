import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import Store from './store/Store';
import SocketContainer from './containers/SocketContainer';
import ErrorContainer from './containers/ErrorContainer';
import QuizContainer from './containers/QuizContainer';
import SetupContainer from './containers/SetupContainer';
import HeaderContainer from './containers/HeaderContainer';
import LoadingContainer from './containers/LoadingContainer';
import { useTransition, animated } from 'react-spring';
import LinkModalContainer from './containers/ModalContainer';
import Divider from './components/Divider/Divider';

function App() {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.key, {
    from: { opacity: 0, height: '100%', position: 'absolute' },
    enter: { opacity: 1, height: '100%', position: 'relative' },
    leave: { opacity: 0, height: '100%', position: 'absolute' }
  });

  return (
    <Store>
      <main
        className="overflow-hidden h-full flex flex-col text-lg relative border-l-0 border-r-0 border-gray-400
      bg-gray-200 md:border-r-2 md:border-l-2 text-2xl font-semibold text-gray-800"
      >
        <Divider />
        <HeaderContainer />
        <ErrorContainer />
        <LoadingContainer />
        <LinkModalContainer />
        {transitions.map(
          ({ item, props, key }) =>
            item && (
              <animated.div key={key} style={props}>
                <Switch>
                  <Route path="/quiz">
                    <SocketContainer />
                    <QuizContainer />
                  </Route>
                  <Route path="/:quizId?">
                    <SetupContainer />
                  </Route>
                </Switch>
              </animated.div>
            )
        )}
      </main>
      <div className="absolute bottom-0 w-full z-10 right-0 mr-4 text-sm font-semibold text-right mb-1 text-gray-400">
        HawkDeluxe 2020
      </div>
    </Store>
  );
}

export default App;
