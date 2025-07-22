import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
        <title>RideME | Smart Bike Pooling & Cost-Sharing Ride App – Pune</title>
        <meta name="description" content="RideME is India’s safest and smartest bike ride-sharing app. Split fuel costs, get real-time matching, and travel with verified users. Gender-friendly and KYC-secured." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <header>
          <h1>Your Ride. Your Route. Shared Smartly.</h1>
          <a href="#" className="cta">Start Sharing a Ride</a>
        </header>
        <section id="about">
          <h2>About RideME</h2>
          <p>
            RideME is a bike pooling platform based in Pune that helps commuters
            share fuel costs with safe, verified riders. Our real-time matching
            and gender-friendly options make bike sharing easy and secure.
          </p>
        </section>
      </main>
    </>
  )
}
