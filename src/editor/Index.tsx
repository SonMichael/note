import React, { useState } from 'react';
import { EditorState, convertToRaw, RichUtils } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import 'draft-js/dist/Draft.css';
import './css/EditorStyles.scss';
import '@draft-js-plugins/image/lib/plugin.css';
import createImagePlugin from '@draft-js-plugins/image';
import Toolbar from './components/Toolbar';
import { useSelector } from 'react-redux';
import { RootStateType } from '~src/RootReducer';

const imagePlugin = createImagePlugin();
const HEADING = 'header-one';
const SimpleImageEditor = ({}) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );
  const currentNote = useSelector(
    (state: RootStateType) => state.notesReducer.currentNote,
  );

  const onChangeEditor = (editState: EditorState) => {
    setEditorState(forceFirstLine(editState));
  };

  const forceFirstLine = (editState: EditorState) => {
    const currentContent = editState.getCurrentContent();
    const firstBlockKey = currentContent.getBlockMap().first().getKey();
    const currentBlockKey = editState.getSelection().getAnchorKey();
    const isFirstBlock = currentBlockKey === firstBlockKey;
    const currentBlockType = RichUtils.getCurrentBlockType(editState);
    const isHeading = currentBlockType === HEADING;
    if (isFirstBlock !== isHeading) {
      return RichUtils.toggleBlockType(editState, HEADING);
    }
    return editState;
  };

  return (
    <div className="editor-container">
      <div>
        <Toolbar onChangeEditor={onChangeEditor} editorState={editorState} />
      </div>
      <label className="editor-lbl-created-at">{currentNote?.created_at}</label>
      <div>
        <Editor
          editorState={editorState}
          onChange={onChangeEditor}
          plugins={[imagePlugin]}
        />
      </div>

      <pre>
        {JSON.stringify(
          convertToRaw(editorState.getCurrentContent()),
          null,
          '  ',
        )}
      </pre>
    </div>
  );
};

export default SimpleImageEditor;
