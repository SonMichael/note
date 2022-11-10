import React, { useCallback } from 'react';
import { EditorState, RichUtils } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import 'draft-js/dist/Draft.css';
import '@draft-js-plugins/image/lib/plugin.css';
import createImagePlugin from '@draft-js-plugins/image';

type IndexType = {
  id: string;
  editorState: EditorState;
  onChange: (editState: EditorState) => void;
};
const imagePlugin = createImagePlugin();
const HEADING = 'header-one';
const Index = ({ id, editorState, onChange }: IndexType) => {
  const onChangeEditor = useCallback(
    (newState: EditorState) => {
      if (
        newState.getCurrentContent().equals(editorState.getCurrentContent())
      ) {
        return;
      }
      onChange(forceFirstLine(newState));
    },
    [id],
  );

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
    <Editor
      editorState={editorState}
      onChange={onChangeEditor}
      plugins={[imagePlugin]}
    />
  );
};

export default Index;
