/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import Sidebar from './components/Sidebar';
import Video from './components/Video';


import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Learning React Redux</h1>
        <Video />
        <Sidebar />
      </div>
    </Provider>
  );
}

export default App;
