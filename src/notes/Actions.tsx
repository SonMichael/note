import ActionTypes from './ActionTypes';

export function selectNote(data) {
  return {
    type: ActionTypes.SELECT_NOTE,
    data,
  };
}
