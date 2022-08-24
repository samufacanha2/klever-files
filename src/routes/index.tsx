import Layout from 'components/Layout';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
