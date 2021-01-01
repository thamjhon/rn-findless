// @flow

import type {ActionDefaultProp} from '../../Types/DefaultTypes';

type State = {};

const initialState = {
    count:0,
};

export const home_store = (state = initialState, action: ActionDefaultProp) => {
  switch (action.type) {
    default:
      return {...state};
  }
};