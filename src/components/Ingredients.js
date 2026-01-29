import React, { useState, useEffect } from 'react';

export default function IngredientsShowcase() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const ingredients = [
    { name: 'Milk', icon: '🥛', description: 'Pure and creamy' },
    { name: 'Water', icon: '💧', description: 'Crystal clear' },
    { name: 'Jaggery', icon: '🍯', description: 'Natural sweetener' },
    { name: 'Maize Starch', icon: '🌽', description: 'Silky smooth texture' },
    { name: 'Fruit Pulp (x%)', icon: '🍑', description: 'Fresh & vibrant' },
    { name: 'Natural Vanilla', icon: '🌿', description: 'Aromatic essence' },
    { name: 'Nuts & Pista', icon: '🥜', description: 'Crunchy delight' },
    { name: 'Iodized Salt', icon: '🧂', description: 'Perfect balance' }
  ];
  const NavigateTo = () => {
    window.location.href = '/';
  }
  return (
    <div className="container">
        <div style={{fontSize:"40px",background: 'linear-gradient(180deg, #fff1a1ff 10%, #ffb805ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)'}} onClick={NavigateTo} ><p>Custardly</p></div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Montserrat:wght@300;400;500&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: #0a0a0a;
          overflow-x: hidden;
        }

        .container {
          min-height: 100vh;
          background: 
            radial-gradient(ellipse at 20% 20%, rgba(184, 134, 11, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(218, 165, 32, 0.06) 0%, transparent 50%),
            linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%);
          color: #d4af37;
          font-family: 'Montserrat', sans-serif;
          position: relative;
          padding: 4rem 2rem;
        }

        .grain-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
          opacity: 0.4;
        }

        .content-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .header {
          text-align: center;
          margin-bottom: 5rem;
          opacity: ${isLoaded ? 1 : 0};
          transform: translateY(${isLoaded ? 0 : '30px'});
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .decorative-line {
          width: 120px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
          margin: 0 auto 2rem;
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
        }

        .main-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 300;
          letter-spacing: 0.15em;
         background: 'linear-gradient(180deg, #fff1a1ff 10%, #ffb805ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
          background-clip: text;
          margin-bottom: 1rem;
          position: relative;
        }

        .subtitle {
          font-size: clamp(0.9rem, 2vw, 1.2rem);
          letter-spacing: 0.3em;
          background: 'linear-gradient(180deg, #fff1a1ff 10%, #ffb805ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
          font-weight: 300;
          text-transform: uppercase;
          margin-top: 1.5rem;
        }

        .ingredients-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
          margin-top: 4rem;
          padding: 0 1rem;
        }

        .ingredient-card {
          background: linear-gradient(135deg, rgba(20, 20, 20, 0.9) 0%, rgba(10, 10, 10, 0.95) 100%);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 2px;
          padding: 2.5rem 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: ${isLoaded ? 1 : 0};
          transform: translateY(${isLoaded ? 0 : '50px'});
        }

        .ingredient-card:nth-child(1) { transition-delay: 0.1s; }
        .ingredient-card:nth-child(2) { transition-delay: 0.2s; }
        .ingredient-card:nth-child(3) { transition-delay: 0.3s; }
        .ingredient-card:nth-child(4) { transition-delay: 0.4s; }
        .ingredient-card:nth-child(5) { transition-delay: 0.5s; }
        .ingredient-card:nth-child(6) { transition-delay: 0.6s; }
        .ingredient-card:nth-child(7) { transition-delay: 0.7s; }
        .ingredient-card:nth-child(8) { transition-delay: 0.8s; }

        .ingredient-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .ingredient-card:hover {
          border-color: rgba(212, 175, 55, 0.6);
          transform: translateY(-8px);
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.5),
            0 0 40px rgba(212, 175, 55, 0.15),
            inset 0 1px 0 rgba(212, 175, 55, 0.2);
        }

        .ingredient-card:hover::before {
          opacity: 1;
        }

        .card-corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 1px solid rgba(212, 175, 55, 0.3);
        }

        .corner-tl { top: 10px; left: 10px; border-right: none; border-bottom: none; }
        .corner-tr { top: 10px; right: 10px; border-left: none; border-bottom: none; }
        .corner-bl { bottom: 10px; left: 10px; border-right: none; border-top: none; }
        .corner-br { bottom: 10px; right: 10px; border-left: none; border-top: none; }

        .ingredient-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          display: block;
          filter: drop-shadow(0 4px 12px rgba(212, 175, 55, 0.2));
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .ingredient-card:hover .ingredient-icon {
          transform: scale(1.15) rotate(5deg);
        }

        .ingredient-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 600;
          background: 'linear-gradient(180deg, #fff1a1ff 10%, #ffb805ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
          margin-bottom: 0.8rem;
          letter-spacing: 0.05em;
        }

        .ingredient-description {
          font-size: 0.95rem;
          color: #a89968;
          letter-spacing: 0.05em;
          line-height: 1.6;
          font-weight: 300;
        }

        .footer {
          text-align: center;
          margin-top: 6rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(212, 175, 55, 0.1);
          opacity: ${isLoaded ? 1 : 0};
          transition: opacity 1.5s ease 1s;
        }

        .footer-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          color: #8b7355;
          letter-spacing: 0.1em;
          font-weight: 300;
        }

        .gold-accent {
          background: 'linear-gradient(180deg, #fff1a1ff 10%, #ffb805ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
          font-style: italic;
        }

        @media (max-width: 768px) {
          .container {
            padding: 3rem 1.5rem;
          }

          .ingredients-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .main-title {
            letter-spacing: 0.1em;
          }

          .subtitle {
            letter-spacing: 0.2em;
          }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        .shimmer-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(212, 175, 55, 0.1),
            transparent
          );
          animation: shimmer 3s infinite;
        }
      `}</style>

      <div className="grain-overlay"></div>
      
      <div className="content-wrapper">
        <header className="header">
          <div className="decorative-line"></div>
          <h1 className="main-title">INGREDIENTS</h1>
          <p className="subtitle">Pure · Natural · Premium</p>
        </header>

        <div className="ingredients-grid">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="ingredient-card">
              <div className="shimmer-effect"></div>
              <div className="card-corner corner-tl"></div>
              <div className="card-corner corner-tr"></div>
              <div className="card-corner corner-bl"></div>
              <div className="card-corner corner-br"></div>
              
              <span className="ingredient-icon">{ingredient.icon}</span>
              <h3 className="ingredient-name">{ingredient.name}</h3>
              <p className="ingredient-description">{ingredient.description}</p>
            </div>
          ))}
        </div>

        <footer className="footer">
          <p className="footer-text">
            Crafted with <span className="gold-accent">excellence</span> · Made with <span className="gold-accent">care</span>
          </p>
        </footer>
      </div>
    </div>
  );
}