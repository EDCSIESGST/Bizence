import React from 'react';
import "../bizence.css"
function TimelineItem(props) {
  return (
    <div className={`con ${props.side}`} data-aos={props.animation} data-aos-duration={props.duration} data-aos-delay={props.delay}>
      <div className="content">
        <h2>{props.title}</h2>
        
        <p>{props.content}</p>
        <br></br>
        <p style={{color
        :'white'}}>{props.paras}</p>
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <div>
      <h1 className='head' id='times'>Timeline</h1>
      <br></br>
      <div className="timeline" >
      
        <TimelineItem side="left" title="Kick Off Event " content="5:00pm - 6:00pm" paras="BIZENCE'24 kicks off with a grand inauguration, setting the stage for two days of innovation."animation="fade-right" delay="200" duration="500"/>
      
        <TimelineItem side="right" title="Ideation and BMC Workshop" content="6:00pm -8:30pm" animation="fade-left" paras="Learn the essentials of Business Model Canvas  in a concise and interactive workshop" delay="300" duration="200"/>
       
        <TimelineItem side="left" title="Build " content=" Day 1: 10:30pm - Day2: 12:00pm" animation="fade-left" delay="300" paras="You can work and build Bmc upon your idea during this phase" duration="500"/>
       
        <TimelineItem side="right" title="Final Pitch " content="12:00pm -4:00pm" animation="fade-left" paras ="Present your project in the final pitch, where you will impress the judges and audience with your vision and execution"delay="200" duration="500"/>
        <TimelineItem side="left" title="Panel Discussion " content="4:30pm -5:30pm" paras="Participate in a thought-provoking panel discussion on current trends and future prospects in the industry." animation="fade-right" delay="300" duration="500"/>
        <TimelineItem side="right" title="Winners and Felicitation" content="5:30pm" paras="Celebrate your achievements and foster community in the memorable closing ceremony" animation="fade-left" delay="300" duration="500"/>
      </div>
    </div>
  );
}

export default Timeline;

