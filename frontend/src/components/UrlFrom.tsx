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
    setShortUrl(`http://localhost:8080/${data.short}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#1f1c2c] via-[#928DAB] to-[#434343] px-4">
      <div className="flex flex-col items-center mb-10">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
          <path d="M40 10L50 40H30L40 10Z" fill="#e879f9"/>
          <circle cx="40" cy="50" r="20" fill="#a78bfa"/>
          <circle cx="40" cy="50" r="12" fill="#f472b6"/>
        </svg>
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-pink-600 drop-shadow-xl tracking-tight text-center select-none">
          GoShorty
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-3xl bg-black/30 border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-3xl px-8 py-10 md:px-12 md:py-14 w-full max-w-xl flex flex-col items-center gap-6 transition-all duration-500"
      >
        <input
          type="url"
          placeholder="Enter your long URL..."
          value={url}
          onChange={e => setUrl(e.target.value)}
          className="w-full rounded-xl px-5 py-3 bg-black/40 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400 text-lg placeholder-white/70 shadow-inner transition-all duration-200 backdrop-blur-md"
          required
        />
        <button
          type="submit"
          className="w-full md:w-auto bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 px-10 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 flex items-center justify-center gap-2"
        >
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline-block mr-2 text-cyan-200"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 010 5.656m-3.656-3.656a4 4 0 015.656 0m-7.778 7.778a6 6 0 018.486 0m-10.607-10.607a6 6 0 018.486 0"/></svg>
          <span className="font-bold">Shorten URL</span>
        </button>
        {shortUrl && (
          <div className="mt-6 w-full text-center">
            <span className="text-white font-medium text-lg">Short URL:</span>
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-pink-300 underline break-all hover:text-pink-100 transition-colors duration-200 text-lg font-semibold"
            >
              {shortUrl}
            </a>
          </div>
        )}
      </form>
      <footer className="mt-10 text-gray-300 text-xs text-center select-none">
        &copy; {new Date().getFullYear()} <span className="text-pink-300 font-bold">GoShorty</span> — Shorten smarter, not harder.
      </footer>
    </div>
  );
}
