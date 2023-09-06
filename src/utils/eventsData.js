import c1b from "../images/events/c1b.png";
import c2b from "../images/events/c2b.png";
import c3b from "../images/events/c3b.png";
import c4b from "../images/events/c4b.png";
import c5b from "../images/events/c5b.jfif";
import c6b from "../images/events/c6b.png";
import c7b from "../images/events/c7b.png";
import c8b from "../images/events/c8b.png";
import c9b from "../images/events/c9b.png";

import c1i from "../images/events/c1i.png";
import c2i from "../images/events/c2i.png";
import c3i from "../images/events/c3i.png";
import c4i from "../images/events/c4i.png";
import c5i from "../images/events/c5i.png";
import c6i from "../images/events/c6i.png";
import c7i from "../images/events/c7i.png";
import c8i from "../images/events/c8i.png";
import c9i from "../images/events/c9i.png";

import mystry from "../images/events/reward-mystry.webp";
import coin from "../images/events/reward-coin.avif";

const availableNow = [
  {
    type: "special",
    bg: c1b,
    image: c1i,
    title: "Join the May Festivities!",
    description: `☀️ Celebrate all things old and new in The Sandbox May Festival! ☀️
    Immerse yourself in the arrival of Spring and dive in the Metaverse to discover new experiences and some of the most beloved experiences of 2022.`,
    reward: "1 may mystry box",
    rewardIcon: mystry,
    endsDate: "JUN 12TH - 7:00 PM",
  },
  {
    type: "giveaway",
    bg: c2b,
    image: c2i,
    title: "[Exclusive for Avatar Owners] May Festival",
    description: `[Exclusively for Avatar Owners] ☀️ Celebrate all things old and new in The Sandbox May Festival! ☀️. Immerse yourself in the arrival of Spring and dive in the Metaverse to discover new experiences and some of the most beloved experiences of 2022.`,
    reward: "350k sand",
    rewardIcon: coin,
    endsDate: "JUN 12TH 7:00 PM",
  },
  {
    type: "giveaway",
    bg: c3b,
    image: c3i,
    title: "[Exclusive for Land Owners] May Festival",
    description: `[Exclusively for LAND Owners] ☀️ Celebrate all things old and new in The Sandbox May Festival! ☀️. Immerse yourself in the arrival of Spring and dive in the Metaverse to discover new experiences and some of the most beloved experiences of 2022.`,
    reward: "350k sand",
    rewardIcon: coin,
    endsDate: "JUN 12TH 7:00 PM",
  },
  {
    type: "giveaway",
    bg: c4b,
    image: c4i,
    title: "[Exclusive for Hell's Kitchen Avatar Owner]",
    description: `[Exclusive for Hell's Kitchen Avatar Owner] ☀️ Celebrate all things old and new in The Sandbox May Festival! ☀️. Immerse yourself in the arrival of Spring and dive in the Metaverse to discover new experiences and some of the most beloved experiences of 2022.`,
    reward: "20k sand",
    rewardIcon: coin,
    endsDate: "JUN 12TH 7:00 PM",
  },
  {
    type: "giveaway",
    bg: c5b,
    image: c5i,
    title: "[Exclusive for Madballs Avatar Owner]",
    description: `[Exclusive for Madballs Avatar Owner] ☀️ Celebrate all things old and new in The Sandbox May Festival! ☀️. Immerse yourself in the arrival of Spring and dive in the Metaverse to discover new experiences and some of the most beloved experiences of 2022.`,
    reward: "150k sand",
    rewardIcon: coin,
    endsDate: "JUN 12TH 7:00 PM",
  },
  {
    type: "giveaway",
    bg: c6b,
    image: c6i,
    title: "[Exclusive for Steve Aoki Avatar Owner]",
    description: `[Exclusive for Steve Aoki Avatar Owner] ☀️ Celebrate all things old and new in The Sandbox May Festival! ☀️. Immerse yourself in the arrival of Spring and dive in the Metaverse to discover new experiences and some of the most beloved experiences of 2022.`,
    reward: "35k sand",
    rewardIcon: coin,
    endsDate: "JUN 12TH 7:00 PM",
  },
  {
    type: "special",
    bg: c7b,
    image: c7i,
    title: "3VERST",
    description: `3VERST ☀️ Celebrate all things old and new in The Sandbox May Festival! ☀️. Immerse yourself in the arrival of Spring and dive in the Metaverse to discover new experiences and some of the most beloved experiences of 2022.`,
    reward: "120k sand",
    rewardIcon: coin,
    endsDate: "JUN 12TH 7:00 PM",
  },
  {
    type: "special",
    bg: c8b,
    image: c8i,
    title: "VISTAVERSE: ARENA ONE",
    description: `VISTAVERSE: ARENA ONE ☀️ Celebrate all things old and new in The Sandbox May Festival! ☀️. Immerse yourself in the arrival of Spring and dive in the Metaverse to discover new experiences and some of the most beloved experiences of 2022.`,
    reward: "50k sand",
    rewardIcon: coin,
    endsDate: "JUN 12TH 7:00 PM",
  },
  {
    type: "special",
    bg: c9b,
    image: c9i,
    title: "PwC Hong Kong",
    description: `PwC Hong Kong ☀️ Celebrate all things old and new in The Sandbox May Festival! ☀️. Immerse yourself in the arrival of Spring and dive in the Metaverse to discover new experiences and some of the most beloved experiences of 2022.`,
    reward: "35k sand",
    rewardIcon: coin,
    endsDate: "JUN 12TH 7:00 PM",
  },
];

