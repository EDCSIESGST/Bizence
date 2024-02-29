import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./h.css";

function Highlights() {
    const [flip, setFlip] = useState(false);

    return (
        <div id="hi">
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Highlights</h2>
            <div className="card-container" id="c">
                {/* Repeat the ReactCardFlip component as needed */}
                <ReactCardFlip isFlipped={flip} flipDirection="vertical">
                    <div className="card">
                        <div className="card-content" style={{textAlign: 'center'}}>
                            <h3>💰 Fundraising Platform</h3>
                            <button onClick={() => setFlip(!flip)} className="small-button">Flip</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content" style={{textAlign:'center'}}>
                            <p style={{fontSize:'14px',padding:'4px',}}>Participants have the opportunity to raise funds for their innovative ideas and startup ventures through pitch competitions and investor networking sessions.</p>
                            <button onClick={() => setFlip(!flip)} className="small-button">Flip</button>
                        </div>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped={flip} flipDirection="vertical">
                    <div className="card">
                        <div className="card-content" style={{textAlign: 'center'}}>
                            <h3>🎓 Mentorship Program</h3>
                            <button onClick={() => setFlip(!flip)} className="small-button">Flip</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content"style={{textAlign:'center'}}>
                            <p style={{fontSize:'14px',padding:'4px'}}>Access to seasoned mentors and industry experts who provide guidance, advice, and support throughout the event and beyond, helping participants refine their business strategies and navigate challenges effectively.</p>
                            <button onClick={() => setFlip(!flip)} className="small-button">Flip</button>
                        </div>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped={flip} flipDirection="vertical">
                    <div className="card">
                        <div className="card-content" style={{textAlign: 'center'}}>
                            <h3>🚀 Internship Opportunities</h3>
                            <button onClick={() => setFlip(!flip)} className="small-button">Flip</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content"style={{textAlign:'center'}}>
                            <p style={{fontSize:'14px',padding:'4px'}}>Exclusive internship opportunities offered by leading companies and startups, providing participants with valuable hands-on experience and exposure to real-world business environments.</p>
                            <button onClick={() => setFlip(!flip)} className="small-button">Flip</button>
                        </div>
                    </div>
                </ReactCardFlip>
                {/* Repeat the ReactCardFlip component as needed */}
            </div>
            <div className="card-container" id="c">
                {/* Repeat the ReactCardFlip component as needed */}
                <ReactCardFlip isFlipped={flip} flipDirection="vertical">
                    <div className="card">
                        <div className="card-content" style={{textAlign: 'center'}}>
                            <h3>🤝 Networking with CEOs and CTOs</h3>
                            <button onClick={() => setFlip(!flip)} className="small-button">Flip</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content" style={{textAlign:'center'}}>
                            <p style={{fontSize:'14px',padding:'4px'}}>Unique networking opportunities with top-level executives including CEOs and CTOs of renowned companies, fostering connections that could lead to future partnerships, collaborations, or career opportunities.</p>
                            <button onClick={() => setFlip(!flip)} className="small-button">Flip</button>
                        </div>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped={flip} flipDirection="vertical">
                    <div className="card">
                        <div className="card-content" style={{textAlign: 'center'}}>
                            <h3>🌙 Overnight Mentorship</h3>
                            <button onClick={() => setFlip(!flip)} className="small-button">Flip</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content" style={{textAlign:'center'}}>
                            <p style={{fontSize:'14px',padding:'4px'}}>Continuous mentorship and guidance available throughout the 24-hour hackathon, with experienced mentors on-site to support participants in refining their ideas, troubleshooting challenges, and optimizing their business models.</p>
                            <button onClick={() => setFlip(!flip)} className="small-button">Flip</button>
                        </div>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped={flip} flipDirection="vertical">
                    <div className="card">
                        <div className="card-content" style={{textAlign: 'center'}}>
                            <h3>🏢 Incubation Center Access</h3>
                            <button onClick={() => setFlip(!flip)} className="small-button">Flip</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content" style={{textAlign:'center'}}>
                            <p style={{fontSize:'14px',padding:'4px'}}>Eligibility for incubation under the prestigious Incubation Center of SIES GST, providing startups with access to resources, infrastructure, mentorship, and networking opportunities to accelerate their growth and success.</p>
                            <button onClick={() => setFlip(!flip)} className="small-button">Flip</button>
                        </div>
                    </div>
                </ReactCardFlip>
                {/* Repeat the ReactCardFlip component as needed */}
            </div>
            <div className="card-container" id="c">
                {/* Repeat the ReactCardFlip component as needed */}
                <ReactCardFlip isFlipped={flip} flipDirection="vertical">
                    <div className="card">
                        <div className="card-content" style={{textAlign: 'center'}}>
                            <h3>📚 Access to Resources</h3>
                            <button onClick={() => setFlip(!flip)} className="small-button">Flip</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content" style={{textAlign:'center'}}>
                            <p style={{fontSize:'14px',padding:'4px'}}>Access to a wide range of resources including workshops, seminars, and training sessions covering various aspects of entrepreneurship, business development, marketing, and more.</p>
                            <button onClick={() => setFlip(!flip)} className="small-button">Flip</button>
                        </div>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped={flip} flipDirection="vertical">
                    <div className="card">
                        <div className="card-content" style={{textAlign: 'center'}}>
                            <h3>🎤 Pitching Opportunities</h3>
                            <button onClick={() => setFlip(!flip)} className="small-button">Flip</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content" style={{textAlign:'center'}}>
                            <p style={{fontSize:'14px',padding:'4px'}}>Platforms for participants to pitch their business ideas to a panel of judges, investors, and industry experts, gaining valuable feedback, exposure, and potential investment opportunities.</p>
                            <button onClick={() => setFlip(!flip)} className="small-button">Flip</button>
                        </div>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped={flip} flipDirection="vertical">
                    <div className="card">
                        <div className="card-content" style={{textAlign: 'center'}}>
                            <h3>🎁 Goodies for All Participants</h3>
                            <button onClick={() => setFlip(!flip)} className="small-button">Flip</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content" style={{textAlign:'center'}}>
                            <p style={{fontSize:'14px',padding:'4px'}}>All participants, regardless of winning, will receive exciting goodies as tokens of appreciation, fostering a sense of inclusivity and recognition for their efforts and participation.</p>
                            <button onClick={() => setFlip(!flip)} className="small-button">Flip</button>
                        </div>
                    </div>
                </ReactCardFlip>
                {/* Repeat the ReactCardFlip component as needed */}
            </div>
        </div>
    );
}

export default Highlights;
