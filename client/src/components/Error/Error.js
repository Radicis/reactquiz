import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function Error({ error, clearError }) {
  return (
    <React.Fragment>
      <div className="flex flex-grow">{error}</div>
      <div onClick={() => clearError()} className="cursor-pointer">
        <FontAwesomeIcon icon={faTimesCircle} />
      </div>
    </React.Fragment>
  );
}

Error.propTypes = {
  error: PropTypes.string,
  clearError: PropTypes.func
};

export default Error;
