import React, { useState, useEffect } from 'react';
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
import IngredientsShowcase from './Ingredients';

export default function CustardlyLanding() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const [isVisible, setIsVisible] = useState({});
    const [heroLoaded, setHeroLoaded] = useState(false);

    useEffect(() => {
        // Hero animation on mount
        setTimeout(() => setHeroLoaded(true), 100);

        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible((prev) => ({
                            ...prev,
                            [entry.target.id]: true,
                        }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Observe all animated sections
        const sections = document.querySelectorAll('[data-animate]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const handleContact = () => {
        const message = encodeURIComponent("Hi, I want to contact you for Custardly products.");
        window.location.href = `https://wa.me/918597766538?text=${message}`;
    };

    const handleScroll = () => {
        const flavorsSection = document.getElementById('flavors-section');
        if (flavorsSection) {
            flavorsSection.scrollIntoView({ behavior: 'smooth' });
        }   
    };
    const handleStory = () => {
        window.location.href = "/story";
    }
    const NavigateTo = (url) => {
        window.location.href = "/ingredients";
    };

    const handleChange = () => {
        NavigateTo(IngredientsShowcase);
    };

    const styles = {
        container: {
            position: 'relative',
            fontFamily: 'Georgia, serif',
            backgroundColor: '#050000ff',
            overflow: 'hidden',
            padding: 0,
            margin: 0,
        },
        glow: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '920px',
            height: '260px',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 35%, rgba(0,0,0,0) 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
            animation: 'pulse 4s ease-in-out infinite',
        },
        About: {
            display: 'flex',
            flexDirection: 'row',   
            alignItems: 'center',
            justifyContent: 'space-around',
        },
        section: {
            padding: '3.5% 1%',
            borderBottom: '1px solid #333',
            paddingBottom: '6%',
            height: '100%',
        },
        hero: {
            textAlign: 'center',
            background: 'linear-gradient(180deg, #1a1a1a 0%, #000 100%)',
            paddingTop: '70px',
            display: 'flex',
            justifyContent: 'space-around',
        },
        logo: {
            fontSize: '42px',
            fontWeight: 'bold',
            letterSpacing: '3px',
            marginBottom: '20px',
            background: 'linear-gradient(180deg, #fff1a1ff 10%, #ffb805ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
            maskImage: 'radial-gradient(circle, black 65%, transparent 90%)',
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? 'translateY(0)' : 'translateY(-30px)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
        },
        heroTitle: {
            fontSize: '58px',
            fontFamily: "'Smythe', cursive",
            fontWeight: 'normal',
            margin: '20px 0',
            background: 'linear-gradient(180deg, #ffffffff 10%, #ccccccff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
        },
        heroSubtitle: {
            fontSize: '30px',
            background: 'linear-gradient(180deg, #fff1a1ff 10%, #ffb805ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
            margin: '10px 0 30px',
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? 'translateY(0)' : 'translateY(-10px)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
        },
        heroText: {
            background: 'linear-gradient(180deg, #ffffffff 10%, #ccccccff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
            fontSize: '20px',
            margin: '10px 0',
            opacity: heroLoaded ? 1 : 0,
            transition: 'all 0.8s ease 0.6s',
        },
        heroImage: {
            padding: "1px",
            maxHeight: isMobile ? '20vh' : '69vh',
            maxWidth: window.innerWidth > 768 ? '37vw' : '20vw',
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? 'scale(1) rotate(0deg)' : 'scale(0.9) rotate(-5deg)',
            transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s',
            filter: heroLoaded ? 'brightness(1)' : 'brightness(0.7)',
        },
        buttonContainer: {
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            marginTop: '30px',
            flexWrap: 'wrap',
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.8s',
        },
        button: {
            padding: '12px 30px',
            fontSize: '16px',
            border: '2px solid #453603ff',
            borderRadius: '4px',
            background: 'linear-gradient(180deg, #dacd83ff 10%, #543d03ff 100%)',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            color: 'black',
            position: 'relative',
            overflow: 'hidden',
        },
        buttonOutline: {
            padding: '12px 30px',
            fontSize: '16px',
            border: '2px solid #453603ff',
            borderRadius: '4px',
            color: '#f6eac2',
            background: 'transparent',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            position: 'relative',
            overflow: 'hidden',
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
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
            position: 'relative',
            paddingBottom: '20px',
        },
        titleDeco: {
            fontStyle: "'Smythe', cursive",  
            display: 'inline-block',
            padding: '0 20px',
            color: 'transparent',
            background: 'linear-gradient(180deg, #fff1a1ff 10%, #ffb805ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
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
            transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            cursor: 'pointer',
        },
        featureIcon: {
            fontSize: '48px',
            marginBottom: '15px',
            transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            display: 'inline-block',
        },
        featureTitle: {
            fontSize: '18px',
            fontWeight: 'bold',
            margin: '10px 0',
            color: '#fff',
            transition: 'color 0.3s ease',
        },
        featureText: {
            fontSize: '18px',
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
            transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
            position: 'relative',
            overflow: 'hidden',
        },
        flavorImage: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px',
            display: 'block',
            WebkitMaskImage: 'radial-gradient(circle, black 65%, transparent 100%)',
            maskImage: 'radial-gradient(circle, black 65%, transparent 100%)',
            transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
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
            transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            cursor: 'pointer',
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
            transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        },
        comparisonTable: {
            maxWidth: '800px',
            margin: '0 auto',
            borderCollapse: 'collapse',
        },
        tableRow: {
            borderBottom: '1px solid #333',
            transition: 'all 0.3s ease',
        },
        tableCell: {
            padding: '20px',
            textAlign: 'center',
            fontSize: '19px',
            transition: 'all 0.3s ease',
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
            fontSize: '18px',
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
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
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
            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }

                @keyframes shimmer {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }

                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-100px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(100px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-on-scroll {
                    opacity: 0;
                }

                .animate-on-scroll.visible {
                    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                .feature-card-animated {
                    opacity: 0;
                }

                .feature-card-animated.visible {
                    animation: scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }

                .feature-card-animated:nth-child(1) { animation-delay: 0.1s; }
                .feature-card-animated:nth-child(2) { animation-delay: 0.2s; }
                .feature-card-animated:nth-child(3) { animation-delay: 0.3s; }
                .feature-card-animated:nth-child(4) { animation-delay: 0.4s; }

                .flavor-card-animated {
                    opacity: 0;
                }

                .flavor-card-animated.visible {
                    animation: scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }

                .flavor-card-animated:nth-child(1) { animation-delay: 0.1s; }
                .flavor-card-animated:nth-child(2) { animation-delay: 0.2s; }
                .flavor-card-animated:nth-child(3) { animation-delay: 0.3s; }
                .flavor-card-animated:nth-child(4) { animation-delay: 0.4s; }

                .size-card-animated {
                    opacity: 0;
                }

                .size-card-animated.visible {
                    animation: fadeInUp 0.6s ease forwards;
                }

                .size-card-animated:nth-child(1) { animation-delay: 0.1s; }
                .size-card-animated:nth-child(2) { animation-delay: 0.2s; }
                .size-card-animated:nth-child(3) { animation-delay: 0.3s; }

                button:hover {
                    transform: translateY(-3px) scale(1.05);
                    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
                }

                button::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
                    transition: left 0.5s;
                }

                button:hover::before {
                    left: 100%;
                }

                .feature-card:hover {
                    transform: translateY(-10px) scale(1.03);
                    box-shadow: 0 15px 40px rgba(212, 175, 55, 0.3);
                    background: rgba(212, 175, 55, 0.15);
                }

                .feature-card:hover .feature-icon {
                    transform: scale(1.2) rotate(10deg);
                }

                .feature-card:hover .feature-title {
                    color: #d4af37;
                }

                .flavor-card:hover {
                    transform: scale(1.08) rotate(2deg);
                    box-shadow: 0 20px 50px rgba(212, 175, 55, 0.4);
                }

                .flavor-card:hover .flavor-image {
                    transform: scale(1.1);
                    filter: brightness(1.2);
                }

                .size-card:hover {
                    transform: translateY(-15px);
                }

                .size-card:hover .size-image {
                    transform: scale(1.05);
                    box-shadow: 0 20px 40px rgba(212, 175, 55, 0.3);
                }

                .table-row:hover {
                    background: rgba(212, 175, 55, 0.1);
                    transform: scale(1.02);
                }

                .table-row:hover .table-cell {
                    color: #d4af37;
                }

                .story-image {
                    transition: all 0.5s ease;
                }

                .story-image:hover {
                    transform: scale(1.05);
                    box-shadow: 0 20px 60px rgba(212, 175, 55, 0.4);
                }
            `}</style>

            <div style={styles.container}>
                {/* Hero Section */}
                <div style={styles.glow}></div>
                <div style={styles.hero}>
                    <div>
                        <div style={styles.logo}>CUSTARDLY°</div>
                        <h1 style={styles.heroTitle}>The Future of Desserts</h1>
                        <p style={styles.heroSubtitle}>A Healthier, Creamier Alternative to Ice Cream</p>
                        <p style={styles.heroText}>Made with real fruits. No guilt. No compromise.</p>
                        <p style={styles.heroText}>Ready-to-eat premium custard in elegant jars.</p>
                        <div style={styles.buttonContainer}>
                            <button style={styles.button} onClick={handleScroll}>Shop Now</button>
                            <button style={styles.buttonOutline} onClick={handleStory}>Our Story</button>
                        </div>
                    </div>
                    <div>
                        <img 
                            src={CustImg} 
                            alt="Custardly Dessert" 
                            style={styles.heroImage}
                        />
                    </div>
                </div>
            </div>

            <div style={styles.container}>
                <div style={styles.glow}></div>
                <div 
                    style={styles.section}
                    id="features-section"
                    data-animate
                >
                    <h2 
                        style={styles.sectionTitle}
                        className={`animate-on-scroll ${isVisible['features-section'] ? 'visible' : ''}`}
                    >
                        <span style={styles.titleDeco}>Why Choose Custardly?</span>
                    </h2>
                    <div style={styles.featuresGrid}>
                        {[
                            { icon: '🍊', title: 'Real Fruit Chunks', text: 'Fresh Craft Banana and\nFrozen Craft Agreement' },
                            { icon: '🚫', title: 'No Ice Cream Guilt', text: 'Maintain fitness & avoid\ncoconut fat sugar impact' },
                            { icon: '🥄', title: 'Smooth & Creamy Texture', text: 'Modern Tanji supplement' },
                            { icon: '🌾', title: 'Health-Focused Recipe', text: 'Most Cream Haven' }
                        ].map((feature, index) => (
                            <div 
                                key={index} 
                                style={styles.featureCard}
                                className={`feature-card feature-card-animated ${isVisible['features-section'] ? 'visible' : ''}`}
                            >
                                <div style={styles.featureIcon} className="feature-icon">{feature.icon}</div>
                                <div style={styles.featureTitle} className="feature-title">{feature.title}</div>
                                <div style={styles.featureText}>{feature.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Flavors Section */}
            <div style={styles.container} id="flavors-section" data-animate>
                <div style={styles.glow}></div>
                <div style={styles.section}>
                    <h2 
                        style={styles.sectionTitle}
                        className={`animate-on-scroll ${isVisible['flavors-section'] ? 'visible' : ''}`}
                    >
                        <span style={styles.titleDeco}>Explore Our Flavours</span>
                    </h2>
                    <div style={styles.flavorsGrid}>
                        {flavors.map((flavor, index) => (
                            <div 
                                key={index} 
                                style={styles.flavorCard}
                                className={`flavor-card flavor-card-animated ${isVisible['flavors-section'] ? 'visible' : ''}`}
                                onClick={handleChange}
                            >
                                <img
                                    src={flavor.img}
                                    alt="Flavours"
                                    style={styles.flavorImage}
                                    className="flavor-image"
                                />
                            </div> 
                        ))}
                    </div>
                </div>
            </div>

            <div style={styles.container}>
                <div style={styles.glow}></div>
                {/* Sizes Section */}
                <div 
                    style={styles.section}
                    id="sizes-section"
                    data-animate
                >
                    <h2 
                        style={styles.sectionTitle}
                        className={`animate-on-scroll ${isVisible['sizes-section'] ? 'visible' : ''}`}
                    >
                        <span style={styles.titleDeco}>Pick Your Size</span>
                    </h2>
                    <div style={styles.sizesGrid}>
                        {[Size1, Size2, Size3].map((size, index) => (
                            <div 
                                key={index} 
                                style={styles.sizeCard}
                                className={`size-card size-card-animated ${isVisible['sizes-section'] ? 'visible' : ''}`}
                            >
                                <div style={styles.sizeImage}>
                                    <img 
                                        src={size} 
                                        alt={`Size ${index + 1}`} 
                                        style={styles.sizeImage} 
                                        className="size-image"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Comparison Section */}
                <div 
                    style={styles.section}
                    id="comparison-section"
                    data-animate
                >
                    <h2 
                        style={styles.sectionTitle}
                        className={`animate-on-scroll ${isVisible['comparison-section'] ? 'visible' : ''}`}
                    >
                        <span style={styles.titleDeco}>Ice Cream vs Custardly</span>
                    </h2>
                    <table style={styles.comparisonTable}>
                        <tbody>
                            {[
                                ['Heavy', 'Light'],
                                ['Artificial', 'Fruit-Rich'],
                                ['Guilt', 'Everyday Dessert']
                            ].map((row, index) => (
                                <tr key={index} style={styles.tableRow} className="table-row">
                                    <td style={{...styles.tableCell, ...styles.tableHeader}} className="table-cell">{row[0]}</td>
                                    <td style={{...styles.tableCell, color: '#d4af37'}} className="table-cell">{row[1]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p style={styles.tagline}>Once you try Custardly, ice cream feels outdated.</p>
                </div>

                {/* Story Section */}
                <div style={styles.container}>
                    <div style={styles.glow}></div>
                    <div 
                        style={styles.About}
                        id="story-section"
                        data-animate
                    >
                        <div style={styles.section}>
                            <h2 
                                style={styles.sectionTitle}
                                className={`animate-on-scroll ${isVisible['story-section'] ? 'visible' : ''}`}
                            >
                                <span style={styles.titleDeco} onClick={handleStory}>Our Story</span>
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
                            <img 
                                src={Duo} 
                                alt="Our Story" 
                                style={{width: '100%', height: '400px', objectFit: 'cover'}}
                                className="story-image"
                            />
                        </div>
                    </div>
                </div>

                {/* Footer CTA */}
                <div style={styles.footer}>
                    <h2 style={styles.footerTitle}>The Revolution Has a Taste</h2>
                    <div style={styles.buttonContainer}>
                        <button style={styles.button} onClick={handleScroll}>Order Custardly</button>
                        <button style={styles.buttonOutline} onClick={handleContact}>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
}