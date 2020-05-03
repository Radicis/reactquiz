import { config, useTransition } from 'react-spring';

export default function (condition) {
  return useTransition(condition, null, {
    config: config.wobbly,
    from: { opacity: 0, transform: 'scale(0)', position: 'absolute' },
    enter: { opacity: 1, transform: 'scale(1)', position: 'relative' },
    leave: { opacity: 0, transform: 'scale(0)', position: 'absolute' }
  });
}
