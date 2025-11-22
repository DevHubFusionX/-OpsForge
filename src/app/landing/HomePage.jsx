// HomePage component
import React from 'react';
import Button from '../../components/core/Button';

export const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Automate Your Operations</h1>
        <p>Build powerful workflows without code. Connect your tools, automate tasks, and scale your business.</p>
        <div className="hero-actions">
          <Button variant="primary" size="lg">Get Started</Button>
          <Button variant="secondary" size="lg">Watch Demo</Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
