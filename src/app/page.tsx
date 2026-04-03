'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [showPrivate, setShowPrivate] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const match = document.cookie.split(';').find(c => c.trim().startsWith('hub_auth='));
    if (match && match.split('=')[1]?.trim() === 'karl') {
      setShowPrivate(true);
    }
  }, []);

  return (
    <div className="page">
      <main className={`container ${mounted ? 'visible' : ''}`}>
        <h1 className="title">
          93.fyi
          <span className="pulse-dot" aria-hidden="true" />
        </h1>

        <div className="rule" />

        <nav className="links">
          <a href="https://status.93.fyi">Status</a>
          <a href="https://now.93.fyi">Now</a>
          <a href="https://github.com/karlmarx">GitHub</a>
          <a href="https://gitlab.com/karlmarx2">GitLab</a>
          <a href="https://nfit.93.fyi">NWB Workout</a>
          <a href="https://nyoga.93.fyi">NWB Yoga</a>
        </nav>

        {showPrivate && (
          <>
            <div className="rule" />
            <nav className="links private">
              <a href="https://seed.93.fyi">Seedbox</a>
              <a href="https://me.93.fyi">Dashboard</a>
              <a href="https://todo.93.fyi">Todo</a>
              <a href="https://ta.93.fyi">TrickAdvisor</a>
            </nav>
          </>
        )}
      </main>
    </div>
  );
}
