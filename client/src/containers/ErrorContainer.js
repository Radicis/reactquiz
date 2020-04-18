import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/Store';

import Error from '../components/Error/Error';

function ErrorContainer() {
  const [state] = useContext(Context);
  const [localErr, setLocalErr] = useState(null);
  const { error } = state;

  useEffect(() => {
    if (error) {
      if (typeof error === 'string') {
        setLocalErr(error);
      } else {
        setLocalErr('UnKnown Error');
      }
    } else {
      setLocalErr(null);
    }
  }, [error]);

  return (
    <React.Fragment>
      {localErr ? <Error error={localErr} /> : ''}
    </React.Fragment>
  );
}

export default ErrorContainer;
