import React, { useCallback } from 'react';
import { NoteType } from './ActionTypes';
import { useDispatch } from 'react-redux';
import { selectNote } from './Actions';

type ItemType = {
  item: NoteType;
  currentNote: NoteType;
};

const ItemComponent = ({ item, currentNote }: ItemType) => {
  const dispatch = useDispatch();
  const { text, created_at, title, id } = item;
  const onClickItem = useCallback(() => {
    dispatch(selectNote(item));
  }, [id]);
  const clsActive = currentNote.id === id ? 'active' : '';
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
