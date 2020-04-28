import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';
import io from 'socket.io-client';
import { host, port, protocol } from '../config';

const playerId = localStorage.getItem('playerId');

let connString = `${protocol}://${host}:${port}`;

if (playerId) {
  connString = `${connString}?playerId=${playerId}`;
}

const newSocket = io(connString);

const initialState = {
  socket: newSocket,
  loading: false,
  connected: false,
  error: '',
  players: [],
  player: null,
  activeQuestion: null,
  showWaiting: false,
  showPlayers: true,
  isComplete: false,
  showReady: true,
  showCountDown: false
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
