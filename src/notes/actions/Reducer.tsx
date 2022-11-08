import { selectNote, deleteNote, createNote } from './Actions';
import { NoteType } from './ActionTypes';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  currentNote: {
    id: '1',
    text: 'this is test',
    title: 'this is title',
    created_at: '2020-11-20',
    updated_at: '2020-11-22',
  },
  notes: [
    {
      id: '1',
      text: 'this is test',
      title: 'this is title',
      created_at: '2020-11-20',
      updated_at: '2020-11-22',
    },
    {
      id: '2',
      text: 'this is test',
      title: 'this is title',
      created_at: '2020-11-21',
      updated_at: '2020-11-22',
    },
    {
      id: '3',
      text: 'this is test',
      title: 'this is title',
      created_at: '2020-11-20',
      updated_at: '2020-11-22',
    },
    {
      id: '4',
      text: 'this is test',
      title: 'this is title',
      created_at: '2020-11-20',
      updated_at: '2020-11-22',
    },
    {
      id: '5',
      text: 'this is test',
      title: 'this is title',
      created_at: '2020-11-20',
      updated_at: '2020-11-22',
    },
  ],
};

const removeNote = (id: string, notes: NoteType[]) => {
  if (notes.length === 0) {
    return [];
  }
  return notes.filter((item) => item.id !== id);
};

const addNote = (notes: NoteType[]) => {
  const note = {
    id: '6',
    text: 'place holder',
    title: 'place holder',
    created_at: '2020-11-22',
    updated_at: '2020-11-22',
  };
  const newArr = [note].concat(notes);
  return newArr;
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectNote, (state, action) => {
      state.currentNote = action.payload;
    })
    .addCase(deleteNote, (state) => {
      state.notes = removeNote(state.currentNote?.id, state.notes);
      state.currentNote = state.notes[0];
    })
    .addCase(createNote, (state) => {
      state.notes = addNote(state.notes);
      state.currentNote = state.notes[0];
    })
    .addDefaultCase((state) => state);
});

export default reducer;
