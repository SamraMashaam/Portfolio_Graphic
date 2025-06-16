import '../styles/Home.css'

function Home() {
  return(
    <div className="home">
      <section className="intro">
        <h1>Samra Mashaam</h1>
        <p>Turning Ideas Into Visual Experiences</p>
      </section>
      
      <div className="profile-image">
        <img src="/profile.jpg" alt="Profile" />
      </div>

      <section className="subtitle">
        <h2>Graphic Designer</h2>
        <p>I believe design is a language that connects ideas to people. With experience in branding, editorial design, and UI mockups, I craft visuals that are both aesthetic and functional. I'm driven by curiosity, inspired by culture, and obsessed with details.</p>
      </section>
    </div>
  );
}

export default Home;
