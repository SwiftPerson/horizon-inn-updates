import React, { useState, useMemo, useEffect } from 'react';
import UpdateList from './components/UpdateList';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const APP_INFO = {
  name: '🏨Horizon Inn',
  tagline: 'Your Guest House Management Solution.',
  developer: 'Looprix',
  contact: { name: 'Ahmed Junaid', phone: '03379242220' },
  currentVersion: '1.4.0',
  downloadBaseUrl: 'https://horizon-inn-updates.vercel.app/',
  updates: [
    {
       version: '1.4.0',
      date: '2025-08-4',
      notes: [
        'Bug fixes',
        'Added an option to edit the active reservation',
        'Removed the restriction from date selection',
        'Added show password option',
        'Changed kitchen and laundry style and added Search bar to navigate'
      ]
    },
    {
      version: '1.3.0',
      date: '2025-07-31',
      notes: [
        'FORM‑D PDF: nationality prompt + Reg‑No. included in header/details',
        'Enhanced Guest Detail & Room Summary tables',
        'Revamped Kitchen & Laundry UI, can remove usage entries',
        'Analytics: daily kitchen/laundry usage summary by date range',
      ],
    },
    {
      version: '1.2.0',
      date: '2025-07-25',
      notes: [
        'Backup & restore functionality',
        'Kitchen & laundry service tracking',
        'Analytics: occupancy, revenue, top services',
        'Settings: theme, account, local sync',
      ],
    },
    {
      version: '1.1.0',
      date: '2025-07-20',
      notes: [
        'Initial release: reserving, billing, profiles',
        'Dashboard with real‑time room status',
        'Guest search & detailed history',
      ],
    },
  ],
};

function App() {
  const [filter, setFilter] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const downloadUrl = `${APP_INFO.downloadBaseUrl}/horizon-in-v${APP_INFO.currentVersion}.exe`;

  // show "scroll to top" button when scrolled down
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const filtered = useMemo(
    () =>
      APP_INFO.updates.filter(u =>
        u.notes.some(n =>
          n.toLowerCase().includes(filter.toLowerCase())
        ) || u.version.includes(filter)
      ),
    [filter]
  );

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-top">
          <div className="hero-text">
            <h1>{APP_INFO.name}</h1>
            <p className="tagline">{APP_INFO.tagline}</p>
          </div>
          <ThemeToggle />
        </div>

        <div className="download-card">
          <div className="download-icon">⬇️</div>
          <div className="download-details">
            <div className="download-title">Download Horizon Inn</div>
            <div className="download-version">v{APP_INFO.currentVersion}</div>
          </div>
          <a
            href={downloadUrl}
            className="download-button"
            download={`Horizon-Inn-v${APP_INFO.currentVersion}.exe`}
          >
            Get Installer
          </a>
        </div>

        <div className="hero-filter">
          <input
            type="text"
            placeholder="🔍 Search release notes or version..."
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />
        </div>
      </header>

      <main className="content">
        <h2>What’s New</h2>
        {filtered.length ? (
          <UpdateList updates={filtered} />
        ) : (
          <p className="no-results">No matching updates found.</p>
        )}
      </main>

      <footer className="footer">
        <small>
          Developed by {APP_INFO.developer} — Contact{' '}
          <a href={`tel:${APP_INFO.contact.phone}`}>
            {APP_INFO.contact.name}
          </a>{' '}
          at{' '}
          <a href={`tel:${APP_INFO.contact.phone}`}>
            {APP_INFO.contact.phone}
          </a>
        </small>
      </footer>

      {showScrollTop && (
        <button className="scroll-top" onClick={scrollToTop}>
          ↑ Top
        </button>
      )}
    </div>
  );
}

export default App;
