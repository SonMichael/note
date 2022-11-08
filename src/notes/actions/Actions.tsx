import ActionTypes, { NoteType } from './ActionTypes';
import { createAction } from '@reduxjs/toolkit';

export const selectNote = createAction(
  ActionTypes.SELECT_NOTE,
  (data: NoteType) => {
    return {
      payload: data,
    };
  },
);

export const deleteNote = createAction(ActionTypes.DELETE_NOTE, () => {
  return {
    payload: {},
  };
});

export const createNote = createAction(ActionTypes.CREATE_NOTE, () => {
  return {
    payload: {},
  };
});
