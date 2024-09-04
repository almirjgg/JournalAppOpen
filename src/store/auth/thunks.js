import {
  singInWithGoogle,
  registerUserWithEmailAndPassword,
  loginWithEmailPassword,
  logoutFirebase,
} from '../../firebase/providers';
import { checkingCredentials, logout, loging } from './';

export const checkingAuthentication = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch, getState) => {
    dispatch(checkingCredentials());
    const r = await singInWithGoogle();
    if (!r.ok) return dispatch(logout(r));

    dispatch(loging(r));
  };
};

export const startCreatingUserWithEmailAndPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch, getState) => {
    dispatch(checkingCredentials());

    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailAndPassword({
        email,
        password,
        displayName,
      });
    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(loging({ uid, email, displayName, photoURL }));
  };
};

export const startLoginWithEmailAndPassword = ({ email, password }) => {
  return async (dispatch, getState) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, displayName, errorMessage } =
      await loginWithEmailPassword({ email, password });
    if (!ok) return dispatch(logout({ errorMessage }));
    dispatch(loging({ uid, email, displayName, photoURL }));
  };
};

export const startLougout = () => {
  return async (dispatch, getState) => {
    await logoutFirebase();
    dispatch(logout({}));
  };
};
