import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './UpdateList.css';

export default function UpdateList({ updates }) {
  const [openVersion, setOpenVersion] = useState(null);

  const toggle = (v) =>
    setOpenVersion(openVersion === v ? null : v);

  return (
    <div className="updates">
      {updates.map(({ version, date, notes }) => (
        <div
          key={version}
          className={`card ${openVersion === version ? 'open' : ''}`}
        >
          <div
            className="card-header"
            onClick={() => toggle(version)}
          >
            <div>
              <span className="ver">v{version}</span>
              <span className="date">{date}</span>
            </div>
            <div className="chevron">
              {openVersion === version ? '▲' : '▼'}
            </div>
          </div>

          <div className="card-body">
            <ul>
              {notes.map((n, i) => (
                <li key={i}>{n}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

UpdateList.propTypes = {
  updates: PropTypes.arrayOf(
    PropTypes.shape({
      version: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      notes: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};
