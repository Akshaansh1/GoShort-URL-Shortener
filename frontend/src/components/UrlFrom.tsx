import React, { useState } from 'react';

export default function UrlForm() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url })
    });
    const data = await res.json();
    setShortUrl(`${window.location.origin}/${data.short}`);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
      <input
        type="url"
        placeholder="Enter long URL"
        value={url}
        onChange={e => setUrl(e.target.value)}
        className="border p-2 w-full mb-4"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Shorten</button>
      {shortUrl && <p className="mt-4">Short URL: <a href={shortUrl} className="text-blue-600 underline">{shortUrl}</a></p>}
    </form>
  );
}