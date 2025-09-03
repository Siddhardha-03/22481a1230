import React, { useState } from 'react';
import './App.css';

function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [error, setError] = useState('');

  const generateShortUrl = (url) => {
    const encoded = btoa(url);
    return `http://short.ly/${encoded.slice(0, 8)}`;
  };

  const handleShorten = () => {
    setError('');
    setShortenedUrl('');

    if (!originalUrl.trim()) {
      setError('⚠️ Please enter a valid URL.');
      return;
    }

    const fakeShort = generateShortUrl(originalUrl);
    setShortenedUrl(fakeShort);
  };

  return (
    <div className="container">
      <h1 className="title">🦸‍♂️  URL Shortener</h1>
      <input
        type="text"
        placeholder="Enter your long URL"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        className="input"
      />
      <button onClick={handleShorten} className="button">
        Shorten It!
      </button>

      {shortenedUrl && (
        <div className="result">
          <strong>🔗 Short URL:</strong>{' '}
          <a href={originalUrl} target="_blank" rel="noopener noreferrer">
            {shortenedUrl}
          </a>
        </div>
      )}

      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default App;