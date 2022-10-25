import React, { useCallback } from 'react';
import './NoteStyles.scss';
import Toolbar from './Toolbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectNote } from './Actions';

type ItemType = {
  item: any;
  currentNote: any;
  dispatchSelectNote: (data: any) => any;
};
const ItemComponent = ({ item, dispatchSelectNote, currentNote }: ItemType) => {
  const { text, created_at, title, id } = item;
  const onClickItem = useCallback(() => {
    dispatchSelectNote(item);
  }, [id]);
  const clsActive = currentNote.id === id ? 'active' : '';
  return (
    <div
      className={`notes-items notes-cursor ${clsActive}`}
      onClick={onClickItem}
    >
      <h4 className="notes-margin-0 notes-ff">{title}</h4>
      <div className="notes-body">
        <span className="notes-margin-0">{created_at}</span>
        <span className="notes-margin-0 notes-ml-10 notes-cl-gray">{text}</span>
      </div>
    </div>
  );
};

interface IndexInterface {
  currentNote: any;
  dispatchSelectNote: (data: any) => any;
}

const notesFake = [
  {
    id: 1,
    text: 'this is test',
    created_at: '2020-11-20',
    updated_at: '2020-11-22',
  },
  {
    id: 2,
    text: 'this is test',
    created_at: '2020-11-20',
    updated_at: '2020-11-22',
  },
  {
    id: 3,
    text: 'this is test',
    created_at: '2020-11-20',
    updated_at: '2020-11-22',
  },
  {
    id: 4,
    text: 'this is test',
    created_at: '2020-11-20',
    updated_at: '2020-11-22',
  },
  {
    id: 5,
    text: 'this is test',
    created_at: '2020-11-20',
    updated_at: '2020-11-22',
  },
];
const Index = ({ currentNote, dispatchSelectNote }: IndexInterface) => {
  return (
    <div className="notes-wrapper">
      <div className="">
        <Toolbar />
      </div>
      <div className="notes-container">
        <div>
          {notesFake.map((item) => (
            <ItemComponent
              key={item.id}
              item={item}
              currentNote={currentNote}
              dispatchSelectNote={dispatchSelectNote}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentNote: state.notes?.currentNote,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchSelectNote: bindActionCreators(selectNote, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
