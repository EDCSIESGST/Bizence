import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./h.css";

function Highlights() {
    const [flips, setFlips] = useState(Array(16).fill(false)); // Initialize flip states for each card

    const handleFlip = (index) => {
        const newFlips = [...flips];
        newFlips[index] = !newFlips[index]; // Toggle the flip state of the clicked card
        setFlips(newFlips);
    };

    const fields = [
        { title: '💰 Fundraising Platform', content: 'Participants have the opportunity to raise funds for their innovative ideas and startup ventures through pitch competitions and investor networking sessions.' },
        { title: '🎓 Mentorship Program', content: 'Access to seasoned mentors and industry experts who provide guidance, advice, and support throughout the event and beyond, helping participants refine their business strategies and navigate challenges effectively.' },
        { title: '🚀 Internship Opportunities', content: 'Exclusive internship opportunities offered by leading companies and startups, providing participants with valuable hands-on experience and exposure to real-world business environments.' },
        { title: '🤝 Networking with CEOs and CTOs', content: 'Unique networking opportunities with top-level executives including CEOs and CTOs of renowned companies, fostering connections that could lead to future partnerships, collaborations, or career opportunities.' },
        { title: '🌙 Overnight Mentorship', content: 'Continuous mentorship and guidance available throughout the 24-hour hackathon, with experienced mentors on-site to support participants in refining their ideas, troubleshooting challenges, and optimizing their business models.' },
        { title: '🏢 Incubation Center Access', content: 'Eligibility for incubation under the prestigious Incubation Center of SIES GST, providing startups with access to resources, infrastructure, mentorship, and networking opportunities to accelerate their growth and success.' },
        { title: '📚 Access to Resources', content: 'Access to a wide range of resources including workshops, seminars, and training sessions covering various aspects of entrepreneurship, business development, marketing, and more.' },
        { title: '🎤 Pitching Opportunities', content: 'Platforms for participants to pitch their business ideas to a panel of judges, investors, and industry experts, gaining valuable feedback, exposure, and potential investment opportunities.' },
        { title: '🎁 Goodies for All Participants', content: 'All participants, regardless of winning, will receive exciting goodies as tokens of appreciation, fostering a sense of inclusivity and recognition for their efforts and participation.' }
    ];

    return (
        <div id="hi">
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Highlights</h2>
            <div className="card-container" id="c">
                {fields.map((field, index) => (
                    <ReactCardFlip key={index} isFlipped={flips[index]} flipDirection="vertical">
                        <div className="card" onClick={() => handleFlip(index)}>
                            <div className="card-content" style={{textAlign: 'center'}}>
                                <h3>{field.title}</h3>
                                <button className="small-button">Flip</button>
                            </div>
                        </div>
                        <div className="card" onClick={() => handleFlip(index)}>
                            <div className="card-content" style={{textAlign:'center'}}>
                                <p style={{fontSize:'14px',padding:'4px'}}>{field.content}</p>
                               <div className="bt" ><button className="small-button">Flip</button></div>
                            </div>
                        </div>
                    </ReactCardFlip>
                ))}
            </div>
        </div>
    );
}

export default Highlights;
