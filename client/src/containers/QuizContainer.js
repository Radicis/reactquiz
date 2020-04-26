import React, { useContext } from 'react';
import { Context } from '../store/Store';

import QuestionsContainer from './QuestionsContainer';
import { animated, useSpring, useTransition } from 'react-spring';
import Countdown from '../components/Countdown/Countdown';
import PlayerRaceContainer from './PlayerRaceContainer';
import StatusContainer from './StatusContainer';

function QuizContainer() {
  const [state] = useContext(Context);

  const {
    player,
    activeQuestion,
    showQuestion,
    showCountdown,
    showPlayers
  } = state;

  const heightProps = useSpring({
    height: !showPlayers ? '80%' : '20%',
    zIndex: 1 // hack to prevent the after from becoming invisible
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
              className="flex flex-col h-full w-full relative mt-12"
            >
              <animated.div
                style={heightProps}
                className="flex w-full flex-col justify-center top-0 p-4 left-0"
              >
                {activeQuestion && showQuestion ? (
                  <QuestionsContainer />
                ) : !showCountdown ? (
                  <StatusContainer />
                ) : (
                  ''
                )}
                {showCountdown ? (
                  <Countdown time={1} show={showCountdown} />
                ) : (
                  ''
                )}
              </animated.div>
              <PlayerRaceContainer />
            </animated.div>
          )
      )}
    </React.Fragment>
  );
}

export default QuizContainer;
