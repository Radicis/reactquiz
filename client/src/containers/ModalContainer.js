import React, { useContext } from 'react';
import { Context } from '../store/Store';
import LinkModal from '../components/LinkModal/LinkModal';
import { animated, useTransition } from 'react-spring';
import { baseUrl, clientPort } from '../config';

function LinkModalContainer() {
  const [state, dispatch] = useContext(Context);
  const { showLinkModal, quizId } = state;

  const transition = useTransition(showLinkModal, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  const hide = () => {
    dispatch({
      type: 'SHOW_LINK_MODAL',
      payload: false
    });
  };

  return (
    <React.Fragment>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="z-20 modal px-6 py-4 text-lg absolute w-full h-full top-0 left-0 w-full flex items-center justify-center shadow-2xl"
            >
              <LinkModal
                hide={hide}
                url={`${baseUrl}${clientPort ? `:${clientPort}` : ''}/${quizId}`}
              />
            </animated.div>
          )
      )}
    </React.Fragment>
  );
}

export default LinkModalContainer;
