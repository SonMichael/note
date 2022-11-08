import React from 'react';
import './css/NoteStyles.scss';
import Toolbar from './components/Toolbar';
import ItemComponent from './components/ItemComponent';
import { useSelector } from 'react-redux';
import { RootStateType } from '~src/RootReducer';

const Index = ({}) => {
  const notes = useSelector((state: RootStateType) => state.notesReducer.notes);

  return (
    <div className="notes-wrapper">
      <div className="">
        <Toolbar />
      </div>
      <div className="notes-container">
        <div>
          {notes.map((item) => (
            <ItemComponent key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
