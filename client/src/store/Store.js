import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';
import io from 'socket.io-client';
import { host, port } from '../config';

const newSocket = io(`http://${host}:${port}`);

const initialState = {
  socket: newSocket,
  loading: false,
  connected: false,
  error: '',
  players: [],
  player: {},
  activeQuestion: null,
  showWaiting: false,
  showPlayers: true,
  showAnswer: false,
  isComplete: true,
  isStarted: false,
  accentOpen: false
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
