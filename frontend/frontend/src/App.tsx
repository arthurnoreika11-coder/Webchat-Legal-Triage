import { useState } from 'react';
import './App.css';
import ClientSideNav from './layouts/client/ClientSideNav';
import OpenEnquiries from './pages/clients/OpenEnquiries';

function App() {
  const [matterFilter, setMatterFilter] = useState<'open' | 'closed'>('open');

  return (
    <div className="appLayout">
      <ClientSideNav />
      <OpenEnquiries matterFilter={matterFilter} onMatterFilterChange={setMatterFilter} />
    </div>
  );
}

export default App;
