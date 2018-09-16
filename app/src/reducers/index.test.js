import { setting, users , loadProgress } from './index';
import { FETCH_USERS_STARTED, FETCH_USERS_COMPLETED, EMPTY_USERS } from '../actions/users-action';
import { SET_PAGE, SET_PAGE_SIZE, INCREMENT_PAGE } from '../actions/setting-action';

describe('Reducers', () => {

  describe('settings', () => {
    it('should set initial state', () => {
      expect(setting(undefined, {})).toEqual({
        page: 1,
        size: 12,
      });
    });

    it('should set page', () => {
      const page = 5;
      expect(setting({
        page: 2,
        size: 12,
      }, {
        type: SET_PAGE,
        page,
      })).toEqual({
        page,
        size: 12
      });
    });

    it('should set page size', () => {
      const size = 14;
      expect(setting({
        page: 2,
        size: 12,
      }, {
        type: SET_PAGE_SIZE,
        size,
      })).toEqual({
        page: 2,
        size,
      })
    });

    it('should increment page', () => {
      const size = 12;
      const page = 2;
      expect(setting({
        page,
        size,
      }, {
        type: INCREMENT_PAGE,
      })).toEqual({
        page: page + 1,
        size,
      });
    })
  });
  
  describe('users', () => {
    it('should set initial state', () => {
      expect(users(undefined, {})).toEqual([]);
    });

    it('should empty users', () =>{
      expect(users([{
        name: 'User 1'
      }], {
        type: EMPTY_USERS,
      })).toEqual([]);
    });

    it('should initialize users', () => {
      const data = {
        users: [{
          name: 'User 1',
        }, {
          name: 'User 2',
        }]
      };

      expect(users([], {
        type: FETCH_USERS_COMPLETED,
        data,
      })).toEqual(data.users);
    });

    it('should append users', () => {
      const initialUsers = [{
        name: 'User 1',
      }, {
        name: 'User 2',
      }];

      const data = {
        users: [{
          name: 'User 3',
        }, {
          name: 'User 4',
        }]
      };

      expect(users(initialUsers, {
        type: FETCH_USERS_COMPLETED,
        data,
        append: true,
      })).toEqual([...initialUsers, ...data.users]);
    });
  });

  describe('loadProgress', () =>{ 
    it('should set initial state', () => {
      expect(loadProgress(undefined, {})).toEqual({
        show: false,
      });
    });

    it('should show on fetch users started', () => {
      expect(loadProgress({
        show: false,
      }, {
        type: FETCH_USERS_STARTED,
      })).toEqual({
        show: true,
      });
    });

    it('should hide on fetch users completed', () => {
      expect(loadProgress({
        show: true,
      }, {
        type: FETCH_USERS_COMPLETED,
      })).toEqual({
        show: false,
      });
    });
  });
});