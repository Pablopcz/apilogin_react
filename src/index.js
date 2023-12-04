import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/Routes';


//React DOM es la librería que se encarga de renderizar los componentes de React para el navegador.
ReactDOM.render(
  <React.StrictMode>
  <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

