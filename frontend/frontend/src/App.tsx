import './App.css';
import Matter from './pages/clients/Matter';
import ClientSideNav from './layouts/client/ClientSideNav';
import StaffLogin from './layouts/staff/Staff_login';
import StaffSideNav from './layouts/staff/StaffSideNav';
import OpenEnquiries from './pages/clients/OpenEnquiries';


function App() {
  return (
    <div className="appLayout">
      <ClientSideNav />
      <OpenEnquiries />
    </div>
  );
}

export default App;
