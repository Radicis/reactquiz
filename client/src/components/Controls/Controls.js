import React from 'react';
import PropTypes from 'prop-types';

import {
  faArrowRight,
  faCheck,
  faLink
} from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../common/CustomButton/CustomButton';

function Controls({ player, show, startQuiz, setPlayerReady, showLinkModal }) {
  return (
    <React.Fragment>
      {show ? (
        <div className="flex flex-row items-center justify-center flex-grow">
          {!player.isOwner && !player.isReady ? (
            <CustomButton
              label="Ready"
              clickAction={setPlayerReady}
              faIcon={faCheck}
            />
          ) : (
            ''
          )}
          {player.isOwner ? (
            <div className="flex flex-row justify-around flex-grow">
              <CustomButton
                label="Start"
                clickAction={startQuiz}
                faIcon={faArrowRight}
              />
              <CustomButton
                label="Link"
                clickAction={showLinkModal}
                faIcon={faLink}
              />
            </div>
          ) : (
            ''
          )}
        </div>
      ) : (
        ''
      )}
    </React.Fragment>
  );
}

Controls.propTypes = {
  player: PropTypes.object,
  startQuiz: PropTypes.func,
  setPlayerReady: PropTypes.func,
  showLinkModal: PropTypes.func,
  show: PropTypes.bool
};

export default Controls;
