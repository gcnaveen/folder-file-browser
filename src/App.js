// src/App.js
import React from 'react';
import Folder from './components/Folder';
import fileConfig from './file-config.json';

const App = () => {
  return (
    <div className="App">
      <h1>Folder/File Browser</h1>
      <Folder name={fileConfig.name} children={fileConfig.children} />
    </div>
  );
};

export default App;
