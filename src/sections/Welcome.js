import React from 'react';
import Button from '../components/Button';
import WelcomeBackground from '../components/WelcomeBackground';

function Welcome(props) {
    return (
  <WelcomeBackground>
      <Button>Hallo</Button>
  </WelcomeBackground>
    );
}

export default Welcome;