import {
  // fork,
  // take,
  // call,
  put,
  delay,
  takeLatest,
  // takeEvery,
  // select,
} from 'redux-saga/effects';
import {
  changeLogoText
} from '../actions/appearance';
import * as appearanceActions from '../constants/appearance';
// import * as authService from '../services/auth';
// import UserServices from '../services/user';

function* changeLogoTextSaga({ payload }) {
  const { text } = payload;
  yield put(changeLogoText(text));
  yield delay(500);
}

function* rootSaga() {
  // yield takeEvery(userActions.GET_CURRENT_USER, getCurrentUserSaga);
  yield takeLatest(appearanceActions.CHANGE_LOGO_TEXT_REQUEST, changeLogoTextSaga);
  // yield takeLatest(userActions.SIGN_IN, signInSaga);
  // yield takeLatest(userActions.LOG_OUT, logOutSaga);
  // yield takeLatest(userActions.RESET_PASSWORD, resetPasswordSaga);
  // yield takeLatest(userActions.CHANGE_PASSWORD, changePasswordSaga);
}

export default rootSaga;
