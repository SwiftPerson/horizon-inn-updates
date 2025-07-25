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
    downloadBaseUrl: 'https://horizon-inn-updates.vercel.app/',
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

  // Serve the .exe installer
  const downloadUrl = `${appInfo.downloadBaseUrl}/horizon-inn-v${appInfo.currentVersion}.exe`;

  return (
    <div className="app">
            <header className="hero">
        <h1>{appInfo.name}</h1>
        <p className="tagline">{appInfo.tagline}</p>
        <div className="version-badge">{appInfo.currentVersion}</div>

        {/* ↓ New download card ↓ */}
        <div className="download-card">
          <div className="download-icon">⬇️</div>
          <div className="download-details">
            <div className="download-title">Download Latest Version</div>
            <div className="download-version">v{appInfo.currentVersion}</div>
          </div>
          <a
            href={downloadUrl}
            className="download-button"
            download={`Horizon-Inn-v${appInfo.currentVersion}.exe`}
          >
            Get Installer
          </a>
        </div>
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
