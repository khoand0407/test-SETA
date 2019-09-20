import {
  GET_CARDS,
  GET_CARDS_SUCCESS,
  POST_FORM,
  POST_FORM_SUCCESS,
} from './constants';

export function getCards() {
  return {
    type: GET_CARDS,
  };
}

export function getCardsSuccess(datas) {
  return {
    type: GET_CARDS_SUCCESS,
    datas,
  };
}

/**
 * @param{data: object}
 */
export function postForm(data) {
  return {
    type: POST_FORM,
    data,
  };
}

/**
 * @param {res: object} // response after create success
 */
export function postFormSuccess(res) {
  return {
    type: POST_FORM_SUCCESS,
    res,
  };
}
