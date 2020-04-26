import React, { useContext, useEffect } from 'react';
import { Context } from '../store/Store';

import QuestionsContainer from './QuestionsContainer';
import { animated, useTransition } from 'react-spring';
import Players from '../components/Players/Players';
import WaitingForPlayers from '../components/WaitingForPlayers/WaitingForPlayers';
import Countdown from '../components/Countdown/Countdown';
import Ready from '../components/Ready/Ready';

function QuizContainer() {
  const [state, dispatch] = useContext(Context);

  const {
    socket,
    player,
    activeQuestion,
    showQuestion,
    showPlayers,
    players,
    showWaiting,
    showReady,
    showCountdown,
    isComplete
  } = state;

  const mainTransition = useTransition(player && player.isActive, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  const setPlayerReady = () => {
    socket.emit('set-player-ready');
    dispatch({
      type: 'SET_WAITING'
    });
  };

  return (
    <React.Fragment>
      {mainTransition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="flex flex-col flex-grow justify-center p-4"
            >
              <div className="flex flex-col flex-grow justify-center my-4">
                {activeQuestion && showQuestion ? <QuestionsContainer /> : ''}
                {showPlayers ? <Players players={players} /> : ''}
              </div>
              <div className="flex flex-col flex-grow justify-center my-4">
                <WaitingForPlayers completed={isComplete} show={showWaiting} />
                {showCountdown ? (
                  <Countdown time={1} show={showCountdown} />
                ) : (
                  ''
                )}
                <Ready setPlayerReady={setPlayerReady} show={showReady} />
              </div>
            </animated.div>
          )
      )}
    </React.Fragment>
  );
}

export default QuizContainer;
