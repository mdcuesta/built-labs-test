import { call, put, takeLatest } from 'redux-saga/effects';
import { raiseError } from '../actions/util-action';
import { FETCH_USERS, fetchUsersStarted, fetchUsersCompleted } from '../actions/users-action';
import { fetchUsers } from '../services/users-service';

function* fetchUsersHandler(action) {
  try {
    yield put(fetchUsersStarted(action.page, action.size, action.append));

    const response = yield call(fetchUsers, action.page, action.size);
    
    if (!response.data.success) {
      yield put(raiseError(response.data.message))
    } else {
      yield put(fetchUsersCompleted(response.data, action.append));
    }
  } catch(e) {
    yield put(raiseError(e));
  }
}

function* saga() {
  yield takeLatest(FETCH_USERS, fetchUsersHandler);
}

export default saga;
