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

    socket.on('start-quiz', (data) => {
      console.log('Starting quiz');
      dispatch({
        type: 'START_QUIZ'
      });
      // Set but don't show
      dispatch({
        type: 'SET_ACTIVE_QUESTION',
        payload: data
      });
    });

    socket.on('next-question', (data) => {
      dispatch({
        type: 'SET_AND_SHOW_ACTIVE_QUESTION',
        payload: data
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
      dispatch({
        type: 'SET_PLAYER',
        payload: data
      });
    });

    socket.on('update-player', (data) => {
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
