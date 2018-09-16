import {
  FETCH_USERS,
  fetchUsers,
  FETCH_USERS_STARTED,
  fetchUsersStarted,
  FETCH_USERS_COMPLETED,
  fetchUsersCompleted,
  EMPTY_USERS,
  emptyUsers,
} from './users-action';

describe('Users action', () => {
  it('should fetch users', () => {
    const page = 2;
    const size = 12;

    const expected = {
      type: FETCH_USERS,
      page,
      size,
      append: false,
    };

    expect(fetchUsers(page, size)).toEqual(expected);
  });

  it('should start fetch users', () => {
    const page = 2;
    const size = 12;

    const expected = {
      type: FETCH_USERS_STARTED,
      page,
      size,
      append: false,
    };

    expect(fetchUsersStarted(page, size)).toEqual(expected);
  });

  it('should complete fetch users', () => {
    const data = [{
      name: 'User 1'
    }, {
      name: 'User 2'
    }];

    const expected = {
      type: FETCH_USERS_COMPLETED,
      data,
      append: false,
    };

    expect(fetchUsersCompleted(data)).toEqual(expected);
  });

  it('should empty users', () => {
    const expected = {
      type: EMPTY_USERS,
    };

    expect(emptyUsers()).toEqual(expected);
  });
})

