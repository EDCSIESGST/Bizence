

import React from 'react';
import './prizes.css'; // Import the CSS file

class PricingSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prizePool: 0 // Initialize prize pool value
    };
  }

  componentDidMount() {
    // Animate prize pool counter on component mount
    this.animateCounter(0, 80000, 2000); // Adjust duration as needed
  }

  animateCounter(startValue, endValue, duration) {
    const startTime = Date.now();

    const updateCounter = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Calculate progress

      const currentValue = Math.floor(startValue + (endValue - startValue) * progress);
      this.setState({ prizePool: currentValue });

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    updateCounter();
  }

  render() {
    return (
    <div>
      <br/>
      <br/>
        <div id='ps'>
          <h2>Prize Pool worth Rs 80,000 <br/>🏆🎁 </h2>
          </div>
          </div>
    
    );
  }
}

export default PricingSection;
