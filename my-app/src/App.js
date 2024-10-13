import React from 'react';
import './App.css'; // Optional: If you want to create a separate CSS file

function App() {
    return (
        <div className="container">
            <header className="header">
                <div className="logo">Nicole Warshauer</div>
                <nav className="nav">
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">My Work</a>
                    <a href="#">Contact</a>
                </nav>
            </header>
            <main className="main">
                <div className="profile-pic" style={{ backgroundImage: "url('https://placehold.co/300x300')" }}></div>
                <div className="intro">
                    <h1>Hi, I’m Nicole</h1>
                    <p>I build engaged communities.</p>
                    <p>I’m one part marketer and one part word wrangler, often fueled by baked goods and a well-placed Oxford comma.</p>
                    <p>I’m best known for delivering carefully crafted marketing strategies that create communities of brand evangelists.</p>
                    <div className="buttons">
                        <a className="chat" href="#">LET'S CHAT</a>
                        <a className="about" href="#">ABOUT</a>
                    </div>
                </div>
            </main>
            <section className="about">
                <h2>A bit about me</h2>
                <p>
                    In the 15+ years that I’ve been a legit, full-time working adult, I’ve led high-performing teams of digital marketers, community managers, and content creators. My experience spans tech to education, with key strengths in marketing strategy, content management, and community development.
                </p>
                <div className="brands">
                    <img alt="Dior logo" src="https://storage.googleapis.com/a1aa/image/pPNdK6UFNcLiIpNMhVnZZJmilYrYykt7kgDOt7vKiD5H0l5E.jpg" />
                    <img alt="Dribbble logo" src="https://storage.googleapis.com/a1aa/image/IIx8zMqeLF09OCrUubYebAILLpI0K1r9alrl2jTSrC1cQXmTA.jpg" />
                    <img alt="GA logo" src="https://storage.googleapis.com/a1aa/image/NFQmaPTCjwJ8HFSf901EfllWNWSSMeV8g7YtafZtPzZ7BdZOB.jpg" />
                </div>
            </section>
        </div>
    );
}

export default App;
