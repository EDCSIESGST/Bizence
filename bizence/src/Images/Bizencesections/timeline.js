import React from 'react';
import "../bizence.css"
function TimelineItem(props) {
  return (
    <div className={`con ${props.side}`} data-aos={props.animation} data-aos-duration={props.duration} data-aos-delay={props.delay}>
      <div className="content">
        <h2>{props.title}</h2>
        
        <p>{props.content}</p>
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <div>
      <h1 className='head'>Timeline</h1>
      <br></br>
      <div className="timeline">
        <TimelineItem side="left" title="Registrations " content="2:00pm - 3:00pm" animation="fade-right" delay="500" duration="500"/>
        <TimelineItem side="right" title="Kick Off Event " content="3:30pm - 4:30pm" animation="fade-left" delay="500" duration="500"/>
        <TimelineItem side="left" title="Snacks and Tea" content="4:30pm -5:30pm" animation="fade-right" delay="500" duration="800"/>
        <TimelineItem side="right" title="Ideation and BMC Workshop" content="5:45pm -7:45pm" animation="fade-left" delay="1400" duration="500"/>
        <TimelineItem side="left" title="Dinner" content="8:00pm-9:00pm" animation="fade-right" delay="500" duration="500"/>
        <TimelineItem side="right" title="Build " content="9:00pm -11:00pm" animation="fade-left" delay="500" duration="500"/>
        <TimelineItem side="left" title="Mentoring " content="11:00pm -12:00pm" animation="fade-right" delay="500" duration="500"/>
        <TimelineItem side="right" title="Lunch " content=":00pm -4:00pm" animation="fade-left" delay="500" duration="500"/>
        <TimelineItem side="left" title="Presentation Round " content="1:00pm -4:00pm" animation="fade-right" delay="500" duration="500"/>
        <TimelineItem side="right" title="Winners and Felicitation" content="4:30ppm -5:30pm" animation="fade-left" delay="500" duration="500"/>
      </div>
    </div>
  );
}

export default Timeline;

