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
    password: '',            // WiFi password — fill this in
  },

  // --- DAILY SCHEDULE -----------------------------------------
  schedule: [
    { time: '08:30 – 10:00', label: 'Morning Coffee',  note: 'Complimentary coffee service' },
    { time: '08:30 – 20:30', label: 'Reception',       note: 'Check-in & assistance'        },
    { time: '10:00 – 20:00', label: 'Pool & Jacuzzi',  note: 'Open for guests'              },
  ],

  // --- HOUSE REGULATIONS --------------------------------------
  regulations: [
    'Swimming pool & jacuzzi open from 10:00 to 20:00',
    'Children must use the pool under parental supervision',
    'No diving permitted',
  ],

  // --- HOST / CONTACT -----------------------------------------
  host: {
    name:   'Evi Nomikou',
    phone:  '+30 695 516 2317',
    whatsapp: '306955162317',  // number only, no spaces or +
  },

};
