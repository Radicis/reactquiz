import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';
import { host, protocol, socketPort } from '../config';
import io from 'socket.io-client';

let connString = `${protocol}://${host}:${socketPort}`;

const playerId = localStorage.getItem('playerId');

console.log(`Found stored playerID ${playerId}`);

if (playerId) {
  connString = `${connString}?playerId=${playerId}`;
}

console.log(connString);

const newSocket = io(connString);

const initialState = {
  socket: newSocket,
  loading: false,
  connected: false,
  error: null,
  players: [],
  player: null,
  activeQuestion: null,
  showWaiting: false,
  showPlayers: true,
  isComplete: false,
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
