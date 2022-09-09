import React from 'react';
import { Counter } from './features/Counter';
import './App.css';

import Sidebar from './components/Sidebar';
import Depbar from './components/Depbar';
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
      
    <Depbar />

    <Sidebar />

    <Chat />

    </div>
  );
}

export default App;
