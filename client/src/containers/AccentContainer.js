import React, { useContext } from 'react';
import { useSpring, animated, config } from 'react-spring';

import { Context } from '../store/Store';

function AccentContainer() {
	const [state] = useContext(Context);
	const { player } = state;

	const topProps = useSpring({
		config: config.wobbly,
		opacity: player ? 1 : 0,
		transform: player ? player.isActive ? 'translate3d(0, -70%, 0)' : 'translate3d(0, -30%, 0)' : 'translate3d(0, -5%, 0)'
	});

	const bottomProps = useSpring({
		config: config.wobbly,
		opacity: player ? 1 : 0,
		transform: player ? player.isActive ? 'translate3d(0, 70%, 0)' : 'translate3d(0, 30%, 0)' : 'translate3d(0, 5%, 0)'
	});

	return (
		<React.Fragment>
			<animated.div className="top z-20" style={topProps} />
			<animated.div className="bottom z-20" style={bottomProps} />
		</React.Fragment>
	);
}

export default AccentContainer;
