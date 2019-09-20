import { call, put, takeLatest } from 'redux-saga/effects';

import { loadError, load } from 'containers/App/actions';

import request from 'utils/request';

import { GET_CARDS, POST_FORM } from './constants';
import { getCardsSuccess, postFormSuccess } from './actions';

const requestURL = `https://jsonplaceholder.typicode.com/posts`;

export function* getCards() {
  try {
    yield put(load(true));
    // Call our request helper (see 'utils/request')
    const datas = yield call(request, requestURL);
    yield put(getCardsSuccess(datas.slice(0, 10)));
    yield put(load({ message: 'load list success' }));
  } catch (err) {
    yield put(loadError(err));
  }
}

export function* postForm(action) {
  try {
    yield put(load(true));
    // Call our request helper (see 'utils/request')
    const dataResponse = yield call(request, requestURL, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.data), // body data type must match "Content-Type" header
    });

    yield put(postFormSuccess(dataResponse));
    yield put(load({ message: 'create success' }));
  } catch (err) {
    yield put(loadError(err));
  }
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* cardsWatcher() {
  yield takeLatest(GET_CARDS, getCards);
  yield takeLatest(POST_FORM, postForm);
}
