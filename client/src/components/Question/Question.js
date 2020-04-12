import React from 'react';
import PropTypes from 'prop-types';

import ImageContent from './ImageContent/ImageContent';
import VideoContent from './VideoContent/VideoContent';

function Question({questionType = 'TEXT', questionPath = '', questionContent = ''}) {
	return (
		<div className="flex flex-col">
			{questionType === 'IMAGE' ? <ImageContent path={questionPath}/> : ''}
			{questionType === 'VIDEO' ? <VideoContent path={questionPath}/> : ''}
			<div className="mb-4">{questionContent}</div>
		</div>
	);
}

Question.propTypes = {
	questionType: PropTypes.string,
	questionPath: PropTypes.string,
	questionContent: PropTypes.string,
};

export default Question;
