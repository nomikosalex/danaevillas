'use client';

import { useLanguage } from '@/context/LanguageContext';

const content = {
  en: {
    label: 'Legal',
    title: 'Privacy Policy',
    updated: 'Last updated: April 2026',
    sections: [
      {
        heading: '1. Data Controller',
        body: 'Danae Villa is operated by Evi Nomikou, located in Fira, Santorini, Greece (84700). For any privacy-related enquiries, contact us at danaevilla.01@gmail.com.',
      },
      {
        heading: '2. Data We Collect',
        body: 'When you submit our contact form, we collect your full name, email address, preferred check-in and check-out dates, and your message. No other personal data is collected through this website.',
      },
      {
        heading: '3. Purpose & Legal Basis',
        body: 'Your data is used solely to respond to your booking enquiry and to communicate with you regarding your stay. The legal basis is the performance of a pre-contractual relationship (GDPR Article 6(1)(b)) and our legitimate interest in responding to enquiries (Article 6(1)(f)).',
      },
      {
        heading: '4. Data Retention',
        body: 'We retain your personal data only for as long as necessary to handle your enquiry and any resulting reservation, and for a maximum of 12 months thereafter.',
      },
      {
        heading: '5. Third Parties',
        body: 'Your form submissions are processed by Netlify (netlify.com), our hosting provider. Netlify may temporarily store submitted data on servers located in the United States under appropriate safeguards. We do not sell, rent, or share your data with any other third parties.',
      },
      {
        heading: '6. Cookies',
        body: 'This website uses only essential technical cookies necessary for basic functionality (e.g. remembering your cookie consent choice). No advertising, tracking, or analytics cookies are used.',
      },
      {
        heading: '7. Your Rights',
        body: 'Under GDPR you have the right to access, rectify, erase, or export your personal data, and to object to or restrict its processing. To exercise any of these rights, contact us at danaevilla.01@gmail.com. You also have the right to lodge a complaint with the Hellenic Data Protection Authority (www.dpa.gr).',
      },
      {
        heading: '8. Changes',
        body: 'We may update this policy from time to time. The date at the top of this page reflects the most recent revision.',
      },
    ],
  },
  el: {
    label: 'Νομικά',
    title: 'Πολιτική Απορρήτου',
    updated: 'Τελευταία ενημέρωση: Απρίλιος 2026',
    sections: [
      {
        heading: '1. Υπεύθυνος Επεξεργασίας',
        body: 'Η βίλα Δανάη λειτουργεί από την Εύη Νομικού, Φηρά Σαντορίνης, Ελλάδα (84700). Για οποιοδήποτε ζήτημα σχετικά με το απόρρητο, επικοινωνήστε μαζί μας στο danaevilla.01@gmail.com.',
      },
      {
        heading: '2. Δεδομένα που Συλλέγουμε',
        body: 'Κατά την υποβολή της φόρμας επικοινωνίας, συλλέγουμε το ονοματεπώνυμό σας, τη διεύθυνση email, τις επιθυμητές ημερομηνίες άφιξης/αναχώρησης και το μήνυμά σας. Δεν συλλέγουμε άλλα προσωπικά δεδομένα μέσω αυτής της ιστοσελίδας.',
      },
      {
        heading: '3. Σκοπός & Νομική Βάση',
        body: 'Τα δεδομένα σας χρησιμοποιούνται αποκλειστικά για την απάντηση στο αίτημα κράτησής σας. Νομική βάση είναι η εκτέλεση προσυμβατικής σχέσης (Άρθρο 6(1)(β) ΓΚΠΔ) και το έννομο συμφέρον μας (Άρθρο 6(1)(στ)).',
      },
      {
        heading: '4. Διατήρηση Δεδομένων',
        body: 'Διατηρούμε τα προσωπικά σας δεδομένα μόνο για όσο διάστημα είναι απαραίτητο για τη διεκπεραίωση του αιτήματός σας, και έως 12 μήνες μετά.',
      },
      {
        heading: '5. Τρίτοι',
        body: 'Οι υποβολές της φόρμας επεξεργάζονται από τη Netlify (netlify.com), τον πάροχο φιλοξενίας μας. Δεν πωλούμε, ενοικιάζουμε ή μοιραζόμαστε τα δεδομένα σας με τρίτους.',
      },
      {
        heading: '6. Cookies',
        body: 'Αυτή η ιστοσελίδα χρησιμοποιεί μόνο απαραίτητα τεχνικά cookies για βασική λειτουργικότητα. Δεν χρησιμοποιούνται cookies παρακολούθησης ή διαφήμισης.',
      },
      {
        heading: '7. Τα Δικαιώματά σας',
        body: 'Σύμφωνα με τον ΓΚΠΔ, έχετε δικαίωμα πρόσβασης, διόρθωσης, διαγραφής και φορητότητας των δεδομένων σας, καθώς και δικαίωμα εναντίωσης. Επικοινωνήστε μαζί μας στο danaevilla.01@gmail.com. Έχετε επίσης δικαίωμα καταγγελίας στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα (www.dpa.gr).',
      },
      {
        heading: '8. Αλλαγές',
        body: 'Ενδέχεται να ενημερώνουμε την παρούσα πολιτική κατά καιρούς. Η ημερομηνία στην κορυφή της σελίδας αντικατοπτρίζει την πιο πρόσφατη αναθεώρηση.',
      },
    ],
  },
};

export default function PrivacyPolicyPage() {
  const { lang } = useLanguage();
  const c = (lang === 'el' ? content.el : content.en);

  return (
    <main className="bg-swiss-white min-h-screen pt-32 pb-24">
      <div className="px-8 md:px-24 max-w-3xl mx-auto">
        <span className="block font-sans text-[10px] uppercase tracking-[0.5em] text-swiss-dark/40 mb-6">
          {c.label}
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-swiss-dark mb-4">{c.title}</h1>
        <p className="text-swiss-dark/40 text-xs mb-16">{c.updated}</p>

        <div className="space-y-10">
          {c.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-sans text-[11px] uppercase tracking-widest text-swiss-dark mb-3">
                {section.heading}
              </h2>
              <p className="text-swiss-dark/60 font-light text-sm leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
