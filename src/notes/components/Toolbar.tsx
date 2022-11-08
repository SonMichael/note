import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { IoCreateOutline } from 'react-icons/io5';
import { deleteNote, createNote } from '../actions/Actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from '~src/RootReducer';

const Index = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state: RootStateType) => state.notesReducer.notes);

  const onClickDelete = () => {
    dispatch(deleteNote());
  };

  const onClickCreate = () => {
    dispatch(createNote());
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
