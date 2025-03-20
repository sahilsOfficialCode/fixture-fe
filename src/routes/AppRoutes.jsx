import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage';
import FixturePage from '../pages/FixturePage';
import MainLayout from '../layouts/MainLayout';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/users/add-user" element={<UserPage />} />
        <Route path="/fixtures" element={<FixturePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
