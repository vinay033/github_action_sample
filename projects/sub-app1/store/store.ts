import { createStore } from 'redux';
const initialState = {};

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };

    default:
      return state;
  }
}
export const store = createStore(reducer);