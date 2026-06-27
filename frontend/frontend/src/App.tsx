import SideNav from './layouts/client/ClientSideNav';
import NewEnquiry from './pages/clients/NewEnquiry';
import './App.css';

function App() {
  return (
    <div className="appLayout">
      <SideNav />
      <NewEnquiry />
    </div>
  );
}

export default App;
