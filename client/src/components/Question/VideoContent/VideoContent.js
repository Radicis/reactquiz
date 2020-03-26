import React from 'react';
import PropTypes from 'prop-types';

function VideoContent(props) {
	const {path} = props;
	return (
		<video width="100%" height="100%" controls>
			<source src={path} type="video/mp4"/>
		</video>
	);
}

VideoContent.propTypes = {
	path: PropTypes.string
};

export default VideoContent;
