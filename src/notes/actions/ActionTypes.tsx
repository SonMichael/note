const SELECT_NOTE = 'notes/select_note';
const DELETE_NOTE = 'notes/delete_note';
const CREATE_NOTE = 'notes/create_note';
const UPDATE_NOTE = 'notes/update_note';
const GET_NOTES = 'notes/get_notes';

export type NoteType = {
  _id: string;
  text: string;
  title: string;
  content: any;
  created_at: string;
  updated_at: string;
};

export default {
  SELECT_NOTE,
  DELETE_NOTE,
  CREATE_NOTE,
  UPDATE_NOTE,
  GET_NOTES,
};
