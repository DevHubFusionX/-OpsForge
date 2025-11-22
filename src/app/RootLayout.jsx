// RootLayout component
import React from 'react';

export const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>OpsForge - SaaS Dashboard</title>
        <meta name="description" content="Complete SaaS platform for operations management" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
