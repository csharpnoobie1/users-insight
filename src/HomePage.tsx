import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-dark text-white min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-4">Home Page</h1>
      <p className="lead">
        Welcome to our Home page! This website is designed for testing
        LocalStack in a Continuous Integration (CI) environment.
      </p>
      <p>
        Explore the capabilities of LocalStack for developing cloud applications
        locally. This platform allows you to emulate AWS cloud services locally
        to speed up development and ensure your applications are ready for
        production deployment.
      </p>
    </div>
  );
};

export default HomePage;