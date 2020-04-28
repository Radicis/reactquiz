import React, { useContext, useEffect } from 'react';
import { Context } from '../store/Store';

function SocketContainer() {
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

    socket.on('start-quiz', (questions) => {
      console.log('Starting quiz');
      dispatch({
        type: 'START_QUIZ'
      });
      dispatch({
        type: 'SET_QUESTIONS',
        payload: questions
      });
      // Set but don't show
      dispatch({
        type: 'SET_ACTIVE_QUESTION',
        payload: questions[0]
      });
    });

    socket.on('quiz-complete', () => {
      dispatch({
        type: 'SET_QUIZ_COMPLETE'
      });
    });

    socket.on('player-complete', () => {
      dispatch({
        type: 'SET_PLAYER_COMPLETE'
      });
    });

    socket.on('init-player', (data) => {
      const { id } = data;
      dispatch({
        type: 'SET_PLAYER',
        payload: data
      });
      localStorage.setItem('playerId', id); // store the playerId for reconnects
    });

    socket.on('update-player', (data) => {
      console.log(data);
      dispatch({
        type: 'UPDATE_PLAYER',
        payload: data
      });
    });

    socket.on('set-owner', (data) => {
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
