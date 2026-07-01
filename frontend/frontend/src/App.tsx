import SideNav from './layouts/client/ClientSideNav';
import './App.css';
import Matter from './pages/clients/Matter';
import StaffSideNav from './layouts/staff/StaffSideNav';
import ClientSideNav from './layouts/client/ClientSideNav';
import OpenEnquiries from './pages/clients/OpenEnquiries';
import StaffLogin from './layouts/staff/Staff_login';
import NewEnquiry from './pages/clients/NewEnquiry';

function App() {
  return (
    <div className="appLayout">
      <StaffSideNav />
      <NewEnquiry />
      </div>
  );
}

export default App;
