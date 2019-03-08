import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game';


const Root = () => (
  <Game />
);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});