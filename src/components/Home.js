import React from 'react';
import './Home.css';
import CustImg from '../pics/custardly.jpg';
import StrawberryImg from '../pics/straw.jpeg';
import BlueberryImg from '../pics/blue.jpeg';
import MangoImg from '../pics/mango.jpeg';
import RaspberryImg from '../pics/last.jpeg';
import Size1 from '../pics/size1.jpeg';
import Size2 from '../pics/size2.jpeg';
import Size3 from '../pics/size3.jpeg';
import Duo from '../pics/duo.jpeg';
export default function CustardlyLanding() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const styles = {
    container: {
      fontFamily: 'Georgia, serif',
      backgroundColor: '#050000ff',
      color: 'gradient(180deg, #ffeb86ff 0%, #b39918ff 100%)',
      
      padding: 0,
      margin: 0,
    },
    About: {
      display: 'flex',
      flexDirection: 'row',   
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    section: {
      padding: '3.5% 1% ',
      borderBottom: '1px solid #333',
      paddingBottom: '6%',
     height: '100%',
    },
    blurOverlay: {
  position: 'absolute',
  inset: 0,
  backdropFilter: 'blur(12px)',
  maskImage: 'linear-gradient(to center, transparent 60%, black)',
  WebkitMaskImage: 'linear-gradient(to center, transparent 60%, black)',
  pointerEvents: 'none',
},
    hero: {
      textAlign: 'center',
      background: 'linear-gradient(180deg, #1a1a1a 0%, #000 100%)',
      paddingTop: '70px',
      display: 'flex',
      justifyContent: 'space-around',
     
    },
    logo: {
      fontSize: '32px',
      fontWeight: 'bold',
      letterSpacing: '3px',
      marginBottom: '20px',
      background: 'linear-gradient(180deg, #fff1a1ff 10%, #ffb805ff 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow:   '2px 2px 4px rgba(0,0,0,0.6)',
      
    },
    heroTitle: {
      fontSize: '48px',
      fontFamily: "'Smythe', cursive",
      fontWeight: 'normal',
      margin: '20px 0',
      background: 'linear-gradient(180deg, #ffffffff 10%, #ccccccff 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow:   '2px 2px 4px rgba(0,0,0,0.6)',
    },
    heroSubtitle: {
      fontSize: '20px',
       background: 'linear-gradient(180deg, #fff1a1ff 10%, #ffb805ff 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow:   '2px 2px 4px rgba(0,0,0,0.6)',
      margin: '10px 0 30px',
    },
    heroText: {
       background: 'linear-gradient(180deg, #ffffffff 10%, #ccccccff 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow:   '2px 2px 4px rgba(0,0,0,0.6)',
      fontSize: '14px',
      margin: '10px 0',
    },
    buttonContainer: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      marginTop: '30px',
      flexWrap: 'wrap',
    },
    button: {
      padding: '12px 30px',
      fontSize: '16px',
      border: '2px solid #453603ff',
      background: 'linear-gradient(180deg, #dacd83ff 10%, #543d03ff 100%)',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'all 0.3s',
    },
    buttonOutline: {
      padding: '12px 30px',
      fontSize: '16px',
      border: '2px solid #453603ff',
      background: 'linear-gradient(180deg, #dacd83ff 10%, #543d03ff 100%)',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'all 0.3s',
    },
    sectionTitle: {
      fontFamily: "'Smythe', cursive",
      fontSize: '36px',
      textAlign: 'center',
      margin: '0 0 30px',
      color: 'transparent',
      background: 'linear-gradient(180deg, #fff1a1ff 10%, #ffb805ff 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow:   '2px 2px 4px rgba(0,0,0,0.6)',
      position: 'relative',
      paddingBottom: '20px',
    },
    titleDeco: {
      fontStyle:"'Smythe', cursive",  
      display: 'inline-block',
      padding: '0 20px',
      color: 'transparent',
      background: 'linear-gradient(180deg, #fff1a1ff 10%, #ffb805ff 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow:   '2px 2px 4px rgba(0,0,0,0.6)',
      position: 'relative',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    featureCard: {
      border: '2px solid',
        borderImage: 'linear-gradient(180deg, #efeeea 0%, #815e06 100%) 1',
      padding: '30px 20px',
      textAlign: 'center',
      background: 'rgba(212, 175, 55, 0.05)',
    },
    featureIcon: {
      fontSize: '48px',
      marginBottom: '15px',
    },
    featureTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: '10px 0',
      color: '#fff',
    },
    featureText: {
      fontSize: '12px',
      color: '#aaa',
      lineHeight: '1.6',
    },
    flavorsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '20px',
      maxWidth: '95%',
      maxHeight: '42vh',
      margin: '0 auto',
      paddingBottom: '70px',
    },
    flavorCard: {
      
      textAlign: 'center',
      background: 'rgba(212, 175, 55, 0.05)',
      cursor: 'pointer',
      transition: 'transform 0.3s',
      
    },
    flavorImage: {
  width: '100%',
  height: '100%',
  objectFit: 'cover',   // this makes the image fit properly
  borderRadius: '8px',
  display: 'block',
   WebkitMaskImage: 'radial-gradient(circle, black 65%, transparent 100%)',
  maskImage: 'radial-gradient(circle, black 65%, transparent 100%)',
},
    flavorName: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#d4af37',
    },
    sizesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '30px',
      maxWidth: '900px',
      margin: '0 auto',
    },
    sizeCard: {
      textAlign: 'center',
      
    },
    sizeImage: {
      maxWidth: '100%',
      maxHeight: '100%',
      background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
      borderRadius: '8px',
      display: 'flex',
      objectFit: 'cover',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '64px',
       WebkitMaskImage: 'radial-gradient(circle, black 65%, transparent 100%)',
       maskImage: 'radial-gradient(circle, black 65%, transparent 100%)',
    },
    sizeVolume: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#d4af37',
      margin: '10px 0 5px',
    },
    sizeLabel: {
      fontSize: '14px',
      color: '#aaa',
    },
    comparisonTable: {
      maxWidth: '800px',
      margin: '0 auto',
      borderCollapse: 'collapse',
    },
    tableRow: {
      borderBottom: '1px solid #333',
    },
    tableCell: {
      padding: '20px',
      textAlign: 'center',
      fontSize: '16px',
    },
    tableHeader: {
      fontWeight: 'bold',
      color: '#fff',
    },
    tagline: {
      textAlign: 'center',
      fontStyle: 'italic',
      color: '#aaa',
      marginTop: '30px',
      fontSize: '14px',
    },
    storyContent: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center',
    },
    storyQuote: {
      fontSize: '24px',
      fontStyle: 'italic',
      color: '#d4af37',
      marginBottom: '30px',
      lineHeight: '1.6',
    },
    storyText: {
      fontSize: '16px',
      color: '#aaa',
      margin: '10px 0',
      lineHeight: '1.8',
    },
    footer: {
      textAlign: 'center',
      padding: '60px 20px',
      background: '#000',
    },
    footerTitle: {
      fontSize: '32px',
      color: 'transparent',
      background: 'linear-gradient(180deg, #fff1a1ff 10%, #ffb805ff 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow:   '2px 2px 4px rgba(0,0,0,0.6)',
      marginBottom: '30px',
    },
  };

  const flavors = [
    { name: 'Strawberry Bliss', img: StrawberryImg },
    { name: 'Blueberry Delight', img: BlueberryImg },
    { name: 'Mango Chunks', img: MangoImg },
    { name: 'Raspberry Dream', img: RaspberryImg },
  ];

  return (
    <div style={styles.container}>
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <div>
        <div style={styles.logo}>CUSTARDLY°</div>
        <h1 style={styles.heroTitle}>The Future of Desserts</h1>
        <p style={styles.heroSubtitle}>A Healthier, Creamier Alternative to Ice Cream</p>
        <p style={styles.heroText}>Made with real fruits. No guilt. No compromise.</p>
        <p style={styles.heroText}>Ready-to-eat premium custard in elegant jars.</p>
        <div style={styles.buttonContainer}>
          <button style={styles.button}>Shop Now</button>
          <button style={styles.buttonOutline}>Our Story</button>
        </div>
        </div>
        <div>
            <img src={CustImg} alt="Custardly Dessert" style={{padding:"1px",maxHeight: isMobile ? '20vh' : '69vh', maxWidth: window.innerWidth > 768 ? '37vw' : '20vw'}} />
            
        </div>
      </div>
    </div>
        <div style={styles.container}>
      {/* Why Choose Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <span style={styles.titleDeco}>Why Choose Custardly?</span>
        </h2>
        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🍊</div>
            <div style={styles.featureTitle}>Real Fruit Chunks</div>
            <div style={styles.featureText}>
              Fresh Craft Banana and<br />Frozen Craft Agreement
            </div>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🚫</div>
            <div style={styles.featureTitle}>No Ice Cream Guilt</div>
            <div style={styles.featureText}>
              Maintain fitness & avoid<br />coconut fat sugar impact
            </div>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🥄</div>
            <div style={styles.featureTitle}>Smooth & Creamy Texture</div>
            <div style={styles.featureText}>
              Modern Tanji supplement
            </div>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🌾</div>
            <div style={styles.featureTitle}>Health-Focused Recipe</div>
            <div style={styles.featureText}>
              Most Cream Haven
            </div>
          </div>
        </div>
      </div>

      {/* Flavors Section */}
      <div style={styles.section }>
        <h2 style={styles.sectionTitle}>
          <span style={styles.titleDeco}>Explore Our Flavours</span>
        </h2>
        <div style={styles.flavorsGrid}>
          {flavors.map((flavor, index) => (
            <div key={index} style={styles.flavorCard}>
              <img
                src={flavor.img}
                alt="Flavours"
                style={styles.flavorImage}
                />
            </div> 
          ))}
        </div>
      </div>

      {/* Sizes Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <span style={styles.titleDeco}>Pick Your Size</span>
        </h2>
        <div style={styles.sizesGrid}>
          <div style={styles.sizeCard}>
            <div style={styles.sizeImage}><img src={Size1} alt="250ml Size" style={styles.sizeImage} /></div>
            
          </div>
          <div style={styles.sizeCard}>
            <div style={styles.sizeImage}><img src={Size2} alt="500ml Size" style={styles.sizeImage} /></div>
            
          </div>
          <div style={styles.sizeCard}>
            <div style={styles.sizeImage}><img src={Size3} alt="1000ml Size" style={styles.sizeImage} /></div>
            
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <span style={styles.titleDeco}>Ice Cream vs Custardly</span>
        </h2>
        <table style={styles.comparisonTable}>
          <tbody>
            <tr style={styles.tableRow}>
              <td style={{...styles.tableCell, ...styles.tableHeader}}>Heavy</td>
              <td style={{...styles.tableCell, color: '#d4af37'}}>Light</td>
            </tr>
            <tr style={styles.tableRow}>
              <td style={{...styles.tableCell, ...styles.tableHeader}}>Artificial</td>
              <td style={{...styles.tableCell, color: '#d4af37'}}>Fruit-Rich</td>
            </tr>
            <tr style={styles.tableRow}>
              <td style={{...styles.tableCell, ...styles.tableHeader}}>Guilt</td>
              <td style={{...styles.tableCell, color: '#d4af37'}}>Everyday Dessert</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.tagline}>Once you try Custardly, ice cream feels outdated.</p>
      </div>

      {/* Story Section */}
      <div style={styles.About}>
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <span style={styles.titleDeco}>Our Story</span>
        </h2>
        <div style={styles.storyContent}>
          <p style={styles.storyQuote}>
            "Born from a vision to replace ice cream<br />with something better."
          </p>
          <p style={styles.storyText}>Founded by two brothers.</p>
          <p style={styles.storyText}>Crafted for modern lifestyles.</p>
          <p style={styles.storyText}>Designed to look as premium as it tastes.</p>
        </div>
      </div>
      <div>
        <img src={Duo} alt="Our Story" style={{width: '100%', height: '400px', objectFit: 'cover'}} />
      </div>
</div>
      {/* Footer CTA */}
      <div style={styles.footer}>
        <h2 style={styles.footerTitle}>The Revolution Has a Taste</h2>
        <div style={styles.buttonContainer}>
          <button style={styles.button}>Order Custardly</button>
          <button style={styles.buttonOutline}>Become a Distributor</button>
        </div>
      </div>
    </div>
    </div>
  );
}