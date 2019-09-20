import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectCards = () =>
  createSelector(
    selectHome,
    homeState => homeState.cards,
  );

export { selectHome, makeSelectCards };
