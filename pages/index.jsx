import Head from 'next/head'

export default function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Is RideME free to use?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. All basic features are free with optional upgrades.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How do I pay for rides?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Pay directly via UPI to your ride partner.'
        }
      }
    ]
  }

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
        <title>RideME | Smart Bike Pooling & Cost-Sharing Ride App – Pune</title>
        <meta name="description" content="RideME is India’s safest and smartest bike ride-sharing app. Split fuel costs, get real-time matching, and travel with verified users. Gender-friendly and KYC-secured." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="RideME | Smart Bike Pooling" />
        <meta property="og:description" content="Cost-sharing rides with real-time matching and verified riders in Pune." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>
      <main>
        <header className="site-header">
          <nav>
            <a href="#about">About</a>
            <a href="#how">How It Works</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>
          <h1>Your Ride. Your Route. Shared Smartly.</h1>
          <a href="#pricing" className="cta">Start Sharing a Ride</a>
        </header>

        <section id="about">
          <h2>About RideME</h2>
          <p>
            RideME is a bike pooling platform based in Pune that helps commuters share fuel costs with safe, verified riders. Our real-time matching and gender-friendly options make bike sharing easy and secure.
          </p>
        </section>

        <section id="how">
          <h2>How It Works</h2>
          <div className="steps">
            <article>
              <svg role="img" aria-label="Register icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <h3>Register</h3>
              <p>Create your free account and verify your identity.</p>
            </article>
            <article>
              <svg role="img" aria-label="Match icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1"/><rect x="3" y="8" width="18" height="13" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="4"/><line x1="8" y1="2" x2="8" y2="4"/></svg>
              <h3>Match</h3>
              <p>Get paired with nearby riders in real time.</p>
            </article>
            <article>
              <svg role="img" aria-label="Ride icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="5.5" cy="17.5" r="2.5"/><circle cx="18.5" cy="17.5" r="2.5"/><path d="M5.5 17.5h-2v-4h9l3 4h3"/><path d="M13 6h5l3 5"/><path d="M13 6l-2 7H6l-2-5"/></svg>
              <h3>Ride & Save</h3>
              <p>Share the ride and split the petrol cost instantly.</p>
            </article>
          </div>
        </section>

        <section id="features">
          <h2>Key Features</h2>
          <div className="grid">
            <article>
              <svg role="img" aria-label="Gender preference icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 1v3"/><path d="M12 20v3"/><path d="M4.22 4.22l2.12 2.12"/><path d="M17.66 17.66l2.12 2.12"/><path d="M1 12h3"/><path d="M20 12h3"/><path d="M4.22 19.78l2.12-2.12"/><path d="M17.66 6.34l2.12-2.12"/></svg>
              <p>Gender Preference</p>
            </article>
            <article>
              <svg role="img" aria-label="Tracking icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <p>Real-Time Tracking</p>
            </article>
            <article>
              <svg role="img" aria-label="Payment icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2" ry="2"/><path d="M2 10h20"/></svg>
              <p>UPI-Based Payment</p>
            </article>
            <article>
              <svg role="img" aria-label="Verified riders icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-3-3.87"/><path d="M4 21v-2a4 4 0 0 1 3-3.87"/><circle cx="12" cy="7" r="4"/></svg>
              <p>Verified Riders</p>
            </article>
            <article>
              <svg role="img" aria-label="Petrol cost icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 7c-.5-.2-1-.2-1.5.1L15 9v10"/><path d="M4 22V2h7v20"/><path d="M1 22h22"/><path d="M11 7l9-4"/><path d="M15 11h5v5"/></svg>
              <p>Live Petrol Cost Fare</p>
            </article>
          </div>
        </section>

        <section id="testimonials">
          <h2>Testimonials</h2>
          <blockquote>
            <p>“RideME makes my daily commute so much cheaper!”</p>
            <cite>— Anita, Pune</cite>
          </blockquote>
          <blockquote>
            <p>“I feel safe knowing riders are verified.”</p>
            <cite>— Rohan, Pune</cite>
          </blockquote>
        </section>

        <section id="pricing">
          <h2>Pricing</h2>
          <table>
            <thead>
              <tr>
                <th>Free</th>
                <th>Go+</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Unlimited rides<br />Real-time matching</td>
                <td>All Free features<br />Priority support</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="faq">
          <h2>FAQ</h2>
          <details>
            <summary>Is RideME free to use?</summary>
            <p>Yes. All basic features are free with optional upgrades.</p>
          </details>
          <details>
            <summary>How do I pay for rides?</summary>
            <p>Pay directly via UPI to your ride partner.</p>
          </details>
        </section>

        <section id="join" className="cta-section">
          <h2>Join 10,000+ Pune Commuters Saving on Fuel</h2>
          <a href="#" className="cta">Download the App</a>
        </section>

        <footer>
          <p>&copy; {new Date().getFullYear()} RideME</p>
          <nav>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </nav>
        </footer>
      </main>
    </>
  )
}
