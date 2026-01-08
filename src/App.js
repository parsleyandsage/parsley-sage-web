import React, { useState, useRef } from 'react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('HOME');
  const [showDropdown, setShowDropdown] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pendingTab, setPendingTab] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const SALES_EMAIL = "sales@parsley-sage.com";
  const CURRENT_COLLECTION_PASS = "SAGE2026";
  const TABS = ['HOME', 'WORK WITH US', 'COLLECTIONS', 'PARSLEY & SAGE BOUTIQUES', 'OUR TEAM', 'OUR STORY'];

  const handleNavigation = (target) => {
    if (target === 'CURRENT_COLLECTIONS') {
      if (isUnlocked) {
        setCurrentPage('CURRENT_COLLECTIONS');
      } else {
        setPendingTab('CURRENT_COLLECTIONS');
        setCurrentPage('PASSWORD_PROMPT');
      }
    } else {
      setCurrentPage(target);
    }
    setFormSubmitted(false);
    window.scrollTo(0, 0);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === CURRENT_COLLECTION_PASS) {
      setIsUnlocked(true);
      setCurrentPage(pendingTab);
    } else {
      alert("Incorrect Password");
    }
  };

  const Footer = () => (
    <footer style={styles.footer}>
      <div style={styles.footerTop}>
        <div style={styles.footerCol}>
          <h4 style={styles.footerHeading}>SITE MAP</h4>
          <ul style={styles.footerList}>
            <li style={styles.footerLink} onClick={() => handleNavigation('HOME')}>Home</li>
            <li style={styles.footerLink} onClick={() => handleNavigation('OUR STORY')}>Our Story</li>
            <li style={styles.footerLink} onClick={() => handleNavigation('WORK WITH US')}>Contact Us</li>
          </ul>
        </div>
        <div style={styles.footerCol}>
          <h4 style={styles.footerHeading}>CONTACT INFO</h4>
          <p style={styles.footerText}>555-555-5555<br/>info@parsley-sage.com<br/>1234 Street, New York, NY 10001</p>
        </div>
        <div style={styles.footerCol}>
          <p style={styles.copyright}>© Copyright 2026. All rights reserved.</p>
          <div style={styles.smallLogo}>PARSLEY & SAGE</div>
        </div>
      </div>
    </footer>
  );

  const renderContent = () => {
    switch (currentPage) {
      case 'HOME':
        return (
          <>
            <section style={styles.hero}>
              <h1 style={styles.mainLogoText}>PARSLEY & SAGE</h1>
              <p style={styles.tagline}>CRAFTED IN FRANCE & INDIA</p>
            </section>
            <section style={styles.collectionsSection}>
              <div style={styles.collectionHeader}>
                <h2 style={styles.sectionTitle}>COLLECTIONS</h2>
                <p style={styles.seasonText}>PREVIEW OUR LATEST LOOKS</p>
              </div>
              <div style={styles.imageRow}>
                <div style={styles.collectionCard}>
                  <p style={styles.seasonTextSmall}>SPRING SUMMER 2026</p>
                  <div style={styles.imagePlaceholder}>[Catalog Front Cover - Spring]</div>
                </div>
                <div style={styles.collectionCard}>
                  <p style={styles.seasonTextSmall}>FALL WINTER 2025</p>
                  <div style={styles.imagePlaceholder}>[Catalog Front Cover - Fall]</div>
                </div>
              </div>
            </section>
          </>
        );

      case 'OUR STORY':
        return (
          <div style={styles.storyPage}>
            <div style={styles.storyHero}>
              <div style={styles.familyPhotoPlaceholder}>
                <p style={{color: '#888'}}>[Insert Family Photo of Manjit, Preet, & Sharan here]</p>
              </div>
            </div>
            
            <section style={styles.storyContent}>
              <div style={styles.storyColumn}>
                <h2 style={styles.serifHeading}>THE AMERICAN DREAM</h2>
                <p style={styles.storySub}>ESTABLISHED 1995 | MARIETTA, GA</p>
                
                <p style={styles.storyText}>
                  Parsley & Sage began its journey in 1995 in Marietta, Georgia. 
                  Two brothers, Preet and Sharan, sat down with their father, Manjit, 
                  and dreamed up something special. What started as a simple family idea has grown into Parsley & Sage, 
                  a brand we’re all mighty proud of.
                </p>
                
                <p style={styles.storyText}>
                  We’re still family-owned and family-run, just like we began. That means every decision comes from the heart, guided by 
                  the same values our dad passed down: hard work, honesty, and a real love for beautiful clothes.
                </p>

                <p style={styles.storyText}>
                  Our collections blend gorgeous embroidery and artistic details, crafted with care in workshops in India and France. 
                  We bring those unique, one-of-a-kind pieces straight to boutiques and retailers across the United States and beyond—those 
                  charming downtown “Mom and Pop” shops we grew up loving.
                </p>

                <p style={styles.storyText}>
                  Today, our family has grown to a dedicated team of 15, supported by 8 experienced sales representatives 
                  who share our passion for fashion. Parsley & Sage is a true family story—a little piece of the American Dream, stitched
                  together with love, legacy, and a deep commitment to our boutiques.
                </p>

                <p style={styles.storyText}>
                  We’re grateful for every boutique that carries our line, and we can’t wait to keep growing alongside you.
                </p>
              </div>
            </section>
          </div>
        );

      case 'OUR TEAM':
        return (
          <div style={styles.storyPage}>
            <section style={{...styles.storyHero, paddingBottom: '20px'}}>
              <h2 style={styles.serifHeading}>MEET THE TEAM</h2>
              <p style={styles.storySub}>THE HEART OF PARSLEY & SAGE</p>
            </section>

            <section style={{padding: '0 10% 80px 10%'}}>
              <div style={{
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 300px)', 
                justifyContent: 'center', 
                gap: '60px', 
                margin: '0 auto' 
              }}>
                <div style={styles.teamCard}>
                  <img src="/images/PreetHS.png" alt="Preet" style={styles.portraitImage} />
                  <h4 style={styles.teamName}>PREET</h4>
                  <p style={styles.teamRole}>Co-Owner</p>
                </div>
                <div style={styles.teamCard}>
                  <img src="/images/sharan.jpg" alt="Sharan" style={styles.portraitImage} />
                  <h4 style={styles.teamName}>SHARAN</h4>
                  <p style={styles.teamRole}>Co-Owner</p>
                </div>
              </div>

              <hr style={{border: 'none', borderTop: '1px solid #eee', margin: '80px 0'}} />

              <div style={{textAlign: 'center', marginBottom: '60px'}}>
                <h3 style={styles.sectionTitle}>OUR SALES REPRESENTATIVES</h3>
                <p style={styles.seasonText}>PARTNERS ACROSS THE NATION</p>
              </div>
              
              <div style={{
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
                gap: '40px',
                maxWidth: '1200px',
                margin: '0 auto'
              }}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(rep => (
                  <div key={rep} style={{textAlign: 'center'}}>
                    <img src={`/images/rep${rep}.png`} alt="Representative" style={styles.repPortraitImage} />
                    <p style={{fontWeight: 'bold', fontSize: '13px', marginBottom: '5px', letterSpacing: '1px'}}>Representative Name</p>
                    <p style={{fontSize: '10px', color: '#888', letterSpacing: '1px', textTransform: 'uppercase'}}>Territory</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      case 'WORK WITH US':
        return (
          <div style={styles.formContainer}>
            <h2 style={styles.serifHeading}>WORK WITH US</h2>
            <p style={styles.formSubtitle}>Send a message to our sales team.</p>
            <form action={`mailto:${SALES_EMAIL}`} method="post" encType="text/plain" style={styles.workForm}>
              <div style={styles.formRow}>
                <input type="text" name="name" placeholder="Name" style={styles.formInput} required />
                <input type="tel" name="phone" placeholder="Phone" style={styles.formInput} required />
              </div>
              <input type="email" name="email" placeholder="Email" style={styles.formInput} required />
              <textarea name="message" placeholder="Message" style={{...styles.formInput, height: '150px'}} required></textarea>
              <button type="submit" style={styles.formSubmitBtn}>SEND MESSAGE</button>
            </form>
          </div>
        );

      case 'PARSLEY & SAGE BOUTIQUES':
        return (
          <div style={styles.boutiquePage}>
            <section style={styles.boutiqueHeader}>
              <h2 style={styles.serifHeading}>OUR RETAILERS</h2>
              <p style={styles.boutiqueSub}>FIND A BOUTIQUE NEAR YOU</p>
            </section>
            <section style={styles.mapSection}>
              <div style={styles.mapContainer}>
                <iframe 
                  title="Parsley and Sage Retailers"
                  src="https://www.google.com/maps/d/u/3/embed?mid=1CivPlYq5YERTWZBU2suOxSUQNIYfVzo&ehbc=2E312F" 
                  style={styles.mapIframe}
                  allowFullScreen="" 
                  loading="lazy" 
                />
              </div>
            </section>
          </div>
        );

      case 'PASSWORD_PROMPT':
        return (
          <div style={styles.passwordContainer}>
            <h2 style={styles.serifHeading}>SECURE ACCESS</h2>
            <p style={styles.formSubtitle}>Enter the password to view the Current Collections Catalog.</p>
            <form onSubmit={handlePasswordSubmit} style={styles.workForm}>
              <input 
                type="password" 
                value={passwordInput} 
                onChange={(e) => setPasswordInput(e.target.value)}
                style={styles.formInput}
                placeholder="Password"
              />
              <button type="submit" style={styles.formSubmitBtn}>UNLOCK CATALOG</button>
            </form>
          </div>
        );

      case 'CURRENT_COLLECTIONS':
        return (
          <div style={styles.catalogPage}>
            <h2 style={styles.serifHeading}>CURRENT COLLECTIONS</h2>
            <div style={styles.fullCatalogGrid}>
              <div style={styles.catalogSpread}>[Full Lookbook Page 1]</div>
              <div style={styles.catalogSpread}>[Full Lookbook Page 2]</div>
            </div>

            <div style={styles.orderFormContainer}>
              {!formSubmitted ? (
                <>
                  <h3 style={{...styles.sectionTitle, textAlign: 'center', marginBottom: '10px'}}>PLACE AN ORDER</h3>
                  <p style={{...styles.seasonText, textAlign: 'center', marginBottom: '30px'}}>REQUEST AVAILABILITY FROM OUR SALES TEAM</p>
                  
                  <form 
                    onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}
                    action={`mailto:${SALES_EMAIL}`} 
                    method="post" 
                    encType="text/plain" 
                    style={styles.catalogForm}
                  >
                    <input type="text" name="boutique" placeholder="The Boutique Name" style={styles.catalogInput} required />
                    <input type="text" name="name" placeholder="Your Full Name" style={styles.catalogInput} required />
                    <div style={styles.formRow}>
                      <input type="tel" name="phone" placeholder="Phone Number" style={styles.catalogInput} required />
                      <input type="email" name="email" placeholder="Email Address" style={styles.catalogInput} required />
                    </div>
                    <textarea 
                      name="order" 
                      placeholder="Type your order details here (Style numbers, sizes, quantities)..." 
                      style={{...styles.catalogInput, height: '200px', resize: 'vertical'}} 
                      required 
                    />
                    <button type="submit" style={styles.catalogSubmitBtn}>SUBMIT REQUEST</button>
                  </form>
                </>
              ) : (
                <div style={{textAlign: 'center', padding: '40px 0'}}>
                  <p style={{fontSize: '18px', lineHeight: '1.6', color: '#333'}}>
                    Thanks for placing your order, a representative from our Customer Support Team will reach out to confirm details and availability of goods. For more questions feel free to call at 678.290.9293 - The Parsley & Sage Team
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    style={{...styles.catalogSubmitBtn, width: 'auto', padding: '10px 30px', marginTop: '30px'}}
                  >
                    SUBMIT ANOTHER REQUEST
                  </button>
                </div>
              )}
            </div>
          </div>
        );

      case 'PREVIOUS_COLLECTIONS':
        return (
          <div style={styles.catalogPage}>
            <h2 style={styles.serifHeading}>PREVIOUS COLLECTIONS</h2>
            <div style={styles.imageRow}>
              <div style={styles.imagePlaceholder}>[Archive Lookbook 2024]</div>
              <div style={styles.imagePlaceholder}>[Archive Lookbook 2023]</div>
            </div>
          </div>
        );

      default:
        return <div style={styles.placeholderPage}><h2 style={styles.serifHeading}>{currentPage}</h2></div>;
    }
  };

  return (
    <div style={styles.appWrapper}>
      <header style={styles.header}>
        <div style={styles.miniLogo}>P&S</div>
        <nav style={styles.nav}>
          {TABS.map((tab) => (
            <div 
              key={tab} 
              style={{ position: 'relative' }}
              onMouseEnter={() => tab === 'COLLECTIONS' && setShowDropdown(true)}
              onMouseLeave={() => tab === 'COLLECTIONS' && setShowDropdown(false)}
            >
              <button
                onClick={() => tab !== 'COLLECTIONS' && handleNavigation(tab)}
                style={{ ...styles.navBtn, border: currentPage === tab || (tab === 'COLLECTIONS' && currentPage.includes('COLLECTIONS')) ? '1px solid #7D8461' : 'none' }}
              >
                {tab}
              </button>
              {tab === 'COLLECTIONS' && showDropdown && (
                <div style={styles.dropdown}>
                  <div style={styles.dropdownItem} onClick={() => handleNavigation('CURRENT_COLLECTIONS')}>Current Collections (PW NEEDED)</div>
                  <div style={styles.dropdownItem} onClick={() => handleNavigation('PREVIOUS_COLLECTIONS')}>Previous Collections</div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </header>
      <main style={styles.mainContent}>{renderContent()}</main>
      <Footer />
    </div>
  );
};

const styles = {
  appWrapper: { backgroundColor: '#404040', minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Times New Roman', serif" },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 40px', backgroundColor: '#404040', borderBottom: '1px solid #555', position: 'absolute', width: '100%', boxSizing: 'border-box', zIndex: 100 },
  miniLogo: { color: '#fff', fontWeight: 'bold', fontSize: '12px', border: '1px solid #fff', padding: '5px' },
  nav: { display: 'flex', gap: '20px' },
  navBtn: { background: 'none', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '11px', letterSpacing: '1px', padding: '8px 15px' },
  mainContent: { flex: 1 },
  
  storyPage: { backgroundColor: '#fff', color: '#333', minHeight: '100vh', paddingTop: '80px' },
  storyHero: { padding: '80px 10% 40px 10%', textAlign: 'center' },
  familyPhotoPlaceholder: { width: '100%', maxWidth: '900px', height: '500px', backgroundColor: '#f5f5f5', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #eee' },
  storyContent: { padding: '40px 10% 120px 10%', display: 'flex', justifyContent: 'center' },
  storyColumn: { maxWidth: '800px', textAlign: 'center' },
  storySub: { letterSpacing: '3px', fontSize: '12px', color: '#888', marginBottom: '30px' },
  storyText: { fontSize: '18px', lineHeight: '1.8', marginBottom: '25px', color: '#444' },

  teamCard: { textAlign: 'center' },
  portraitImage: {
    width: '100%',
    aspectRatio: '3/4',
    objectFit: 'cover',
    border: '1px solid #eee',
    marginBottom: '20px',
    display: 'block'
  },
  repPortraitImage: {
    width: '100%',
    aspectRatio: '1/1',
    objectFit: 'cover',
    borderRadius: '2px',
    border: '1px solid #eee',
    marginBottom: '15px'
  },
  teamName: { fontSize: '20px', letterSpacing: '2px', margin: '10px 0 5px 0', color: '#333' },
  teamRole: { fontSize: '11px', color: '#888', letterSpacing: '1px', textTransform: 'uppercase' },
  
  hero: { 
    height: '100vh', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    color: '#fff',
    backgroundColor: '#404040' 
  },
  mainLogoText: { fontSize: '72px', letterSpacing: '12px', fontWeight: '300', margin: '0' },
  tagline: { fontSize: '12px', letterSpacing: '4px', marginTop: '10px', color: '#ccc' },
  collectionsSection: { backgroundColor: '#fff', padding: '120px 10% 80px 10%', color: '#333' },
  imageRow: { display: 'flex', justifyContent: 'center', gap: '50px' },
  imagePlaceholder: { width: '400px', height: '500px', backgroundColor: '#f0f0f0', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  seasonText: { fontSize: '10px', color: '#888', marginBottom: '40px' },
  sectionTitle: { fontSize: '24px', letterSpacing: '2px', marginBottom: '5px' },
  seasonTextSmall: { fontSize: '10px', color: '#888', marginBottom: '10px', textAlign: 'center' },
  
  boutiquePage: { backgroundColor: '#404040', color: '#fff', minHeight: '100vh', paddingTop: '100px' },
  boutiqueHeader: { textAlign: 'center', padding: '60px 20px' },
  boutiqueSub: { letterSpacing: '4px', fontSize: '11px', color: '#ccc' },
  mapSection: { padding: '0 5% 80px 5%' },
  mapContainer: { border: '1px solid #7D8461', borderRadius: '2px', overflow: 'hidden' },
  mapIframe: { width: '100%', height: '650px', border: '0' },

  formContainer: { minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#fff' },
  passwordContainer: { height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#fff' },
  workForm: { display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', maxWidth: '600px', marginTop: '20px' },
  formRow: { display: 'flex', gap: '15px' },
  formInput: { padding: '15px', background: 'transparent', border: '1px solid #777', color: '#fff', outline: 'none' },
  formSubmitBtn: { padding: '15px', border: '1px solid #fff', background: 'transparent', color: '#fff', cursor: 'pointer', letterSpacing: '2px' },
  formSubtitle: { fontSize: '14px', letterSpacing: '1px', color: '#ccc' },

  catalogPage: { padding: '150px 10% 80px 10%', backgroundColor: '#fff', color: '#333', minHeight: '100vh', textAlign: 'center' },
  fullCatalogGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '40px', marginBottom: '80px' },
  catalogSpread: { height: '600px', backgroundColor: '#f9f9f9', border: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  orderFormContainer: { maxWidth: '800px', margin: '0 auto', padding: '60px 40px', backgroundColor: '#fbfaf8', border: '1px solid #eee', textAlign: 'left' },
  catalogForm: { display: 'flex', flexDirection: 'column', gap: '15px' },
  catalogInput: { padding: '15px', background: '#fff', border: '1px solid #ddd', color: '#333', outline: 'none', fontSize: '14px' },
  catalogSubmitBtn: { padding: '18px', backgroundColor: '#404040', color: '#fff', border: 'none', cursor: 'pointer', letterSpacing: '2px', fontSize: '12px', fontWeight: 'bold' },

  dropdown: { position: 'absolute', top: '100%', left: 0, backgroundColor: '#F2EDE4', width: '200px', boxShadow: '0 8px 16px rgba(0,0,0,0.2)', padding: '10px 0', border: '1px solid #ddd' },
  dropdownItem: { padding: '12px 20px', fontSize: '11px', color: '#666', cursor: 'pointer', letterSpacing: '1px' },

  footer: { backgroundColor: '#F2EDE4', padding: '60px 10%', color: '#666' },
  footerTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' },
  footerHeading: { fontSize: '12px', color: '#333', marginBottom: '20px', letterSpacing: '1px' },
  footerList: { listStyle: 'none', padding: '0', fontSize: '12px', lineHeight: '2.5' },
  footerLink: { cursor: 'pointer' },
  footerText: { fontSize: '12px', lineHeight: '1.8' },
  smallLogo: { fontSize: '18px', fontWeight: 'bold', letterSpacing: '2px', marginTop: '30px', color: '#333' },
  copyright: { fontSize: '10px', color: '#999' },
  serifHeading: { fontSize: '38px', fontFamily: 'serif' },
  placeholderPage: { height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }
};


export default App;
