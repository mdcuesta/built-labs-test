import { combineReducers } from 'redux';

import { FETCH_USERS_STARTED, FETCH_USERS_COMPLETED, EMPTY_USERS } from '../actions/users-action';
import { SET_PAGE, SET_PAGE_SIZE, INCREMENT_PAGE } from '../actions/setting-action';

function setting(state = {
  page: 1,
  size: 12
}, action) {
  if (action.type === SET_PAGE) {
    return {
      ...state, 
      page: action.page,
    };
  } else if (action.type === SET_PAGE_SIZE) {
    return {
      ...state, 
      size: action.size,
    };
  } else if (action.type === INCREMENT_PAGE) {
    return {
      ...state,
      page: state.page++,
    };
  }
  return state;
}

function users(state = [], action) {
  if (action.type === FETCH_USERS_COMPLETED) {
    if (action.append) {
      return [...state, ...action.data.users];
    } else {
      return [...action.data.users];
    }
  } else if (action.type === EMPTY_USERS) {
    return [];
  }
  return state;
}

function loadProgress(state = {
  show: false
}, action) {
  if (action.type === FETCH_USERS_STARTED) {
    return {
      ...state,
      show: true,
    };
  } else if (action.type === FETCH_USERS_COMPLETED) {
    return {
      ...state,
      show: false,
    };
  }
  return state;
}

const reducers = combineReducers({
  setting,
  users,
  loadProgress,
});

export default reducers;
