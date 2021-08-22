import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <h3>Created with</h3>
      <div>
        <h4>React-Google-Maps</h4>
        <h4>Census.gov Coordinates API</h4>
        <h4>React</h4>
        <h4>Redux/Saga</h4>
        <h4>Express</h4>
        <h4>Node.js</h4>
        <h4>Passport</h4>
        <h4>Axios</h4>
        <h4>Postico</h4>

      </div>
    </div>
  );
}

export default AboutPage;
