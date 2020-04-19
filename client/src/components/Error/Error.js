import React from 'react';
import PropTypes from 'prop-types';

function Error({ error = '' }) {
  return (
    <div>
      {error ? (
        <div className="z-20 absolute top-0 left-0 w-full h-full bg-gray-100 flex items-center justify-center">
          <div className="text-2xl font-semibold text-red-800">{error}</div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

Error.propTypes = {
  error: PropTypes.string
};

export default Error;
