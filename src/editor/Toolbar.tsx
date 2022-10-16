import React from 'react';
import { AiFillFileImage } from 'react-icons/ai';

const Index = ({ onChangeImage }) => {
  return (
    <div className="editor-toolbar-container">
      <label htmlFor="file">
        <AiFillFileImage className="editor-cursor" />
      </label>
      <input
        onChange={onChangeImage}
        type="file"
        id="file"
        style={{ display: 'none' }}
      />
    </div>
  );
};
export default Index;
