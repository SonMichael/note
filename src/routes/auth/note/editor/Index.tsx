import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import Editor from '~src/routes/auth/note/editor/components/Index';
import './css/EditorStyles.scss';
import Toolbar from './components/Toolbar';
import { useSelector } from 'react-redux';
import { RootStateType } from '~src/RootReducer';

const SimpleImageEditor = ({}) => {
  const currentNote = useSelector(
    (state: RootStateType) => state.notesReducer.currentNote,
  );

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  const onChangeEditor = (editState: EditorState) => {
    setEditorState(editState);
  };

  return (
    <div className="editor-container">
      <div>
        <Toolbar onChangeEditor={onChangeEditor} editorState={editorState} />
      </div>
      {currentNote && currentNote._id && (
        <Editor
          currentNote={currentNote}
          onChangeEditor={onChangeEditor}
          editorState={editorState}
        />
      )}
    </div>
  );
};

export default SimpleImageEditor;
