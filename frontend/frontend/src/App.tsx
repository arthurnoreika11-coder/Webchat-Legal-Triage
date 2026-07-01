import './App.css';
import Matter from './pages/clients/Matter';
import ClientSideNav from './layouts/client/ClientSideNav';
import StaffLogin from './layouts/staff/Staff_login';
import StaffSideNav from './layouts/staff/StaffSideNav';

function App() {
  return (
    <div className="appLayout">
      <StaffSideNav />
      <Matter />
    </div>
  );
}

export default App;
