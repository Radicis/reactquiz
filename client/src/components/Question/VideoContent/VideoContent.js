import React from 'react';
import PropTypes from 'prop-types';

function VideoContent({path, content}) {
	return (
		<React.Fragment>
			<div className="flex flex-grow justify-center items-center bg-gray-100">
				<video width="100%" height="100%" controls>
					<source src={path} type="video/mp4"/>
				</video>
			</div>
			<div className="p-4 text-center">
				{content}
			</div>
		</React.Fragment>
	);
}

VideoContent.propTypes = {
	path: PropTypes.string,
	content: PropTypes.string,
};

export default VideoContent;
