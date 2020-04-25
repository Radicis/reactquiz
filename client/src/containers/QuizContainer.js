import React, { useContext, useEffect } from 'react';
import { Context } from '../store/Store';

import QuestionContainer from './QuestionContainer';
import AnswerContainer from './AnswerContainer';
import { animated, useTransition } from 'react-spring';
import Players from '../components/Players/Players';

function QuizContainer() {
  const [state] = useContext(Context);

  const { player, players, showPlayers } = state;

  const mainTransition = useTransition(player && player.isActive, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  useEffect(() => {
    console.log('players');
  }, []);

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
                <QuestionContainer />
                <Players players={players} showPlayers={showPlayers} />
              </div>
              <div className="flex flex-1 justify-center items-center mb-2">
                <AnswerContainer />
              </div>
            </animated.div>
          )
      )}
    </React.Fragment>
  );
}

export default QuizContainer;
