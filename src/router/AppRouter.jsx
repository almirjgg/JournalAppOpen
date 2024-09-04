import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth';
import { JournalRoutes } from '../journal';

import { CheckInAuth } from '../ui';

import { useCheckAuth } from '../hooks/';

export const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === 'checking')
    return (
      <div>
        <CheckInAuth />
        ...
      </div>
    );
  return (
    <Routes>
      {status === 'authenticated' ? (
        <Route path='/*' element={<JournalRoutes />} />
      ) : (
        <Route path='/auth/*' element={<AuthRoutes />} />
      )}
      <Route path='/*' element={<Navigate to={'/auth/login'} />} />
      {/* login and register */}
      {/* <Route path='/auth/*' element={<AuthRoutes />} /> */}

      {/* dashboard - journal */}
      {/* <Route path='/*' element={<JournalRoutes />} /> */}
    </Routes>
  );
};
