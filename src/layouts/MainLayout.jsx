import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <header>Badminton Fixture App</header>
      <main>
        <Outlet />
      </main>
      <footer>© 2025 Badminton Fixture App</footer>
    </div>
  );
};

export default MainLayout;
