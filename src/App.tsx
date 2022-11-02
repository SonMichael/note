import React from 'react';
import './App.scss';
import Editor from './editor/Index';
import Notes from './notes/Index';
import Store from './RootReducer';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <div className="Container">
          <div className="app-wrap-note">
            <Notes />
          </div>
          <div className="app-wrap-editor">
            <Editor />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
