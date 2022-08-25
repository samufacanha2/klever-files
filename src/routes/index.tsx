import Layout from 'components/Layout';
import Login from 'pages/Login';
import Plans from 'pages/Plans';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Files from '../pages/Files';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="" element={<Login />} />
        <Route path="" element={<Layout />}>
          <Route path="files" element={<Files />} />
          <Route path="plans" element={<Plans />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
