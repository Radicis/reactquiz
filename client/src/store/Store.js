import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';
import io from 'socket.io-client';
import { host, port, env } from '../config';

const newSocket = io(`http://${host}:${port}`);

const initialState = {
  socket: newSocket,
  loading: false,
  connected: false,
  error: '',
  players: [],
  activeQuestion: null,
  showWaiting: false,
  showPlayers: true,
  showAnswer: false,
  isComplete: true,
  isStarted: false,
  questionTime: 0,
  accentOpen: false,
  isDev: env === 'dev' // to disable testing code
};

// eslint-disable-next-line react/prop-types
const Store = ({ children }) => {
  const [state, dispatch] = useReducer(
    Reducer,
    initialState,
    (initial) => initial
  );
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
