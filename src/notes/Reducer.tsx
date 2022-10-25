import ActionTypes from './ActionTypes';

const initialState = {
  currentNote: {
    id: 1,
    text: 'this is test',
    created_at: '2020-11-20',
    updated_at: '2020-11-22',
  },
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SELECT_NOTE:
      return {
        ...state,
        currentNote: action.data,
      };
    default:
      return state;
  }
}
