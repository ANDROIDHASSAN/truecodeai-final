import { hydrateRoot, createRoot } from 'react-dom/client';
import App from './App';
import 'lenis/dist/lenis.css';
import './index.css';

// StrictMode is intentionally omitted: its double-mount in dev re-initialises
// Locomotive Scroll twice and breaks the smooth-scroll container.
const root = document.getElementById('root')!;
const app = <App url={window.location.pathname} />;

// production HTML is prerendered (scripts/prerender.mjs) → hydrate; dev serves an empty root → render
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
