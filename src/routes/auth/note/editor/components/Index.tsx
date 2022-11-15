import React, { useEffect } from 'react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import Editor from '~src/routes/auth/note/editor/components/Editor';

import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { updateNote } from '~src/routes/auth/note/notes/actions/Actions';
import { NOTE_DEFAULT } from '~src/routes/auth/note/notes/actions/Reducer';
import { NoteType } from 'src/routes/auth/note/notes/actions/ActionTypes';

type IndexType = {
  editorState: EditorState;
  currentNote: NoteType;
  onChangeEditor: (editState: EditorState) => void;
};

const Index = ({ editorState, currentNote, onChangeEditor }: IndexType) => {
  const _id = currentNote._id;
  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (!currentNote.content) {
      onChangeEditor(EditorState.createEmpty());
      return;
    }
    const content = EditorState.createWithContent(
      convertFromRaw(JSON.parse(currentNote.content)),
    );
    onChangeEditor(content);
  }, [_id]);

  const onChange = (editState: EditorState) => {
    apiCreateNote(editState);
    onChangeEditor(editState);
  };

  const apiCreateNote = debounce((editState: EditorState) => {
    const data = getDataOfCreateNote(editState);
    dispatch(updateNote(data));
  }, 100);

  const getDataOfCreateNote = (editState: EditorState) => {
    const currentContent = convertToRaw(editState.getCurrentContent());
    if (!currentContent || currentContent.blocks.length === 0) {
      return null;
    }
    const title = currentContent.blocks[0].text || NOTE_DEFAULT.title;
    const text = currentContent.blocks[1]?.text || NOTE_DEFAULT.text;
    return {
      title,
      text,
      content: JSON.stringify(currentContent),
      _id,
    };
  };

  return (
    <>
      <label className="editor-lbl-created-at">{currentNote?.updated_at}</label>
      <div className="editor-wrap-draftjs">
        <Editor id={_id} editorState={editorState} onChange={onChange} />
      </div>
    </>
  );
};

export default Index;
