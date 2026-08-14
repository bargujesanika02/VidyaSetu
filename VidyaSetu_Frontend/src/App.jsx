import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeTab, setActiveTab] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('onboarding'); // 'onboarding' | 'demo'
  const [emailInput, setEmailInput] = useState('');
  const [roleInput, setRoleInput] = useState('student');
  const [subscribed, setSubscribed] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const videoRef = useRef(null);

  // Toggle Video Play/Pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  // Toggle Video Sound
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Learning Tracks Data
  const courses = [
    {
      id: 1,
      title: 'Full-Stack Web Development & AI',
      category: 'Coding & AI',
      duration: '16 Weeks',
      level: 'Beginner to Advanced',
      rating: '4.9 ⭐',
      students: '12,400+',
      badge: 'High Demand',
      desc: 'Master React, Node.js, Python, and AI integrations with 10+ real-world projects and direct mentor code reviews.'
    },
    {
      id: 2,
      title: 'Mathematics & Science Bridge (Classes 9-12)',
      category: 'School & Board Prep',
      duration: 'Self-Paced',
      level: 'Intermediate',
      rating: '4.8 ⭐',
      students: '18,900+',
      badge: 'Popular',
      desc: 'Comprehensive visual lessons, interactive quizzes, and AI doubt resolution tailored for NCERT & State Boards.'
    },
    {
      id: 3,
      title: 'JEE & NEET Masterclass Series',
      category: 'Competitive Exams',
      duration: '24 Weeks',
      level: 'Advanced',
      rating: '4.95 ⭐',
      students: '9,800+',
      badge: 'Top Tier',
      desc: 'Rigorous mock exams, speed shortcuts, and personalized analytics to crack national entrance examinations.'
    },
    {
      id: 4,
      title: 'Data Science & Machine Learning Fundamentals',
      category: 'Coding & AI',
      duration: '12 Weeks',
      level: 'Intermediate',
      rating: '4.85 ⭐',
      students: '8,300+',
      badge: 'New',
      desc: 'Learn Pandas, Scikit-Learn, PyTorch, and data visualization to jumpstart your career as a Data Analyst.'
    },
    {
      id: 5,
      title: 'Digital Marketing & Entrepreneurship',
      category: 'Vocational Skills',
      duration: '8 Weeks',
      level: 'Beginner',
      rating: '4.7 ⭐',
      students: '6,100+',
      badge: 'Practical',
      desc: 'Build real ad campaigns, master SEO, social media algorithms, and online shop setup for small businesses.'
    },
    {
      id: 6,
      title: 'Communication & Professional English',
      category: 'Vocational Skills',
      duration: '6 Weeks',
      level: 'All Levels',
      rating: '4.9 ⭐',
      students: '14,200+',
      badge: 'Essential',
      desc: 'Boost interview confidence, workplace communication, and public speaking with live conversational practice.'
    }
  ];

  const filteredCourses = activeTab === 'All' 
    ? courses 
    : courses.filter(c => c.category === activeTab);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmailInput('');
      }, 4000);
    }
  };

  return (
    <div className="app-wrapper">
      {/* Navigation Header */}
      <header className="navbar">
        <div className="container navbar-inner">
          <a href="#" className="brand-logo" id="brand-link">
            <div className="brand-icon">V</div>
            <span>Vidya<span className="gradient-text">Setu</span></span>
          </a>

          <ul className="nav-links">
            <li><a href="#features" className="nav-link" id="nav-features">Pillars</a></li>
            <li><a href="#tracks" className="nav-link" id="nav-tracks">Learning Tracks</a></li>
            <li><a href="#testimonials" className="nav-link" id="nav-testimonials">Success Stories</a></li>
            <li><a href="#about" className="nav-link" id="nav-about">About Us</a></li>
          </ul>

          <div className="nav-actions">
            <button 
              className="btn btn-glass" 
              id="nav-login-btn"
              onClick={() => { setModalType('onboarding'); setModalOpen(true); }}
            >
              Sign In
            </button>
            <button 
              className="btn btn-primary" 
              id="nav-getstarted-btn"
              onClick={() => { setModalType('onboarding'); setModalOpen(true); }}
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION WITH ANIMATED BACKGROUND VIDEO */}
        <section className="hero-section" id="hero">
          <div className="hero-video-container">
            <video 
              ref={videoRef}
              className="hero-video"
              autoPlay 
              loop 
              muted={isMuted}
              playsInline
              preload="auto"
            >
              <source src="/hero-bg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="hero-overlay"></div>
          </div>

          {/* Video Play/Pause & Sound Controls */}
          <div className="video-control-bar">
            <button 
              className="video-control-btn" 
              onClick={togglePlay}
              title={isVideoPlaying ? "Pause Video" : "Play Video"}
              id="video-toggle-play"
            >
              {isVideoPlaying ? '⏸️ Pause Video' : '▶️ Play Video'}
            </button>
            <span style={{ color: '#475569' }}>|</span>
            <button 
              className="video-control-btn" 
              onClick={toggleMute}
              title={isMuted ? "Unmute Audio" : "Mute Audio"}
              id="video-toggle-sound"
            >
              {isMuted ? '🔇 Muted' : '🔊 Sound On'}
            </button>
          </div>

          <div className="container hero-content animate-fade-in">
            <div className="hero-badge-wrapper">
              <span className="badge badge-indigo">
                ✨ Next-Gen Education Bridge
              </span>
            </div>

            <h1 className="hero-headline">
              Bridging Ambition to Achievement with <span className="gradient-text">AI & Mentorship</span>
            </h1>

            <p className="hero-description">
              VidyaSetu is India's premier learning platform connecting students to personalized AI tutoring, 
              interactive career pathways, and real-world mentor guidance in your native language.
            </p>

            <div className="hero-ctas">
              <button 
                className="btn btn-primary" 
                id="hero-cta-explore"
                onClick={() => {
                  const element = document.getElementById('tracks');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Learning Tracks →
              </button>
              <button 
                className="btn btn-glass" 
                id="hero-cta-demo"
                onClick={() => { setModalType('demo'); setModalOpen(true); }}
              >
                Watch Platform Demo 🎥
              </button>
            </div>

            {/* Floating Glass Stats */}
            <div className="hero-stats-grid">
              <div className="hero-stat-card">
                <div className="hero-stat-number gradient-text">50,000+</div>
                <div className="hero-stat-label">Active Learners</div>
              </div>
              <div className="hero-stat-card">
                <div className="hero-stat-number gradient-text-alt">94%</div>
                <div className="hero-stat-label">Placement & Pass Rate</div>
              </div>
              <div className="hero-stat-card">
                <div className="hero-stat-number gradient-text-gold">200+</div>
                <div className="hero-stat-label">Industry Mentors</div>
              </div>
              <div className="hero-stat-card">
                <div className="hero-stat-number gradient-text">15+</div>
                <div className="hero-stat-label">Regional Languages</div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE PILLARS SECTION */}
        <section className="section-padding" id="features">
          <div className="container">
            <div className="badge badge-cyan" style={{ display: 'block', width: 'fit-content', margin: '0 auto 1rem auto' }}>
              Core Advantages
            </div>
            <h2 className="section-title">Why Students Choose <span className="gradient-text">VidyaSetu</span></h2>
            <p className="section-subtitle">
              We eliminate educational barriers through intelligent technology, local language accessibility, and real-world skill building.
            </p>

            <div className="features-grid">
              <div className="glass-card feature-card">
                <div className="feature-icon-wrapper">🤖</div>
                <h3 className="feature-title">24/7 AI Personal Tutor</h3>
                <p className="feature-desc">
                  VidyaBot breaks down complex formulas, code snippets, and concepts step-by-step in clear, easy-to-understand language anytime.
                </p>
              </div>

              <div className="glass-card feature-card">
                <div className="feature-icon-wrapper">🌉</div>
                <h3 className="feature-title">Structured Skill Bridges</h3>
                <p className="feature-desc">
                  From beginner coding to competitive exams, our curated learning bridges take you from basic concepts to career readiness.
                </p>
              </div>

              <div className="glass-card feature-card">
                <div className="feature-icon-wrapper">🎓</div>
                <h3 className="feature-title">1-on-1 Live Mentorship</h3>
                <p className="feature-desc">
                  Get personal guidance from university professors and industry engineers who help resolve doubts and review your projects.
                </p>
              </div>

              <div className="glass-card feature-card">
                <div className="feature-icon-wrapper">🗣️</div>
                <h3 className="feature-title">Multilingual Support</h3>
                <p className="feature-desc">
                  Learn seamlessly in Hindi, English, Tamil, Telugu, Bengali, and 10+ other regional Indian languages without missing a beat.
                </p>
              </div>

              <div className="glass-card feature-card">
                <div className="feature-icon-wrapper">💻</div>
                <h3 className="feature-title">Hands-on Labs & Projects</h3>
                <p className="feature-desc">
                  Practice in browser-based coding labs, interactive quizzes, and real-world portfolio challenges designed by experts.
                </p>
              </div>

              <div className="glass-card feature-card">
                <div className="feature-icon-wrapper">📜</div>
                <h3 className="feature-title">Verified Certification</h3>
                <p className="feature-desc">
                  Earn industry-recognized certificates shareable on LinkedIn and direct referrals to our hiring partner network.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LEARNING TRACKS EXPLORER */}
        <section className="section-padding" id="tracks" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
          <div className="container">
            <div className="badge badge-emerald" style={{ display: 'block', width: 'fit-content', margin: '0 auto 1rem auto' }}>
              Explore Pathways
            </div>
            <h2 className="section-title">Popular <span className="gradient-text">Learning Bridges</span></h2>
            <p className="section-subtitle">
              Choose your path and start building the skills needed for top academic and industry success.
            </p>

            {/* Filter Tabs */}
            <div className="track-tabs">
              {['All', 'Coding & AI', 'School & Board Prep', 'Competitive Exams', 'Vocational Skills'].map((tab) => (
                <button
                  key={tab}
                  className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                  id={`tab-${tab.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tracks Grid */}
            <div className="tracks-grid">
              {filteredCourses.map((course) => (
                <div className="glass-card track-card" key={course.id}>
                  <div>
                    <div className="track-header">
                      <span className="badge badge-indigo">{course.badge}</span>
                      <span className="rating-box">{course.rating}</span>
                    </div>

                    <h3 className="track-title">{course.title}</h3>

                    <div className="track-info">
                      <span>⏱️ {course.duration}</span>
                      <span>•</span>
                      <span>📊 {course.level}</span>
                    </div>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', marginBottom: '1.5rem' }}>
                      {course.desc}
                    </p>
                  </div>

                  <div className="track-footer">
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      👥 {course.students} enrolled
                    </span>
                    <button 
                      className="btn btn-outline" 
                      style={{ padding: '0.45rem 1.1rem', fontSize: '0.85rem' }}
                      id={`course-btn-${course.id}`}
                      onClick={() => { setSelectedCourse(course); setModalType('course'); setModalOpen(true); }}
                    >
                      View Syllabus →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="section-padding" id="testimonials">
          <div className="container">
            <div className="badge badge-indigo" style={{ display: 'block', width: 'fit-content', margin: '0 auto 1rem auto' }}>
              Student Voices
            </div>
            <h2 className="section-title">Transforming Futures Across <span className="gradient-text">India</span></h2>
            <p className="section-subtitle">
              Read how VidyaSetu enabled learners from tier-2 and tier-3 towns to achieve top academic ranks and tech careers.
            </p>

            <div className="testimonial-grid">
              <div className="glass-card testimonial-card">
                <p className="testimonial-quote">
                  "VidyaSetu's AI tutor helped me clear my doubts in Hindi whenever I got stuck late at night. The mentor code reviews gave me the confidence to crack my developer interviews!"
                </p>
                <div className="user-profile">
                  <div className="user-avatar">RS</div>
                  <div className="user-details">
                    <h4>Rahul Sharma</h4>
                    <p>Software Engineer @ Tech Systems (Indore)</p>
                  </div>
                </div>
              </div>

              <div className="glass-card testimonial-card">
                <p className="testimonial-quote">
                  "The JEE mock series and shortcut modules were a total game-changer. Being able to ask questions in regional language made complex Physics topics so clear."
                </p>
                <div className="user-profile">
                  <div className="user-avatar">AP</div>
                  <div className="user-details">
                    <h4>Ananya Patel</h4>
                    <p>JEE Ranker (Class of 2025)</p>
                  </div>
                </div>
              </div>

              <div className="glass-card testimonial-card">
                <p className="testimonial-quote">
                  "As a mentor on VidyaSetu, I'm thrilled to see students from rural areas build full-stack web applications and AI tools in just a few months. The platform is truly revolutionary."
                </p>
                <div className="user-profile">
                  <div className="user-avatar">VK</div>
                  <div className="user-details">
                    <h4>Dr. Vikram Kulkarni</h4>
                    <p>Senior Data Scientist & VidyaSetu Mentor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION BANNER */}
        <section className="section-padding">
          <div className="container">
            <div className="cta-banner">
              <div className="cta-banner-bg"></div>
              <div className="cta-content">
                <h2 className="cta-title">Ready to Build Your <span className="gradient-text">Bridge to Success?</span></h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                  Join over 50,000 students and start your learning journey with VidyaSetu today.
                </p>

                <form className="newsletter-form" onSubmit={handleSubscribe}>
                  <input 
                    type="email" 
                    placeholder="Enter your email address..." 
                    className="newsletter-input"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    required
                    id="newsletter-email-input"
                  />
                  <button type="submit" className="btn btn-primary" id="newsletter-submit-btn">
                    {subscribed ? '✓ Subscribed!' : 'Get Free Access'}
                  </button>
                </form>

                {subscribed && (
                  <p style={{ color: 'var(--accent-emerald)', marginTop: '0.75rem', fontWeight: '600' }}>
                    🎉 Thank you for subscribing! Check your inbox for exclusive VidyaSetu learning resources.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* MODALS */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalOpen(false)} id="modal-close-btn">&times;</button>
            
            {modalType === 'onboarding' && (
              <div>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
                  Join <span className="gradient-text">VidyaSetu</span>
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  Create your free account and access personalized AI learning tracks.
                </p>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.4rem', color: 'var(--text-secondary)' }}>
                    I am a:
                  </label>
                  <select 
                    value={roleInput} 
                    onChange={(e) => setRoleInput(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: 'white',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                    id="modal-role-select"
                  >
                    <option value="student" style={{ background: '#0F172A' }}>Student / Aspirant</option>
                    <option value="educator" style={{ background: '#0F172A' }}>Teacher / Educator</option>
                    <option value="mentor" style={{ background: '#0F172A' }}>Industry Mentor</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.4rem', color: 'var(--text-secondary)' }}>
                    Email Address:
                  </label>
                  <input 
                    type="email" 
                    placeholder="name@example.com"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: 'white',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                    id="modal-email-input"
                  />
                </div>

                <button 
                  className="btn btn-primary" 
                  style={{ width: '100%' }}
                  onClick={() => {
                    alert('Welcome to VidyaSetu! Your account setup link has been sent to your email.');
                    setModalOpen(false);
                  }}
                  id="modal-submit-btn"
                >
                  Continue to Learning Dashboard →
                </button>
              </div>
            )}

            {modalType === 'demo' && (
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                  VidyaSetu Platform Tour
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                  Experience our video preview and AI tutor showcase.
                </p>
                <div style={{ 
                  borderRadius: 'var(--radius-md)', 
                  overflow: 'hidden', 
                  background: '#000', 
                  marginBottom: '1rem',
                  aspectRatio: '16/9'
                }}>
                  <video controls autoPlay className="hero-video" style={{ width: '100%', height: '100%' }}>
                    <source src="/hero-bg.mp4" type="video/mp4" />
                  </video>
                </div>
                <button 
                  className="btn btn-glass" 
                  style={{ width: '100%' }}
                  onClick={() => setModalOpen(false)}
                >
                  Close Preview
                </button>
              </div>
            )}

            {modalType === 'course' && selectedCourse && (
              <div>
                <span className="badge badge-indigo" style={{ marginBottom: '0.75rem' }}>{selectedCourse.category}</span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{selectedCourse.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                  {selectedCourse.desc}
                </p>

                <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                    <span>⏱️ Duration: <strong>{selectedCourse.duration}</strong></span>
                    <span>⭐ Rating: <strong>{selectedCourse.rating}</strong></span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                    <span>📊 Skill Level: <strong>{selectedCourse.level}</strong></span>
                    <span>👥 Enrolled: <strong>{selectedCourse.students}</strong></span>
                  </div>
                </div>

                <button 
                  className="btn btn-primary" 
                  style={{ width: '100%' }}
                  onClick={() => {
                    alert(`Enrolled in ${selectedCourse.title}! Check your dashboard to begin.`);
                    setModalOpen(false);
                  }}
                  id="enroll-course-modal-btn"
                >
                  Enroll Now in Track →
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="footer" id="about">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="brand-logo" style={{ fontSize: '1.35rem' }}>
                <div className="brand-icon" style={{ width: '32px', height: '32px', fontSize: '0.9rem' }}>V</div>
                <span>Vidya<span className="gradient-text">Setu</span></span>
              </a>
              <p>
                Bridging educational gaps with AI tutoring, hands-on career tracks, and expert mentors across India.
              </p>
            </div>

            <div className="footer-col">
              <h4>Learning Tracks</h4>
              <ul>
                <li><a href="#tracks">Coding & AI</a></li>
                <li><a href="#tracks">School & Board Prep</a></li>
                <li><a href="#tracks">JEE & NEET Mastery</a></li>
                <li><a href="#tracks">Vocational Skills</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Platform</h4>
              <ul>
                <li><a href="#features">AI Personal Tutor</a></li>
                <li><a href="#features">Live Mentorship</a></li>
                <li><a href="#testimonials">Success Stories</a></li>
                <li><a href="#features">Certifications</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Company & Legal</h4>
              <ul>
                <li><a href="#">About VidyaSetu</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div>© {new Date().getFullYear()} VidyaSetu Education Inc. All rights reserved.</div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="#" id="footer-twitter">Twitter</a>
              <a href="#" id="footer-linkedin">LinkedIn</a>
              <a href="#" id="footer-github">GitHub</a>
              <a href="#" id="footer-youtube">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
