import React from 'react';
import './App.scss';
import Editor from './editor/Index';
import Notes from './notes/Index';
import RootReducer from './RootReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(RootReducer, {});

function App() {
  return (
    <Provider store={store}>
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
