import ReactDOM from 'react-dom/client';
import App from './App';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './index.css';

// StrictMode is intentionally omitted: its double-mount in dev re-initialises
// Locomotive Scroll twice and breaks the smooth-scroll container.
ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
