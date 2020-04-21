import React, { useContext, useEffect } from 'react';
import { Context } from '../store/Store';

function SocketContainer() {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(Context);

  const { socket } = state;

  useEffect(() => {
    socket.on('connect', () => {
      dispatch({
        type: 'SET_CONNECTED'
      });
    });

    socket.on('connect_timeout', () => {
      dispatch({
        type: 'SET_ERROR',
        payload: 'Connection Timeout'
      });
    });

    socket.on('connect_error', () => {
      dispatch({
        type: 'SET_ERROR',
        payload: 'Connection Error'
      });
    });

    socket.on('error', (err) => {
      dispatch({
        type: 'SET_ERROR',
        payload: err
      });
    });

    socket.on('start-quiz', (data) => {
      dispatch({
        type: 'START_QUIZ'
      });
      dispatch({
        type: 'SET_ACTIVE_QUESTION',
        payload: data
      });
    });

    socket.on('next-question', (data) => {
      dispatch({
        type: 'SET_ACTIVE_QUESTION',
        payload: data
      });
    });

    socket.on('quiz-complete', () => {
      dispatch({
        type: 'SET_QUIZ_COMPLETE'
      });
    });

    socket.on('init-player', (player) => {
      dispatch({
        type: 'SET_PLAYER',
        payload: player
      });
    });

    socket.on('update-player', (data) => {
      dispatch({
        type: 'UPDATE_PLAYER',
        payload: data
      });
    });

    socket.on('players', (data) => {
      dispatch({
        type: 'SET_PLAYERS',
        payload: data
      });
    });
  }, [dispatch, socket]); // Pass in array here to prevent re-render
  return <div />;
}

export default SocketContainer;
