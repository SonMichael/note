import React from 'react';
import './css/note.scss';
import Notes from '~src/routes/auth/note/notes/Index';
import Editor from '~src/routes/auth/note/editor/Index';

const Index = () => {
  return (
    <>
      <div className="app-wrap-note">
        <Notes />
      </div>
      <div className="app-wrap-editor">
        <Editor />
      </div>
    </>
  );
};

export default Index;
