const SELECT_NOTE = 'notes/select_note';
const DELETE_NOTE = 'notes/delete_note';
const CREATE_NOTE = 'notes/create_note';

export type NoteType = {
  id: string;
  text: string;
  title: string;
  created_at: string;
  updated_at: string;
};

export default {
  SELECT_NOTE,
  DELETE_NOTE,
  CREATE_NOTE,
};
