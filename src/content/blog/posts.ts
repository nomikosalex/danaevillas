export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  hero: string;
  heroAlt: string;
  sections: { heading: string; body: string }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'why-stay-in-fira-santorini',
    title: 'Why Fira is the Best Base for Your Santorini Stay',
    description: 'Fira vs Oia — which area should you stay in? We break down why Santorini\'s vibrant capital offers the perfect mix of convenience, authenticity, and access to everything the island has to offer.',
    date: '2025-04-01',
    readTime: '6 min read',
    hero: '/images/authentic/location-hero.jpg',
    heroAlt: 'Fira, Santorini at dusk — whitewashed buildings and Caldera views',
    sections: [
      {
        heading: 'Fira: The Heart of Santorini',
        body: 'When most people picture Santorini, they imagine the iconic blue-domed churches and whitewashed cliffside villages. While Oia tends to dominate the postcards, Fira — the island\'s capital — offers something arguably more valuable: a real life, a real pace, and real access to everything. Fira sits at the centre of the caldera rim, meaning the island\'s best restaurants, museums, bus connections, and Caldera paths are all within a short walk.',
      },
      {
        heading: 'Oia vs Fira: The Honest Comparison',
        body: 'Oia is beautiful, but it has become a victim of its own fame. The narrow main street fills with cruise passengers by mid-morning, sunset-viewing spots require queuing an hour in advance, and accommodation prices run significantly higher. Fira, by contrast, is where the island actually lives. You\'ll find local kafeneions alongside upscale restaurants, traditional bakeries a short walk from Caldera-view terraces, and a relaxed evening atmosphere that feels genuinely Greek rather than performatively picturesque.',
      },
      {
        heading: 'Kontochori: The Quiet Side of Fira',
        body: 'The neighbourhood of Kontochori — where Danae Villa sits — is a residential pocket just outside Fira\'s tourist centre. Streets here are quieter, the views are genuine, and local life carries on around you. It is roughly a ten-minute walk to the Caldera edge and the heart of Fira\'s dining and shopping scene. You get the best of both: the silence of a residential neighbourhood and immediate access to everything the capital offers.',
      },
      {
        heading: 'Transport and Accessibility',
        body: 'Fira is the island\'s transport hub. The central KTEL bus station connects to every corner of Santorini — Oia, Akrotiri, Perissa beach, and the port — running frequently throughout the day. Taxis are readily available from the main square. If you want to rent an ATV or car, several rental outlets operate within walking distance of the centre. From a practical standpoint, Fira is simply the most convenient place to be based.',
      },
      {
        heading: 'Walking the Caldera Path',
        body: 'One of Santorini\'s most rewarding experiences costs nothing: the Caldera footpath stretching from Fira northward to Firostefani and Imerovigli, with optional continuation toward Oia. The walk takes between two and five hours depending on how far you go, and the views — across the submerged volcano, the floating pumice island of Nea Kameni, and the endless Aegean — are among the most dramatic in the Mediterranean. Starting from Fira puts you right at the beginning of this path.',
      },
      {
        heading: 'The Santorini Experience, Grounded',
        body: 'Staying in Fira means immersing yourself in the island rather than its most photographed corner. You will discover local tavernas that do not appear on tourist maps, evening strolls along the caldera rim with fewer crowds, and a pace of life that resembles the Santorini islanders actually inhabit. For travellers who want the full picture — not just the curated Instagram version — Fira is where to be.',
      },
    ],
  },
  {
    slug: 'santorini-sunset-guide',
    title: 'Santorini Sunset Guide: Where to Watch, When to Go, and What to Expect',
    description: 'The Santorini sunset is one of the world\'s most celebrated natural spectacles. Here is how to see it at its best — with the crowd-beating spots, the best months to visit, and practical tips from locals.',
    date: '2025-04-08',
    readTime: '7 min read',
    hero: '/images/authentic/pool.jpg',
    heroAlt: 'Santorini pool at golden hour with Caldera views',
    sections: [
      {
        heading: 'Why the Santorini Sunset is Different',
        body: 'Santorini\'s sunset is famous not simply because the sky turns orange and pink — that happens everywhere. What makes it extraordinary is the geography: the caldera, a vast sunken volcanic crater roughly 11 kilometres wide, means you watch the sun descend over open water with the ancient volcanic rim stretching around you on three sides. The scale and framing are unlike anywhere else in Europe.',
      },
      {
        heading: 'Oia Castle: The Famous Spot',
        body: 'The ruined Venetian castle at the north tip of Oia is the most celebrated sunset viewpoint on the island. It deserves its reputation — the panorama is genuinely spectacular. However, it also attracts hundreds of spectators on any given evening. Arrive at least ninety minutes before sunset to secure a good position, and expect standing room only during peak season (June through September). The views are worth it, but manage your expectations around the experience rather than the scenery.',
      },
      {
        heading: 'Fira and Imerovigli: Calmer Alternatives',
        body: 'The caldera rim stretching south from Oia through Imerovigli and into Fira offers sunset views that are equally dramatic and significantly less crowded. The terrace restaurants and cafes of Imerovigli — the highest point on the caldera rim — provide particularly elevated perspectives. Fira\'s caldera edge at Skaros Rock and the Firostefani walkway are other excellent options. You\'ll watch the same sun set over the same volcano, just without the rush.',
      },
      {
        heading: 'The Private Option: Your Terrace or Pool',
        body: 'For guests staying in a villa with a caldera-facing terrace or pool, the most memorable sunset experience requires no travel at all. Watching the sun drop behind the volcano rim with a glass of Assyrtiko wine from your own private space — no crowds, no queuing — is the Santorini sunset at its finest. It is also increasingly the preferred choice of repeat visitors who have done the Oia castle experience and want something quieter.',
      },
      {
        heading: 'Best Months for Santorini Sunsets',
        body: 'Summer (June–August) gives the longest evenings and warmest temperatures, but also the highest visitor numbers. May and September offer an excellent balance: warm weather, fewer crowds, and sunsets that typically fall between 7:30 and 8:30 pm. October sunsets come earlier (around 7 pm) but the island is significantly quieter and the light quality — lower and warmer — is particularly beautiful for photography.',
      },
      {
        heading: 'Practical Tips',
        body: 'Sunset times change throughout the season; check the precise time for your dates and plan to arrive 30 to 45 minutes early for any viewpoint. Bring a light layer — Santorini evenings cool quickly once the sun drops. If dining at a caldera restaurant for sunset, book at least two weeks in advance during peak season. And remember: the after-sunset sky, when the horizon glows deep violet and apricot, is often more beautiful than the sunset itself.',
      },
    ],
  },
  {
    slug: 'santorini-airport-to-fira',
    title: 'Getting from Santorini Airport to Fira: All Your Transfer Options',
    description: 'Landing at Santorini\'s Thira Airport (JTR) and heading to Fira? Here is every way to make the transfer — from private car to public bus — with honest advice on which suits your trip.',
    date: '2025-04-15',
    readTime: '5 min read',
    hero: '/images/transfers.png',
    heroAlt: 'Private transfer vehicle on Santorini road with Caldera views',
    sections: [
      {
        heading: 'Santorini Thira Airport (JTR)',
        body: 'Santorini\'s airport (IATA code: JTR) sits on the eastern side of the island, roughly 5 kilometres from Fira. The airport is small by international standards — a single terminal — but handles significant seasonal traffic, particularly from June through September. Despite its compact size, the transfer into Fira can be surprisingly time-consuming during peak season due to narrow island roads and traffic.',
      },
      {
        heading: 'Option 1: Private Transfer (Recommended)',
        body: 'A pre-booked private transfer is by far the most comfortable and predictable option. A driver meets you at the arrivals gate with your name displayed, helps with luggage, and drives you directly to your accommodation. Journey time to Fira is typically 10 to 15 minutes. Private transfers eliminate the uncertainty of finding a taxi or navigating public transport after a long flight, and for groups of two or more, the cost is comparable to taxis. Danae Villa guests can arrange private transfers directly through us — we work with trusted local drivers and the service is included as part of our concierge offering.',
      },
      {
        heading: 'Option 2: KTEL Public Bus',
        body: 'Santorini\'s public bus service (KTEL) runs a route connecting the airport to Fira\'s central bus station. The fare is very low and the journey takes around 15 to 20 minutes. Buses run regularly during summer, roughly every 30 to 60 minutes depending on the time of day. The main disadvantage is that buses stop at the Fira bus station rather than your specific accommodation, which may require a short uphill walk with luggage. Check current timetables at the KTEL Santorini website before you travel.',
      },
      {
        heading: 'Option 3: Taxi',
        body: 'Taxis are available outside the airport terminal and the journey to Fira costs a fixed rate set by the local taxi authority. The challenge is supply during peak season: during busy arrivals periods, queues for taxis can be significant and wait times unpredictable. If you have a fixed schedule or are arriving late at night, a pre-booked private transfer is more reliable.',
      },
      {
        heading: 'Option 4: Rental Car or ATV',
        body: 'Several car and ATV rental companies operate from or near the airport. Renting gives you full island mobility, which is genuinely useful if you plan to explore extensively. However, Santorini\'s roads — particularly around Fira and Oia — are narrow and can be congested. Parking in Fira itself is very limited. For a stay focused on relaxing in Fira with occasional excursions, a rental car is often unnecessary.',
      },
      {
        heading: 'Arriving by Ferry',
        body: 'Santorini\'s main port, Athinios, is 12 kilometres south of Fira. The same transfer options apply: private transfer (the easiest), KTEL bus, or taxi. Note that the port road involves a steep, winding ascent — luggage is easier to manage in a vehicle than on the cable car that runs from the old port to Fira. If arriving by cruise ship at the old port, the cable car or donkey path leads directly up to Fira town.',
      },
    ],
  },
  {
    slug: 'what-to-do-in-santorini',
    title: '10 Unmissable Things to Do in Santorini',
    description: 'Santorini is far more than whitewashed buildings and sunsets. From prehistoric ruins to volcanic hot springs, here are the ten experiences that define a genuinely complete visit to the island.',
    date: '2025-04-22',
    readTime: '8 min read',
    hero: '/images/authentic/pool.jpg',
    heroAlt: 'Santorini pool and island landscape',
    sections: [
      {
        heading: '1. Walk the Caldera Path from Fira to Oia',
        body: 'The Caldera footpath is Santorini\'s finest free experience. The full route from Fira to Oia covers around 10 kilometres and takes three to five hours, passing through Firostefani and Imerovigli with the volcano and Aegean spread below you throughout. Wear good shoes, carry water, and start early in summer to avoid the midday heat. The path can be walked in either direction, or in sections — even a 30-minute stretch north from Fira toward Firostefani rewards with extraordinary views.',
      },
      {
        heading: '2. Visit Ancient Akrotiri',
        body: 'Buried under volcanic ash in roughly 1600 BCE, Akrotiri is often called the "Pompeii of the Aegean" — and the comparison is apt. The Bronze Age Minoan city is extraordinarily preserved, with multi-storey buildings, sophisticated drainage systems, and vibrant frescoes still in place. The entire site is covered by a modern shelter, making it comfortable to visit year-round. Allow two hours and combine it with a beach visit to nearby Red Beach or Perissa immediately after.',
      },
      {
        heading: '3. Go Wine Tasting',
        body: 'Santorini produces some of Greece\'s most distinctive wines, grown in a unique volcanic soil that gives the indigenous Assyrtiko grape its characteristic mineral salinity. The vines are trained into low basket shapes (kouloura) that protect them from the wind and trap morning dew. Several wineries near Pyrgos, Megalochori, and Oia offer tastings and tours. Santo Wines, perched on the caldera rim, combines cellar-door wines with panoramic views. Canava Roussos and Domaine Sigalas are favoured by wine enthusiasts for their focus on serious viticulture.',
      },
      {
        heading: '4. Swim at Perissa or Kamari Black Sand Beach',
        body: 'The eastern coast of Santorini is lined with beaches of black volcanic sand — unique and striking, though the sand absorbs heat intensely in summer so water shoes are advisable. Perissa and Kamari are the largest and most organised, with sunbeds, tavernas, and water sports. For something wilder, the Red Beach near Akrotiri, framed by sheer red volcanic cliffs, is one of the most visually dramatic beaches in Greece, though it requires a short walk over rocky ground to access.',
      },
      {
        heading: '5. Take a Sunset Caldera Cruise',
        body: 'A boat trip around the caldera offers perspectives on the island that no clifftop view can match. Standard tours typically include a stop to swim in the hot springs near Nea Kameni, a walk on the volcanic island itself, time at the White Beach, and a return during the golden hour. Catamaran tours (semi-private, for groups of 6-8) offer a more relaxed experience than larger boat tours. Book in advance during peak season.',
      },
      {
        heading: '6. Explore Pyrgos Village',
        body: 'Pyrgos is the highest village on the island and, many residents argue, its most authentic. Built in a concentric medieval pattern around a Venetian castle, it sees a fraction of the visitors that crowd Fira and Oia. The village rewards slow exploration: small churches, winding paths, and views across the entire island to both coasts. The Tomato Industrial Museum nearby provides an unexpected window into Santorini\'s pre-tourism agricultural history.',
      },
      {
        heading: '7. Visit the Museum of Prehistoric Thera',
        body: 'Located in Fira, this small but extraordinary museum houses the finest collection of Akrotiri artefacts outside Athens, including the famous "Spring Fresco" — a vivid wall painting of swallows and lilies considered one of the most beautiful surviving artworks of the ancient Aegean world. Budget an hour. The museum is air-conditioned, which during summer makes it a particularly pleasant midday stop.',
      },
      {
        heading: '8. Try a Santorini Cooking Class',
        body: 'Several operators offer cooking experiences focused on the island\'s distinctive cuisine: fava (yellow split pea purée), white aubergine, tomatokeftedes (tomato fritters made from the island\'s tiny, intensely flavoured tomatoes), and fresh seafood. A cooking class combines cultural insight with a meal. Many are held in private homes or traditional settings and include a market visit and wine pairing.',
      },
      {
        heading: '9. Take a Day Trip to Thirasia',
        body: 'The small island of Thirasia, separated from Santorini\'s northwest coast by a narrow channel, is what Santorini was perhaps thirty years ago: quiet, largely untouched by tourism, with a handful of tavernas, steep paths, and dramatic views back toward the caldera. Day trips run from Ammoudi Bay (below Oia) or by private boat arrangement. An afternoon on Thirasia, ending with fresh fish at the harbour taverna, is genuinely memorable.',
      },
      {
        heading: '10. Watch the Stars from the Caldera Edge',
        body: 'On clear nights, which are common from late spring through early autumn, the caldera edge becomes one of the best stargazing spots in the Aegean. With minimal light pollution over open water and high elevation, the Milky Way is clearly visible on moonless nights. A late evening walk north from Fira toward Imerovigli, away from the lit restaurant terraces, rewards with a sky that most visitors, focused entirely on the sunset, never think to look up at after dark.',
      },
    ],
  },
];
