import React from 'react';
import { BsImage } from 'react-icons/bs';
import { EditorState, AtomicBlockUtils } from 'draft-js';
import { logout } from '~src/routes/login/actions/Actions';
import RoutesHelper from '~src/helpers/routes';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

type IndexType = {
  onChangeEditor: (editState: EditorState) => void;
  editorState: EditorState;
};
const Index = ({ editorState, onChangeEditor }: IndexType) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeImage = (e) => {
    getImage(e, (result) => {
      const newEditorState = insertImage(editorState, result);
      onChangeEditor(newEditorState);
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

  const onClickLogout = () => {
    dispatch(logout());
    navigate(RoutesHelper.getLoginRoute());
  };

  return (
    <div className="editor-toolbar-container">
      <div>
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
      <button onClick={onClickLogout} className="btn-logout">
        Logout
      </button>
    </div>
  );
};
export default Index;
