const SELECT_NOTE = 'notes/select_note';
export type NoteType = {
  id: number;
  text: string;
  title: string;
  created_at: string;
  updated_at: string;
};
export default {
  SELECT_NOTE,
};
