import { selectNote } from './Actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  currentNote: {
    id: 1,
    text: 'this is test',
    title: 'this is title',
    created_at: '2020-11-20',
    updated_at: '2020-11-22',
  },
  notes: [
    {
      id: 1,
      text: 'this is test',
      title: 'this is title',
      created_at: '2020-11-20',
      updated_at: '2020-11-22',
    },
    {
      id: 2,
      text: 'this is test',
      title: 'this is title',
      created_at: '2020-11-20',
      updated_at: '2020-11-22',
    },
    {
      id: 3,
      text: 'this is test',
      title: 'this is title',
      created_at: '2020-11-20',
      updated_at: '2020-11-22',
    },
    {
      id: 4,
      text: 'this is test',
      title: 'this is title',
      created_at: '2020-11-20',
      updated_at: '2020-11-22',
    },
    {
      id: 5,
      text: 'this is test',
      title: 'this is title',
      created_at: '2020-11-20',
      updated_at: '2020-11-22',
    },
  ],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectNote, (state, action) => {
      state.currentNote = action.payload;
    })
    .addDefaultCase((state) => state);
});

export default reducer;
