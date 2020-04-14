import React from 'react';
import PropTypes from 'prop-types';

import ImageContent from './ImageContent/ImageContent';
import VideoContent from './VideoContent/VideoContent';

function Question({questionType = 'TEXT', questionPath = '', questionContent = ''}) {
	return (
		<div className="flex flex-col flex-grow">
			{renderSwitch(questionType)}
		</div>
	);

	function renderSwitch(param){
		switch(param) {
		case 'IMAGE':
			return <ImageContent path={questionPath} content={questionContent}/>;
		case 'VIDEO':
			return <VideoContent path={questionPath} content={questionContent}/>;
		default:
			return (<div className="flex justify-center items-center text-center p-4 flex-grow text-xl text-question">{questionContent}</div>);
		}
	}
}

Question.propTypes = {
	questionType: PropTypes.string,
	questionPath: PropTypes.string,
	questionContent: PropTypes.string,
};

export default Question;
