import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { IoCreateOutline } from 'react-icons/io5';
import {
  deleteNote,
  createNote,
} from '~src/routes/auth/note/notes/actions/Actions';
import { NOTE_DEFAULT } from '~src/routes/auth/note/notes/actions/Reducer';
import { RootStateType } from '~src/RootReducer';
import { useDispatch, useSelector } from 'react-redux';

const Index = () => {
  const dispatch = useDispatch<any>();
  const notes = useSelector((state: RootStateType) => state.notesReducer.notes);
  const currentNoteId = useSelector(
    (state: RootStateType) => state.notesReducer.currentNote?._id,
  );

  const onClickDelete = () => {
    dispatch(deleteNote(currentNoteId));
  };

  const onClickCreate = () => {
    const data = NOTE_DEFAULT;
    dispatch(createNote(data));
  };

  const clsEmpty = notes.length === 0 ? 'notes-delete-empty' : '';

  return (
    <div className="notes-toolbar-container">
      <MdDeleteOutline
        onClick={onClickDelete}
        className={`notes-cursor ${clsEmpty}`}
        aria-disabled={true}
      />
      <IoCreateOutline onClick={onClickCreate} className="notes-cursor" />
    </div>
  );
};
export default Index;
