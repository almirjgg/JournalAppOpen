import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loging, logout } from '../store/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config';

export const useCheckAuth = () => {
  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async user => {
      if (!user) return dispatch(logout({ errorMessage: null }));
      const { uid, email, displayName, photoURL } = user;
      dispatch(loging({ uid, email, displayName, photoURL }));
    });
  }, [status]);

  return {
    status,
  };
};
