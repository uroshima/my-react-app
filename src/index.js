import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
// import { Integrations } from "@sentry/tracing";
import App from './App';
import './index.css';

Sentry.init({
  dsn: "https://56a19ce1dda74f2b8a722d44cbfa7016@o804694.ingest.sentry.io/5807103",
  // integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
