import React, { useState, useEffect } from 'react';

export default function CustardlyStory() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = (window.scrollY / documentHeight) * 100;
      setScrollProgress(scrolled);

      // Check visibility of story sections
      const sections = document.querySelectorAll('[data-story-section]');
      const visible = {};
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < windowHeight * 0.75 && rect.bottom > windowHeight * 0.25;
        visible[section.dataset.storySection] = isVisible;
      });
      setVisibleSections(visible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="story-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: #000;
          overflow-x: hidden;
        }

        .story-container {
          background: linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%);
          color: #d4af37;
          font-family: 'Lora', serif;
          position: relative;
          overflow-x: hidden;
        }

        /* Progress Bar */
        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, #ffd700, #d4af37, #b8860b);
          z-index: 1000;
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.6);
          transition: width 0.1s ease;
        }

        /* Grain Texture */
        .grain-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 999;
          opacity: 0.5;
        }

        /* Hero Section */
        .hero-section {
          min-height: 40vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 4rem 2rem;
          position: relative;
          background: 
            radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 70%),
            #000;
        }

        .hero-ornament {
          width: 150px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
          margin: 0 auto 0.3rem;
          animation: expandOrnament 2s ease forwards;
        }

        @keyframes expandOrnament {
          from { width: 0; opacity: 0; }
          to { width: 150px; opacity: 1; }
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 10vw, 7rem);
          font-weight: 900;
          letter-spacing: 0.05em;
          background: linear-gradient(180deg, #bfb9a1 0%, #d4af37 50%, #695217 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
          background-clip: text;
          margin-bottom: 0.4rem;
          line-height: 1.2;
          animation: fadeInUp 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
        }

        .hero-subtitle {
          font-family: 'Crimson Text', serif;
          font-size: clamp(1.3rem, 3vw, 2rem);
          font-style: italic;
          background: 'linear-gradient(180deg, #fff1a1ff 10%, #ffb805ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
          max-width: 800px;
          line-height: 1.8;
          margin-bottom: 0.8rem;
          animation: fadeInUp 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both;
        }

        .hero-year {
          font-family: 'Playfair Display', serif;
          font-size: clamp(4rem, 12vw, 8rem);
          font-weight: 700;
          background: linear-gradient(180deg, #bfb9a1 0%, #d4af37 50%, #695217 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
          background-clip: text;
          margin-bottom: 0.2rem;
          letter-spacing: 0.2em;
          margin-top: 0.3rem;
          animation: fadeIn 2s ease 1s both;
        }

        /* Story Sections */
        .story-section {
          min-height: 20vh;
          padding: 0.4rem 0.8rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          opacity: 0;
          transform: translateY(60px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .story-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .story-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 100%;
          background: linear-gradient(180deg, transparent, rgba(212, 175, 55, 0.3), transparent);
        }

        .year-badge {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #d4af37;
          letter-spacing: 0.3em;
          margin-bottom: 0.2rem;
          padding: 0.5rem 0.6rem;
          border: 2px solid rgba(212, 175, 55, 0.3);
          border-radius: 2px;
          display: inline-block;
          background: rgba(212, 175, 55, 0.05);
          backdrop-filter: blur(10px);
        }

        .story-content {
          max-width: 900px;
          text-align: center;
        }

        .story-quote {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 4vw, 3.5rem);
          font-weight: 600;
          line-height: 1.4;
          background: linear-gradient(180deg, #bfb9a1 0%, #d4af37 50%, #695217 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
          background-clip: text;
          margin-bottom: 0.2rem;
          margin-bottom: 0.3rem;
          position: relative;
          padding: 0 3rem;
        }

        .story-quote::before,
        .story-quote::after {
          font-family: 'Playfair Display', serif;
          font-size: 5rem;
          position: absolute;
          color: rgba(212, 175, 55, 0.2);
          font-weight: 900;
        }

        .story-quote::before {
          content: '"';
          top: -0.2rem;
          left: 0;
        }

        .story-quote::after {
          content: '"';
          bottom: -0.2rem;
          right: 0;
        }

        .story-text {
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          line-height: 2;
          color: #a89968;
          margin-bottom: 0.5rem;
          font-weight: 400;
        }

        .story-text.emphasis {
          background: linear-gradient(180deg, #bfb9a1 0%, #d4af37 50%, #695217 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
          background-clip: text;
          margin-bottom: 0.2rem;
          font-weight: 500;
          font-style: italic;
        }

        .story-text.highlight {
          font-size: clamp(1.3rem, 2.5vw, 1.8rem);
          background: linear-gradient(180deg, #bfb9a1 0%, #d4af37 50%, #695217 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
          background-clip: text;
          margin-bottom: 0.2rem;
          font-weight: 600;
          margin: 2rem 0;
        }

        /* Dark Section - For Heavy Moments */
        .dark-section {
          background: linear-gradient(180deg, #000 0%, #050505 50%, #000 100%);
          border-top: 1px solid rgba(212, 175, 55, 0.1);
          border-bottom: 1px solid rgba(212, 175, 55, 0.1);
        }

        .dark-section .story-text {
          color: #8b7355;
        }

        /* Comeback Section - Brighter */
        .comeback-section {
          background: 
            radial-gradient(ellipse at 50% 30%, rgba(255, 215, 0, 0.08) 0%, transparent 60%),
            #000;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
          max-width: 1000px;
          margin: 0.4rem auto;
          padding: 0 2rem;
        }

        .stat-card {
          text-align: center;
          padding: 2rem;
          background: rgba(212, 175, 55, 0.05);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 2px;
          transition: all 0.4s ease;
        }

        .stat-card:hover {
          transform: translateY(-10px);
          background: rgba(212, 175, 55, 0.1);
          box-shadow: 0 20px 60px rgba(212, 175, 55, 0.2);
        }

        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          font-weight: 700;
          color: #ffd700;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1rem;
          color: #a89968;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* Final Message */
        .final-section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 0.6rem 0.4rem;
          background: 
            radial-gradient(ellipse at 50% 50%, rgba(255, 215, 0, 0.15) 0%, transparent 70%),
            #000;
        }

        .final-quote {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 700;
          line-height: 1.3;
          background: linear-gradient(180deg, #bfb9a1 0%, #d4af37 50%, #695217 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
          background-clip: text;
          max-width: 1000px;
          margin-bottom: 0.3rem;
        }

        .final-text {
          font-size: clamp(1.2rem, 2.5vw, 1.8rem);
          color: #c9a961;
          max-width: 800px;
          line-height: 1.8;
          margin-bottom: 0.5rem;
        }

        .signature {
          font-family: 'Crimson Text', serif;
          font-size: 2rem;
          font-style: italic;
          color: #d4af37;
          margin-top: 0.4rem;
          letter-spacing: 0.05em;
        }

        /* Decorative Elements */
        .decorative-corner {
          position: absolute;
          width: 60px;
          height: 60px;
          border: 1px solid rgba(212, 175, 55, 0.3);
        }

        .corner-tl { top: 2rem; left: 2rem; border-right: none; border-bottom: none; }
        .corner-tr { top: 2rem; right: 2rem; border-left: none; border-bottom: none; }
        .corner-bl { bottom: 2rem; left: 2rem; border-right: none; border-top: none; }
        .corner-br { bottom: 2rem; right: 2rem; border-left: none; border-top: none; }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .story-quote {
            padding: 0 1rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .decorative-corner {
            width: 30px;
            height: 30px;
          }

          .corner-tl, .corner-tr { top: 1rem; }
          .corner-bl, .corner-br { bottom: 1rem; }
          .corner-tl, .corner-bl { left: 1rem; }
          .corner-tr, .corner-br { right: 1rem; }
        }
      `}</style>

      {/* Progress Bar */}
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>

      {/* Grain Overlay */}
      <div className="grain-overlay"></div>
        <div style={{color:"golden",fontFamily:"Georgia, serif",fontSize:"2rem",background: 'linear-gradient(180deg, #fff1a1ff 10%, #ffb805ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)',padding: '1rem'}} onClick={() => window.location.href = "/"} >Custardly</div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-ornament"></div>
        <h1 className="hero-title">The Custardly Story</h1>
        <p className="hero-subtitle">
          A journey of resilience, loss, and an unshakeable belief<br />
          that dessert can be both joyful and kind
        </p>
        <div className="hero-year">2015</div>
      </section>

      {/* The Beginning */}
      <section className="story-section" data-story-section="beginning" 
        style={{ opacity: visibleSections.beginning ? 1 : 0, transform: visibleSections.beginning ? 'translateY(0)' : 'translateY(60px)' }}>
        <div className="decorative-corner corner-tl"></div>
        <div className="decorative-corner corner-br"></div>
        <span className="year-badge">2015</span>
        <div className="story-content">
          <h2 className="story-quote">Why does dessert always have to be unhealthy?</h2>
          <p className="story-text">
            In 2015, two brothers sat with a simple but powerful question.
          </p>
          <p className="story-text">
            Ice cream was everywhere—loved by all, especially children—but it came with hidden costs: 
            excess sugar, artificial flavors, guilt after joy.
          </p>
          <p className="story-text highlight">
            What if there was a direct replacement?
          </p>
          <p className="story-text">
            Something equally joyful… but kinder to the body.
          </p>
          <p className="story-text emphasis">
            That's when the idea of Custardly was born.
          </p>
          <p className="story-text">
            A ready-made custard—rich, fruity, indulgent—yet familiar, comforting, 
            and healthier than ice cream.
          </p>
          <p className="story-text highlight">
            It wasn't a business idea back then.<br />It was a belief.
          </p>
        </div>
      </section>

      {/* The Action - 2019 */}
      <section className="story-section dark-section" data-story-section="action"
        style={{ opacity: visibleSections.action ? 1 : 0, transform: visibleSections.action ? 'translateY(0)' : 'translateY(60px)' }}>
        <div className="decorative-corner corner-tr"></div>
        <div className="decorative-corner corner-bl"></div>
        <span className="year-badge">2019</span>
        <div className="story-content">
          <p className="story-text highlight">
            By 2019, belief turned into action.
          </p>
          <p className="story-text">
            We invested our time, energy, and savings to bring Custardly to life. 
            Early production began. We were ready to introduce something new to the Indian dessert market.
          </p>
          <p className="story-text emphasis">
            But life doesn't ask before it tests you.
          </p>
          <p className="story-text">
            On 5th January 2019, my father passed away.
          </p>
          <p className="story-text">
            The foundation of my life collapsed overnight.
          </p>
          <p className="story-text">
            Dreams paused. Responsibilities arrived.
          </p>
          <p className="story-text">
            Instead of scaling a startup, I had to stabilize my family's financial future. 
            Custardly was forced into silence—not because it failed, but because survival came first.
          </p>
          <p className="story-text highlight">
            Then came COVID.
          </p>
          <p className="story-text">
            Whatever momentum remained… disappeared.
          </p>
          <p className="story-text emphasis">
            Custardly didn't shut down.<br />It waited.
          </p>
        </div>
      </section>

      {/* The Hustle */}
      <section className="story-section" data-story-section="hustle"
        style={{ opacity: visibleSections.hustle ? 1 : 0, transform: visibleSections.hustle ? 'translateY(0)' : 'translateY(60px)' }}>
        <span className="year-badge">THE HUSTLE</span>
        <div className="story-content">
          <p className="story-text">
            For years, I did what millions of founders do quietly—
          </p>
          <p className="story-text highlight">
            I worked. I hustled. I generated income.
          </p>
          <p className="story-text">
            Not to get rich—but to stand back up.
          </p>
          <p className="story-text">
            Custardly stayed with me the whole time.
          </p>
          <p className="story-text">
            Not on paper. Not in factories.
          </p>
          <p className="story-text emphasis">
            But in my mind.
          </p>
          <p className="story-text highlight">
            I promised myself:<br />
            "If this idea ever comes back, it will come back stronger."
          </p>
        </div>
      </section>

      {/* The Return - 2025 */}
      <section className="story-section comeback-section" data-story-section="comeback"
        style={{ opacity: visibleSections.comeback ? 1 : 0, transform: visibleSections.comeback ? 'translateY(0)' : 'translateY(60px)' }}>
        <div className="decorative-corner corner-tl"></div>
        <div className="decorative-corner corner-tr"></div>
        <div className="decorative-corner corner-bl"></div>
        <div className="decorative-corner corner-br"></div>
        <span className="year-badge">2025</span>
        <div className="story-content">
          <p className="story-text highlight">
            In 2025, during Durga Puja, Custardly returned—
          </p>
          <p className="story-text emphasis">
            not with investors, not with ads—but with faith.
          </p>
          <p className="story-text">
            We produced just 100 cups.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">₹110</div>
            <div className="stat-label">MRP</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">₹87</div>
            <div className="stat-label">Net Realization</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">₹60</div>
            <div className="stat-label">Making Cost</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">₹27</div>
            <div className="stat-label">Profit Per Cup</div>
          </div>
        </div>

        <div className="story-content">
          <p className="story-text">
            This time, I didn't wait for marketing.
          </p>
          <p className="story-text">
            I stood personally in front of the shops.
          </p>
          <p className="story-text">
            I spoke to customers.
          </p>
          <p className="story-text">
            I explained to shopkeepers.
          </p>
          <p className="story-text">
            I told parents why this was better than unhealthy ice cream.
          </p>
          <p className="story-text highlight">
            I sold not a product—but a purpose.
          </p>
          <p className="story-text emphasis">
            And something unbelievable happened.
          </p>
        </div>
      </section>

      {/* The Truth */}
      <section className="story-section" data-story-section="truth"
        style={{ opacity: visibleSections.truth ? 1 : 0, transform: visibleSections.truth ? 'translateY(0)' : 'translateY(60px)' }}>
        <div className="story-content">
          <p className="story-text">
            We didn't fail in 2019.
          </p>
          <p className="story-text emphasis">
            We were delayed.
          </p>
          <p className="story-text">
            We didn't stop because we lacked ideas.
          </p>
          <p className="story-text">
            We stopped because life demanded resilience first.
          </p>
          <p className="story-text highlight">
            Custardly was always waiting for the right opportunity, 
            the right guidance, and the right ecosystem to scale.
          </p>
        </div>
      </section>

      {/* Final Section */}
      <section className="final-section">
        <h2 className="final-quote">
          Why Custardly Exists
        </h2>
        <p className="final-text">
          Custardly is not just a dessert.
        </p>
        <p className="final-text emphasis">
          It is a son honoring his father's dream.
        </p>
        <p className="final-text emphasis">
          A comeback after loss.
        </p>
        <p className="final-text emphasis">
          A healthier alternative without sacrificing joy.
        </p>
        <p className="final-text emphasis">
          A product proven on the streets before the boardroom.
        </p>
        <p className="final-text highlight" style={{ marginTop: '3rem' }}>
          We didn't chase trends.<br />
          We waited for truth.
        </p>
        <p className="final-text highlight">
          And the truth is—
        </p>
        <p className="final-quote" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginTop: '2rem' }}>
          People don't just buy Custardly.<br />
          They believe in it.
        </p>
        <div className="signature">— Custardly</div>
      </section>
    </div>
  );
}