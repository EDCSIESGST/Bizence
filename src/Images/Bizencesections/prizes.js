import React from 'react';
import './prizes.css'; // Import the CSS file

class PricingSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null,
      selectedTrack: 'track1', // Default selected track
      track1PricingData: [
        {
          title: 'First',
          price: '10,000',
          features: ['some amazing feature', 'some pro exclusive features', 'another option', 'final one']
        },
        {
          title: 'Second',
          price: '5,000',
          features: ['some amazing feature', 'some pro exclusive features', 'another option', 'final one'],
          ribbon: true
        },
        {
          title: 'Third',
          price: '2000',
          features: ['some amazing feature', 'some pro exclusive features', 'another option', 'final one']
        }
      ],
      track2PricingData: [
        {
          title: 'track2_student',
          price: '19.99',
          features: ['some amazing feature', 'some pro exclusive features', 'another option', 'final one']
        },
        {
          title: 'track2_professional',
          price: '29.99',
          features: ['some amazing feature', 'some pro exclusive features', 'another option', 'final one'],
          ribbon: true
        },
        {
          title: 'track2_master',
          price: '59.99',
          features: ['some amazing feature', 'some pro exclusive features', 'another option', 'final one']
        }
      ]
    };
  }

  handleMouseOver(index) {
    this.setState({ activeCard: index });
  }

  handleTrackChange(track) {
    this.setState({ selectedTrack: track });
  }

  render() {
    const { selectedTrack, activeCard, track1PricingData, track2PricingData } = this.state;
    const pricingData = selectedTrack === 'track1' ? track1PricingData : track2PricingData;

    return (
      <section id='pricing-section'>
      
        <h2>Prize Pool worth Rs 80,000 🏆🎁 </h2>
      
       
        {/* <div className="track-selection">
          <button onClick={() => this.handleTrackChange('track1')}>Track 1</button>
          <button onClick={() => this.handleTrackChange('track2')}>Track 2</button>
        </div> */}
        {/* <div className="pricing-cards">
          {pricingData.map((card, index) => (
            <div className={`pricing-card ${activeCard === index ? 'active' : ''}`} key={index} onMouseOver={() => this.handleMouseOver(index)}>
              <div className="card">
                {card.ribbon && (
                  <div className="ribbon">
                    <div>First</div>
                  </div>
                )}
                <h3 className="card-title">{card.title}</h3>
                <hr className="first" />
                <p className="card-price"><span>₹</span>{card.price}</p>
                
                <hr className="second" />
               
              </div>
            </div>
          ))}
        </div> */}
      </section>
    );
  }
}

export default PricingSection;
