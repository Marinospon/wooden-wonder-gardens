
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('React application is starting to load...');

try {
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.error("Root element not found!");
    throw new Error("Root element not found!");
  }
  
  console.log('Root element found, attempting to render React app...');
  
  const root = createRoot(rootElement);
  root.render(<App />);
  
  console.log('React app successfully rendered');
} catch (error) {
  console.error('Failed to render React application:', error);
  
  // Show error on page for easier debugging
  const errorElement = document.createElement('div');
  errorElement.style.padding = '20px';
  errorElement.style.margin = '20px';
  errorElement.style.backgroundColor = '#ffebee';
  errorElement.style.border = '1px solid #f44336';
  errorElement.style.borderRadius = '4px';
  errorElement.innerHTML = `
    <h2>React Application Error</h2>
    <p>There was an error rendering the application:</p>
    <pre>${error instanceof Error ? error.message : String(error)}</pre>
    <p>Check browser console for more details.</p>
  `;
  
  const root = document.getElementById('root');
  if (root) {
    root.appendChild(errorElement);
  }
}
