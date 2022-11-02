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
