import { config, useTransition } from 'react-spring';

export default function (condition) {
  return useTransition(condition, null, {
    config: config.wobbly,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(5)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  });
}
