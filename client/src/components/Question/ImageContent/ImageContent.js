import React from 'react';
import PropTypes from 'prop-types';

function ImageContent({ path, content }) {
  return (
    <React.Fragment>
      <div className="flex flex-grow justify-center items-center bg-gray-100">
        <img className="question-image rounded-full" src={path} alt="" />
      </div>
      <div className="p-4 text-center">{content}</div>
    </React.Fragment>
  );
}

ImageContent.propTypes = {
  path: PropTypes.string,
  content: PropTypes.string
};

export default ImageContent;
