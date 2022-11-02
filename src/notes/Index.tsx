import React from 'react';
import './NoteStyles.scss';
import Toolbar from './Toolbar';
import ItemComponent from './ItemComponent';
import { useSelector } from 'react-redux';
import { RootStateType } from '~src/RootReducer';

const Index = ({}) => {
  const notes = useSelector((state: RootStateType) => state.notesReducer.notes);
  const currentNote = useSelector(
    (state: RootStateType) => state.notesReducer.currentNote,
  );
  return (
    <div className="notes-wrapper">
      <div className="">
        <Toolbar />
      </div>
      <div className="notes-container">
        <div>
          {notes.map((item) => (
            <ItemComponent
              key={item.id}
              item={item}
              currentNote={currentNote}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
