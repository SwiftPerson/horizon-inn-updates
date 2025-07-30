import React, { useEffect, useState } from 'react';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);
  return (
    <button className="theme-toggle" onClick={() => setDark(d => !d)}>
      {dark ? '☀️' : '🌙'}
    </button>
  );
}
