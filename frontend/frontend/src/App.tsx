import SideNav from './layouts/ClientSideNav';
import NewEnquiry from './pages/NewEnquiry';
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
