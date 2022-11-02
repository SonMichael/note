import React from 'react';
import { BsImage } from 'react-icons/bs';

const Index = ({ onChangeImage }) => {
  return (
    <div className="editor-toolbar-container">
      <label htmlFor="file">
        <BsImage className="editor-cursor" />
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
