import React, { useCallback } from 'react';
import { NoteType } from '../actions/ActionTypes';
import { useDispatch } from 'react-redux';
import { selectNote } from '../actions/Actions';
import { useSelector } from 'react-redux';
import { RootStateType } from '~src/RootReducer';

type ItemType = {
  item: NoteType;
};

const ItemComponent = ({ item }: ItemType) => {
  const dispatch = useDispatch();
  const currentNote = useSelector(
    (state: RootStateType) => state.notesReducer.currentNote,
  );

  const { text, created_at, title, id } = item;

  const onClickItem = useCallback(() => {
    dispatch(selectNote(item));
  }, [id]);

  const clsActive = currentNote?.id === id ? 'active' : '';
  return (
    <div
      className={`notes-items notes-cursor ${clsActive}`}
      onClick={onClickItem}
    >
      <h4 className="notes-margin-0 notes-ff">{title}</h4>
      <div className="notes-body">
        <span className="notes-margin-0">{created_at}</span>
        <span className="notes-margin-0 notes-ml-10 notes-cl-gray">{text}</span>
      </div>
    </div>
  );
};
export default ItemComponent;
