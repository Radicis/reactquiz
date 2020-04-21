import React from 'react';
import PropTypes from 'prop-types';

function Ready({ setPlayerReady = () => {} }) {
  return (
    <div
      className="rounded-full text-4xl border cursor-pointer"
      onClick={setPlayerReady}
    >
      Ready!
    </div>
  );
}

Ready.propTypes = {
  setPlayerReady: PropTypes.func
};

export default Ready;
