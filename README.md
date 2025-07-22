# 🚲 Ride Me — Bike Pooling App (Pune MVP)

**Ride Me** is a secure, gender-friendly, and hyper-local **bike pooling app** focused on connecting daily commuters in Pune using cost-sharing principles. The app facilitates dynamic ride matching between private bike owners and riders, ensuring safety, trust, and affordability — without operating as a commercial transport service.

---

## 🧠 Key Highlights

- 🔄 **Dual-role System** — Users can be both riders and drivers.
- 🔐 **Verified Identities** — KYC using Aadhaar, DL, and RC.
- 👩‍🦰 **Female-Safe by Design** — Optional gender-filtered rides.
- ⛽ **True Cost-Sharing** — Fare based on live petrol price + mileage (30 km/l).
- 🔄 **Real-Time + Scheduled Matching** — Book rides now or later.
- 💸 **No Commission** — Pay directly via UPI, platform doesn’t touch your money.

---

## ⚙️ Tech Stack

| Layer | Tech |
|-------|------|
| **Frontend** | React Native |
| **Backend** | Node.js + Express |
| **Database** | MongoDB Atlas |
| **Auth + KYC** | Firebase Auth + Signzy/DigiLocker |
| **Real-Time** | Socket.io |
| **Geo + Mapping** | Ola Maps |
| **Notifications** | Firebase Cloud Messaging (FCM) |
| **Call & Chat** | WebRTC (VoIP masking) + Socket.io |
| **Scheduler** | Node-cron / Firebase Functions |
| **Payments** | Razorpay Subscriptions (for boosts/plans) |

---

## 🔄 Ride Flow

1. **User Onboarding**:
   - Register via phone/email.
   - Complete KYC.
   - Choose role: Rider, Driver, or Both.

2. **Driver Posts Ride**:
   - Start & end location.
   - Detour flexibility.
   - Time (real-time or scheduled).
   - Fare auto-calculated using:
     ```
     Fare = (Distance / 30) × LivePetrolPrice
     ```

3. **Rider Requests Ride**:
   - Pickup & destination.
   - Gender preference.
   - Finds match using GeoHash + ETA proximity.

4. **Match → Track → Ride**:
   - Real-time location updates.
   - In-app chat and masked calling.
   - Emergency button for safety.

5. **Post-Ride**:
   - Rider pays via UPI (cash or digital).
   - Both rate each other.
   - Rider gets receipt with fare logic.

---

## 💸 Revenue Model

| Feature | Price |
|---------|-------|
| Weekly Subscription (Unlimited Rides) | ₹29/week |
| Driver Boost (More Visibility) | ₹49/month |
| One-time Priority Match | ₹10 |
| Ad Revenue (AdMob) | Banner/Interstitial |
| Referral Rewards | Unlock extra rides |
| College/Corporate Ride Pools | ₹30/user/month (future B2B) |

---

## 🛡️ Legal Notes

- ✅ Not a commercial transport app.
- ✅ Platform facilitates matching only.
- ✅ Drivers are not paid — only share fuel costs.
- ✅ Female-safe design + emergency contact system.
- ✅ All users pass KYC (DL + RC for drivers).

---

## 🧠 Future Roadmap

- iOS support
- Ride history & analytics
- Night-only matching with verified drivers
- B2B dashboard for campuses and companies
- AI-based route pricing optimization

---

## 📦 Deployment Cost (Year 1)

- Hosting (Railway/Fly.io): ₹3,000
- Domain: ₹1,200
- Signzy KYC API: ₹2,000 (approx)
- Android Deployment: ₹2,300
- **Total**: ~₹8,000 (no dev salary)

---

## 📲 Status

**🚧 MVP in progress (Pune only)**  
Release planned: **Q4 2025**

---

## 👥 Team Ride Me

This project is built by Sachin Borse and team, focused on building India’s safest and smartest ride-sharing app — starting with Pune.


## 🖥️ Website Development

A basic marketing website built with **Next.js** lives in the `pages` folder. Run it locally:

```bash
npm install
npm run dev
```

It provides a server-rendered landing page optimized for SEO and brand keywords.
