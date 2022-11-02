import React, { useState } from 'react';
import {
  EditorState,
  AtomicBlockUtils,
  convertToRaw,
  RichUtils,
} from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import 'draft-js/dist/Draft.css';
import './EditorStyles.scss';
import '@draft-js-plugins/image/lib/plugin.css';
import createImagePlugin from '@draft-js-plugins/image';
import Toolbar from './Toolbar';

const imagePlugin = createImagePlugin();
const HEADING = 'header-one';
const SimpleImageEditor = ({}) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  const onChange = (editState) => {
    setEditorState(forceFirstLine(editState));
  };
  const forceFirstLine = (editState) => {
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

  const onChangeImage = (e) => {
    getImage(e, (result) => {
      const newEditorState = insertImage(editorState, result);
      onChange(newEditorState);
    });
  };

  const getImage = (e, cb) => {
    e.stopPropagation();
    e.preventDefault();
    if (e.target.files.length === 0) {
      return;
    }
    const file = e.target.files[0];
    getBase64(file, (result) => {
      cb(result);
    });
  };

  const getBase64 = async (file, cb) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      cb(reader.result);
    };
    reader.onerror = (error) => {
      return error;
    };
  };

  const insertImage = (editState, base64) => {
    const contentState = editState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      'image',
      'IMMUTABLE',
      { src: base64 },
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editState, {
      currentContent: contentStateWithEntity,
    });
    return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ');
  };

  return (
    <div>
      <div>
        <Toolbar onChangeImage={onChangeImage} />
      </div>
      <div>
        <Editor
          editorState={editorState}
          onChange={onChange}
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
