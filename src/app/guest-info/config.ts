// ============================================================
//  GUEST INFO CONFIG
//  Edit this file to update the guest info page.
//  After saving, Netlify will redeploy automatically (~1 min).
// ============================================================

export const guestInfo = {

  // --- WIFI ---------------------------------------------------
  wifi: {
    enabled: true,           // set to false to hide this section
    network: 'DanaeVilla',   // WiFi name (SSID)
    password: 'danae1973!',  // WiFi password
  },

  // --- DAILY SCHEDULE -----------------------------------------
  schedule: [
    { time: '08:30 – 10:00', label: 'Morning Coffee',  note: 'Complimentary coffee service' },
    { time: '08:30 – 21:00', label: 'Reception',       note: 'Check-in & assistance'        },
    { time: '10:00 – 19:00', label: 'Pool & Jacuzzi',  note: 'Open for guests'              },
  ],

  // --- HOUSE REGULATIONS --------------------------------------
  regulations: [
    'Swimming pool & jacuzzi open from 10:00 to 19:00',
    'Children must use the pool under parental supervision',
    'No diving permitted',
  ],

  // --- HOST / CONTACT -----------------------------------------
  host: {
    name:   'Evi Nomikou',
    phone:  '+30 695 515 2317',
    whatsapp: '306955152317',  // number only, no spaces or +
  },

};
