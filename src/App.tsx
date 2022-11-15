import React from 'react';
import './App.scss';
import Store from './RootReducer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
const Routes = React.lazy(() => import('~src/routes/Index'));

const App = () => {
  return (
    <Provider store={Store}>
      <div className="App">
        <div className="Container">
          <Router>
            <Routes />
          </Router>
        </div>
      </div>
    </Provider>
  );
};

export default App;
