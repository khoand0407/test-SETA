import produce from 'immer';
import { GET_CARDS_SUCCESS, POST_FORM_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  cards: [],
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_CARDS_SUCCESS:
        draft.cards = action.datas;
        break;
      case POST_FORM_SUCCESS: {
        const newCards = state.cards.slice();
        newCards.unshift(action.res);
        draft.cards = newCards;
        break;
      }
    }
  });

export default homeReducer;
