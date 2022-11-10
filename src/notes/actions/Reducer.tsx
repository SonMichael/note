import {
  selectNote,
  deleteNote,
  createNote,
  updateNote,
  getNotes,
} from './Actions';
import { NoteType } from './ActionTypes';
import { createReducer } from '@reduxjs/toolkit';

export const NOTE_DEFAULT = {
  text: 'Không có thêm văn bản',
  title: 'Ghi chú mới',
  content: {},
};
type InitialStateType = {
  currentNote: NoteType;
  notes: NoteType[];
  error: any;
};
const initialState: InitialStateType = {
  currentNote: null,
  notes: [],
  error: null,
};

const removeNote = (id: string, notes: NoteType[]) => {
  if (notes.length === 0) {
    return [];
  }
  return notes.filter((item) => item._id !== id);
};

const addNote = (note: NoteType, notes: NoteType[]) => {
  const newArr = [note].concat(notes);
  return newArr;
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectNote, (state, action) => {
      state.currentNote = action.payload;
    })
    .addCase(deleteNote.fulfilled, (state, action) => {
      state.notes = removeNote(action.payload._id, state.notes);
      state.currentNote = state.notes[0];
    })
    .addCase(deleteNote.rejected, (state, action) => {
      state.error = action.error;
    })
    .addCase(updateNote.fulfilled, (state, action) => {
      const notes = removeNote(action.payload._id, state.notes);
      state.notes = addNote(action.payload, notes);
    })
    .addCase(updateNote.rejected, (state, action) => {
      state.error = action.error;
    })
    .addCase(createNote.fulfilled, (state, action) => {
      state.notes = addNote(action.payload, state.notes);
      state.currentNote = state.notes[0];
    })
    .addCase(createNote.rejected, (state, action) => {
      state.error = action.error;
    })
    .addCase(getNotes.pending, (state) => {
      state.notes = [];
    })
    .addCase(getNotes.fulfilled, (state, action) => {
      state.notes = action.payload;
      state.currentNote = state.notes[0];
    })
    .addCase(getNotes.rejected, (state, action) => {
      state.notes = [];
      state.error = action.error;
    })
    .addDefaultCase((state) => state);
});

export default reducer;
