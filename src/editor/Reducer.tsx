// reducers/todosReducers.js
import ActionTypes from './ActionTypes';

const initialState = [
  {
    text: 'Use Redux',
  },
];

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return state;

    default:
      return state;
  }
}
