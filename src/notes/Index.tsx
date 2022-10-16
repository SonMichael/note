import React from 'react';
import './NoteStyles.scss';
import Toolbar from './Toolbar';

const Item = () => {
  return (
    <div className="notes-items notes-cursor">
      <h4 className="notes-margin-0 notes-ff">Test</h4>
      <div className="notes-body">
        <span className="notes-margin-0">16:48</span>
        <span className="notes-margin-0 notes-ml-10 notes-cl-gray">
          this is test
        </span>
      </div>
    </div>
  );
};
const Index = () => {
  return (
    <div className="notes-wrapper">
      <div className="">
        <Toolbar />
      </div>
      <div className="notes-container">
        <div>
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
};
export default Index;
