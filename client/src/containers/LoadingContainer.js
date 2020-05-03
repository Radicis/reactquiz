import React, { useContext } from 'react';
import { Context } from '../store/Store';
import Loading from '../components/Loading/Loading';

function LoadingContainer() {
  const [state] = useContext(Context);
  const { loading } = state;

  return <React.Fragment>{loading ? <Loading /> : ''}</React.Fragment>;
}

export default LoadingContainer;
