import Layout from 'components/Layout';
import Login from 'pages/Login';
import Plans from 'pages/Plans';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import List from '../pages/List';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/list" element={<List />} />
          <Route path="/plans" element={<Plans />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
