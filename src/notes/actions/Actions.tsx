import ActionTypes, { NoteType } from './ActionTypes';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import ApiHelper from '~src/helpers/api';
import HttpHelper from '~src/helpers/http';
import DatetimeHelper from '~src/helpers/datetime';

export const selectNote = createAction(
  ActionTypes.SELECT_NOTE,
  (data: NoteType) => {
    return {
      payload: data,
    };
  },
);

type DeleteNoteResponseType =
  | {
      acknowledged: boolean;
      deletedCount: number;
    }
  | {
      error: any;
    };
export const deleteNote = createAsyncThunk(
  ActionTypes.DELETE_NOTE,
  async (id: string, { rejectWithValue }) => {
    const response = await ApiHelper.delete(`/notes/${id}`);
    const jsonData: DeleteNoteResponseType = response.data.data;
    if (HttpHelper.isFail(response.status) || 'error' in jsonData) {
      return rejectWithValue(jsonData);
    }
    return Object.assign({ _id: id }, jsonData);
  },
);

export type UpdateNoteParamsType = {
  _id: string;
  text: string;
  title: string;
  content: any;
};

type UpdateNoteResponseType =
  | NoteType
  | {
      error: any;
    };
export const updateNote = createAsyncThunk(
  ActionTypes.UPDATE_NOTE,
  async (params: UpdateNoteParamsType, { rejectWithValue }) => {
    const response = await ApiHelper.put('/notes', params);
    const jsonData: UpdateNoteResponseType = response.data.data;
    if (HttpHelper.isFail(response.status) || 'error' in jsonData) {
      return rejectWithValue(jsonData);
    }
    return formatNote(jsonData);
  },
);

type CreateNoteResponseType =
  | NoteType
  | {
      error: any;
    };

type CreateNoteParamsType = {
  text: string;
  title: string;
  content: any;
};
export const createNote = createAsyncThunk(
  ActionTypes.CREATE_NOTE,
  async (params: CreateNoteParamsType, { rejectWithValue }) => {
    const response = await ApiHelper.post('/notes', params);
    const jsonData: CreateNoteResponseType = response.data.data;
    if (HttpHelper.isFail(response.status) || 'error' in jsonData) {
      return rejectWithValue(jsonData);
    }
    return formatNote(jsonData);
  },
);

type GetNotesResponseType =
  | NoteType[]
  | {
      error: any;
    };
export const getNotes = createAsyncThunk(
  ActionTypes.GET_NOTES,
  async (_: void, { rejectWithValue }) => {
    const response = await ApiHelper.get('/notes');
    const jsonData: GetNotesResponseType = response.data.data;
    if (HttpHelper.isFail(response.status) || !Array.isArray(jsonData)) {
      return rejectWithValue(jsonData);
    }
    return formatNotes(jsonData);
  },
);

const formatNotes = (notes: NoteType[]): NoteType[] => {
  const data: NoteType[] = notes.map((item: NoteType) => {
    item = formatNote(item);
    return item;
  });
  return data;
};

const formatNote = (note: NoteType): NoteType => {
  note.created_at = DatetimeHelper.format(
    DatetimeHelper.YYYY_MM_DD,
    note.created_at,
  );
  note.updated_at = DatetimeHelper.format(
    DatetimeHelper.YYYY_MM_DD_HH_MM_SS,
    note.updated_at,
  );
  return note;
};
