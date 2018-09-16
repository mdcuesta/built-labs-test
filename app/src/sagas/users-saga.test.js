import { takeLatest, put, call } from 'redux-saga/effects';

import usersSaga, { fetchUsersHandler } from './users-saga';
import { FETCH_USERS, fetchUsersStarted } from '../actions/users-action';
import  { fetchUsers } from '../services/users-service';

describe('Users saga', () => {

  it('should wait for FETCH_USERS', () => {
    const saga = usersSaga();

    expect(saga.next().value).toEqual(takeLatest(FETCH_USERS, fetchUsersHandler));
  });

  it('should dispatch action FETCH_USER_STARTED', () => {
    const page = 1;
    const size = 12;
    const append = false;

    const saga = fetchUsersHandler({
      page,
      size,
      append,
    });
    
    expect(saga.next().value)
      .toEqual(put(fetchUsersStarted(page, size, append)));
  });

  it('should call fetch users api', () => {
    const page = 1;
    const size = 12;
    const append = false;

    const saga = fetchUsersHandler({
      page,
      size,
      append,
    });

    saga.next();

    expect(saga.next().value)
      .toEqual(call(fetchUsers, page, size));
  });
});
