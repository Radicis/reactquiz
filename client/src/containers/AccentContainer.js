import React, { useContext, useEffect, useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

import { Context } from '../store/Store';

function AccentContainer() {
  const getWidth = () => {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    );
  };
  const [state] = useContext(Context);
  const [topPerc, setTop] = useState(getWidth());
  const [bottomPerc, setBottom] = useState(getWidth());
  const { player } = state;

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = getWidth() > 800 ? 800 : getWidth();
      setTop(35);
      newWidth > 600 ? setBottom(20) : setBottom(25);
    };
    window.addEventListener('resize', updateWindowDimensions);

    updateWindowDimensions(); // trigger on load

    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, [topPerc, bottomPerc]);

  const topProps = useSpring({
    config: config.wobbly,
    opacity: player ? 1 : 0,
    transform: player
      ? player.isActive
        ? `translate3d(0, -${topPerc * 2}%, 0)`
        : `translate3d(0, -${topPerc}%, 0)`
      : 'translate3d(0, -5%, 0)'
  });

  const bottomProps = useSpring({
    config: config.wobbly,
    opacity: player ? 1 : 0,
    transform: player
      ? player.isActive
        ? `translate3d(0, ${bottomPerc * 3}%, 0)`
        : `translate3d(0, ${bottomPerc}%, 0)`
      : 'translate3d(0, 5%, 0)'
  });

  return (
    <React.Fragment>
      <animated.div
        className="bg-cover top z-20 top-0 left-0 absolute pointer-events-none bg-no-repeat"
        style={topProps}
      />
      <animated.div
        className="bg-cover bottom z-20 bottom-0 left-0 absolute pointer-events-none bg-no-repeat"
        style={bottomProps}
      />
    </React.Fragment>
  );
}

export default AccentContainer;
