import SideNav from './layouts/SideNav';
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
