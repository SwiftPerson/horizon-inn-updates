import React from 'react';

export default function UpdateList({ updates }) {
  if (!updates.length) {
    return <p className="no-results">No matching updates found.</p>;
  }

  return (
    <div className="update-list">
      {updates.map(({ version, date, notes }) => (
        <div key={version} className="update-card">
          <div className="update-header">
            <span className="ver">v{version} 🕚</span>
            <time className="date">{date}</time>
          </div>
          <ul className="notes">
            {notes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}