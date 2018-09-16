import axios from 'axios';

const USER_API_BASEURL = '/users';

export function fetchUsers(page, size) {
  return axios.get(USER_API_BASEURL, {
    params: {
      page,
      size,
    }
  });
}
