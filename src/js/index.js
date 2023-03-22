import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './react-components/App';

// [TEMP] do some arbitrary styling to show that it works
import '../css/styles.css';

// [TEMP] replace the "root" div in the main HTML file with the App component
const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<App />);