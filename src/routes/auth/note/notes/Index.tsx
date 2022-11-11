import React, { useEffect } from 'react';
import './css/NoteStyles.scss';
import Toolbar from './components/Toolbar';
import ItemComponent from './components/ItemComponent';
import { useSelector } from 'react-redux';
import { RootStateType } from '~src/RootReducer';
import { getNotes } from '~src/routes/auth/note/notes/actions/Actions';
import { useDispatch } from 'react-redux';

const Index = ({}) => {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(getNotes());
  }, []);
  const notes = useSelector((state: RootStateType) => state.notesReducer.notes);

  return (
    <div className="notes-wrapper">
      <div className="">
        <Toolbar />
      </div>
      <div className="notes-container">
        <div>
          {notes.map((item) => (
            <ItemComponent key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
