import React from 'react';
import UpdateList from './components/UpdateList';
import './App.css';

function App() {
  const appInfo = {
    name: 'Horizon Inn',
    tagline: 'Manage guests. Simplify stays.',
    developer: 'Looprix',
    contact: { name: 'Ahmed Junaid', phone: '03379242220' },
    currentVersion: '1.2.0',
    updates: [
       {
    version: '1.1.0',
    date: '2025-07-25',
    notes: [
      '✅ Initial release: reserving, billing, profiles',
      '✅ Dashboard with real‑time room status',
      '✅ Guest search & detailed history',
      
    ],
  },
  {
    version: '1.2.0',
    date: '2025-07-25',
    notes: [
      '✅ Backup & restore functionality',
      '✅ Kitchen & laundry service tracking',
      '✅ Analytics: occupancy, revenue, top services',
      '✅ Settings: theme, account, local sync',

    ],
  },
    ],
  };

  
  return (
    <div className="app">
      <header className="hero">
        <h1>{appInfo.name}</h1>
        <p className="tagline">{appInfo.tagline}</p>
        <div className="version-badge">{appInfo.currentVersion}</div>
      </header>

      <main className="content">
        <h2>What’s New</h2>
        <UpdateList updates={appInfo.updates} />
      </main>

      <footer className="footer">
        Developed by {appInfo.developer} — Contact{' '}
        <a href="tel:03379242220">{appInfo.contact.name}</a> at{' '}
        <a href="tel:03379242220">{appInfo.contact.phone}</a>
      </footer>
    </div>
  );
}

export default App;
