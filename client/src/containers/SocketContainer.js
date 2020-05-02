import React, { useContext, useEffect } from 'react';
import { Context } from '../store/Store';

function SocketContainer() {
  const [state, dispatch] = useContext(Context);

  const { socket } = state;

  const initSocket = () => {
    socket.on('connect', () => {
      console.log('Socket Connected');
      dispatch({
        type: 'RESET'
      });
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

    socket.on('join-quiz', (player) => {
      const { id: playerId } = player;
      localStorage.setItem('playerId', playerId); // store the playerId for reconnects
      dispatch({
        type: 'SET_JOINED',
        payload: player
      });
    });

    socket.on('start-quiz', (questions) => {
      dispatch({
        type: 'SET_QUESTIONS',
        payload: questions
      });
      // Set but don't show
      dispatch({
        type: 'SET_ACTIVE_QUESTION',
        payload: questions[0]
      });
      dispatch({
        type: 'START_QUIZ'
      });
    });

    socket.on('quiz-complete', (players) => {
      console.log(players);
      dispatch({
        type: 'SET_QUIZ_COMPLETE',
        payload: players
      });
    });

    socket.on('player-complete', () => {
      dispatch({
        type: 'SET_PLAYER_COMPLETE'
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
  };

  useEffect(() => {
    initSocket();
  }, [dispatch]); // Pass in array here to prevent re-render
  return <div />;
}

export default SocketContainer;
