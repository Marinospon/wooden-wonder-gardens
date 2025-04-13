
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('React application is starting to load...');
console.log('Environment:', import.meta.env.MODE);
console.log('Base URL:', import.meta.env.BASE_URL);

try {
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.error("Root element not found!");
    throw new Error("Root element not found!");
  }
  
  console.log('Root element found, attempting to render React app...');
  
  // Check if there are any issues with the App component
  console.log('App component:', typeof App);
  
  const root = createRoot(rootElement);
  root.render(<App />);
  
  console.log('React app successfully rendered');
} catch (error) {
  console.error('Failed to render React application:', error);
  
  // More detailed error information
  if (error instanceof Error) {
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
  }
  
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
    <p>Error details: ${error instanceof Error ? error.stack : 'No stack trace available'}</p>
    <p>Check browser console for more details.</p>
  `;
  
  const root = document.getElementById('root');
  if (root) {
    root.appendChild(errorElement);
  }
}
