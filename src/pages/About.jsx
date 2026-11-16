import { useEffect, useRef, useState } from 'react';

// Your About page lives in public/about/ and is shown here inside an iframe.
// An iframe keeps its HTML, CSS and JavaScript completely separate from the website,
// so nothing in about.html / about.css / about.js has to change.
const ABOUT_PAGE_URL = '/about/about.html';

export default function About() {
  const iframeRef = useRef(null);
  const resizeObserverRef = useRef(null);
  // 'checking' -> looking for the file, 'ready' -> file found, 'missing' -> file not found
  const [status, setStatus] = useState('checking');
  const [frameHeight, setFrameHeight] = useState(null);

  // Check that about.html really exists. When a file is missing, the dev server and Vercel
  // answer with the website's own index.html (which contains id="root"), and we would end up
  // showing the website inside itself. This check prevents that.
  useEffect(() => {
    let isCancelled = false;

    fetch(ABOUT_PAGE_URL)
      .then((response) => (response.ok ? response.text() : Promise.reject(new Error('not found'))))
      .then((html) => {
        if (!isCancelled) setStatus(html.includes('id="root"') ? 'missing' : 'ready');
      })
      .catch(() => {
        if (!isCancelled) setStatus('missing');
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  // Stop watching the iframe's size when leaving the page.
  useEffect(() => {
    return () => resizeObserverRef.current?.disconnect();
  }, []);

  // Make the iframe exactly as tall as the About page so there is no second scrollbar.
  // This works because the About page is served from the same website (same origin).
  function matchFrameHeightToContent() {
    const frameDocument = iframeRef.current?.contentDocument;
    if (frameDocument) setFrameHeight(frameDocument.documentElement.scrollHeight);
  }

  function handleFrameLoad() {
    matchFrameHeightToContent();

    // Keep the height correct if the About page changes size (images loading, window resizing...).
    const frameDocument = iframeRef.current?.contentDocument;
    if (frameDocument?.body && 'ResizeObserver' in window) {
      resizeObserverRef.current?.disconnect();
      resizeObserverRef.current = new ResizeObserver(matchFrameHeightToContent);
      resizeObserverRef.current.observe(frameDocument.body);
    }
  }

  if (status === 'checking') {
    return <div className="about-page about-page__message">Loading...</div>;
  }

  if (status === 'missing') {
    return (
      <div className="about-page about-page__message">
        <div className="page-notice">
          <h1>About page not found</h1>
          <p>
            Add <strong>about.html</strong>, <strong>about.css</strong> and <strong>about.js</strong> to the{' '}
            <strong>public/about</strong> folder and refresh this page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="about-page">
      <iframe
        ref={iframeRef}
        className="about-page__frame"
        title="About OCT Delivery"
        src={ABOUT_PAGE_URL}
        style={frameHeight ? { height: frameHeight } : undefined}
        onLoad={handleFrameLoad}
      />
    </div>
  );
}