const commingSoon = [
  {
    type: ["comming soon", "giveaway"],
    bg: c3b,
    image: c3i,
    title: "[Exclusive for Land Owners] May Festival",
  },
  {
    type: ["comming soon", "giveaway"],
    bg: c4b,
    image: c4i,
    title: "[Exclusive for Hell's Kitchen Avatar Owner]",
  },
  {
    type: ["comming soon", "giveaway"],
    bg: c5b,
    image: c5i,
    title: "[Exclusive for Madballs Avatar Owner]",
  },
];

const pastEvents = [
  {
    type: "special",
    bg: c1b,
    image: c1i,
    title: "Join the May Festivities!",
    description: `☀️ Celebrate all things old and new in The Sandbox May Festival! ☀️
    Immerse yourself in the arrival of Spring and dive in the Metaverse to discover new experiences and some of the most beloved experiences of 2022.`,
    reward: "1 may mystry box",
    rewardIcon: mystry,
    endsDate: "JUN 12TH - 7:00 PM",
  },
  {
    type: "giveaway",
    bg: c2b,
    image: c2i,
    title: "[Exclusive for Avatar Owners] May Festival",
    description: `[Exclusively for Avatar Owners] ☀️ Celebrate all things old and new in The Sandbox May Festival! ☀️. Immerse yourself in the arrival of Spring and dive in the Metaverse to discover new experiences and some of the most beloved experiences of 2022.`,
    reward: "350k sand",
    rewardIcon: coin,
    endsDate: "JUN 12TH 7:00 PM",
  },
  {
    type: "giveaway",
    bg: c3b,
    image: c3i,
    title: "[Exclusive for Land Owners] May Festival",
    description: `[Exclusively for LAND Owners] ☀️ Celebrate all things old and new in The Sandbox May Festival! ☀️. Immerse yourself in the arrival of Spring and dive in the Metaverse to discover new experiences and some of the most beloved experiences of 2022.`,
    reward: "350k sand",
    rewardIcon: coin,
    endsDate: "JUN 12TH 7:00 PM",
  },
  {
    type: "giveaway",
    bg: c4b,
    image: c4i,
    title: "[Exclusive for Hell's Kitchen Avatar Owner]",
    description: `[Exclusive for Hell's Kitchen Avatar Owner] ☀️ Celebrate all things old and new in The Sandbox May Festival! ☀️. Immerse yourself in the arrival of Spring and dive in the Metaverse to discover new experiences and some of the most beloved experiences of 2022.`,
    reward: "20k sand",
    rewardIcon: coin,
    endsDate: "JUN 12TH 7:00 PM",
  },
  {
    type: "giveaway",
    bg: c5b,
    image: c5i,
    title: "[Exclusive for Madballs Avatar Owner]",
    description: `[Exclusive for Madballs Avatar Owner] ☀️ Celebrate all things old and new in The Sandbox May Festival! ☀️. Immerse yourself in the arrival of Spring and dive in the Metaverse to discover new experiences and some of the most beloved experiences of 2022.`,
    reward: "150k sand",
    rewardIcon: coin,
    endsDate: "JUN 12TH 7:00 PM",
  },
  {
    type: "giveaway",
    bg: c6b,
    image: c6i,
    title: "[Exclusive for Steve Aoki Avatar Owner]",
    description: `[Exclusive for Steve Aoki Avatar Owner] ☀️ Celebrate all things old and new in The Sandbox May Festival! ☀️. Immerse yourself in the arrival of Spring and dive in the Metaverse to discover new experiences and some of the most beloved experiences of 2022.`,
    reward: "35k sand",
    rewardIcon: coin,
    endsDate: "JUN 12TH 7:00 PM",
  },
  {
    type: "special",
    bg: c7b,
    image: c7i,
    title: "3VERST",
    description: `3VERST ☀️ Celebrate all things old and new in The Sandbox May Festival! ☀️. Immerse yourself in the arrival of Spring and dive in the Metaverse to discover new experiences and some of the most beloved experiences of 2022.`,
    reward: "120k sand",
    rewardIcon: coin,
    endsDate: "JUN 12TH 7:00 PM",
  },
  {
    type: "special",
    bg: c8b,
    image: c8i,
    title: "VISTAVERSE: ARENA ONE",
    description: `VISTAVERSE: ARENA ONE ☀️ Celebrate all things old and new in The Sandbox May Festival! ☀️. Immerse yourself in the arrival of Spring and dive in the Metaverse to discover new experiences and some of the most beloved experiences of 2022.`,
    reward: "50k sand",
    rewardIcon: coin,
    endsDate: "JUN 12TH 7:00 PM",
  },
  {
    type: "special",
    bg: c9b,
    image: c9i,
    title: "PwC Hong Kong",
    description: `PwC Hong Kong ☀️ Celebrate all things old and new in The Sandbox May Festival! ☀️. Immerse yourself in the arrival of Spring and dive in the Metaverse to discover new experiences and some of the most beloved experiences of 2022.`,
    reward: "35k sand",
    rewardIcon: coin,
    endsDate: "JUN 12TH 7:00 PM",
  },
  {
    type: "special",
    bg: c1b,
    image: c1i,
    title: "Join the May Festivities!",
    description: `☀️ Celebrate all things old and new in The Sandbox May Festival! ☀️
    Immerse yourself in the arrival of Spring and dive in the Metaverse to discover new experiences and some of the most beloved experiences of 2022.`,
    reward: "1 may mystry box",
    rewardIcon: mystry,
    endsDate: "JUN 12TH - 7:00 PM",
  },
];

export const eventsList = [
  {
    title: "Available Now",
    events: availableNow,
  },

  {
    title: "Comming Soon",
    events: commingSoon,
  },

  {
    title: "Past Events",
    events: pastEvents,
  },
];
