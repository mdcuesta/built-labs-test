export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_STARTED = 'FETCH_USERS_STARTED';
export const FETCH_USERS_COMPLETED = 'FETCH_USERS_COMPLETED';
export const EMPTY_USERS = 'EMPTY_USERS';

export const fetchUsers = (page, size, append = false) => {
  return {
    type: FETCH_USERS,
    page,
    size,
    append,
  };
};

export const fetchUsersStarted = (page, size, append = false) => {
  return {
    type: FETCH_USERS_STARTED,
    page,
    size,
    append,
  };
};

export const fetchUsersCompleted = (data, append = false) => {
  return {
    type: FETCH_USERS_COMPLETED,
    data,
    append,
  };
};

export const emptyUsers = () => {
  return {
    type: EMPTY_USERS,
  };
};
