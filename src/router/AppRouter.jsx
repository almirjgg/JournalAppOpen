import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth';
import { JournalRoutes } from '../journal';

export const AppRouter = () => {
  return (
    <Routes>
      {/* login and register */}
      <Route path='/auth/*' element={<AuthRoutes />} />

      {/* dashboard - journal */}
      <Route path='/*' element={<JournalRoutes />} />
    </Routes>
  );
};
