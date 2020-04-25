import { config, useTransition } from 'react-spring';

export default function (condition) {
  return useTransition(condition, null, {
    config: config.stiff,
    from: {
      opacity: 0,
      transform: 'translate3d(0, 1000px, 0)',
      position: 'absolute'
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0, 0px, 0)',
      position: 'relative'
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(0, 1000px, 0)',
      position: 'absolute'
    }
  });
}
