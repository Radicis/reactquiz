import React from 'react';
import PropTypes from 'prop-types';

import ImageContent from './ImageContent/ImageContent';
import VideoContent from './VideoContent/VideoContent';
import { config, useSpring, animated } from 'react-spring';

function Question({ type = 'TEXT', path = '', content = '' }) {
  const props = useSpring({
    config: config.stiff,
    from: { opacity: 0, transform: 'translate3d(-1000px, 0, 0)' },
    to: { opacity: 1, transform: 'translate3d(0px, 0, 0)' }
  });

  function renderSwitch(param) {
    switch (param) {
      case 'IMAGE':
        return <ImageContent path={path} content={content} />;
      case 'VIDEO':
        return <VideoContent path={path} content={content} />;
      default:
        return (
          <div className="flex justify-center items-center text-center p-4 flex-grow text-question relative">
            {content}
          </div>
        );
    }
  }

  return (
    <animated.div style={props} className="flex flex-col flex-grow">
      {renderSwitch(type)}
    </animated.div>
  );
}

Question.propTypes = {
  type: PropTypes.string,
  path: PropTypes.string,
  content: PropTypes.string
};

export default Question;
