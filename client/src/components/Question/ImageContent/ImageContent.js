import React from 'react';
import PropTypes from 'prop-types';

function ImageContent(props) {
	const {path} = props;
	return (
		<img src={path} alt=""/>
	);
}

ImageContent.propTypes = {
	path: PropTypes.string
};

export default ImageContent;
