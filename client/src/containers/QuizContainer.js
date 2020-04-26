import React, { useContext, useEffect } from 'react';
import { Context } from '../store/Store';

import QuestionsContainer from './QuestionsContainer';
import { animated, useSpring, useTransition } from 'react-spring';
import WaitingForPlayers from '../components/WaitingForPlayers/WaitingForPlayers';
import Countdown from '../components/Countdown/Countdown';
import ControlsContainer from './ControlsContainer';
import PlayerRaceContainer from './PlayerRaceContainer';

function QuizContainer() {
  const [state] = useContext(Context);

  const {
    player,
    activeQuestion,
    showQuestion,
    showWaiting,
    showCountdown,
    isComplete,
    showPlayers
  } = state;

  const heightProps = useSpring({
    height: !showPlayers ? '70%' : '20%'
  });

  const mainTransition = useTransition(player && player.isActive, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <React.Fragment>
      {mainTransition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="flex flex-col h-full w-full justify-center items-center p-4 relative"
            >
              <animated.div
                style={heightProps}
                className="flex w-full items-center flex-col justify-center absolute top-0 mt-12 p-4 left-0"
              >
                <WaitingForPlayers completed={isComplete} show={showWaiting} />
                {activeQuestion && showQuestion ? <QuestionsContainer /> : ''}
                {showCountdown ? (
                  <Countdown time={1} show={showCountdown} />
                ) : (
                  ''
                )}
                <ControlsContainer />
              </animated.div>
              <PlayerRaceContainer />
            </animated.div>
          )
      )}
    </React.Fragment>
  );
}

export default QuizContainer;
