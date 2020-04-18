import React, { useContext } from 'react';

import Timer from '../components/Timer/Timer';
import { Context } from '../store/Store';

function TimerContainer() {
  const [state] = useContext(Context);
  const { questionTime } = state;
  return (
    <React.Fragment>
      {questionTime ? <Timer questionTime={questionTime} /> : ''}
    </React.Fragment>
  );
}

export default TimerContainer;
