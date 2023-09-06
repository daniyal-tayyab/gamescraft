import { ReactComponent as Events } from "../images/sidebar-icons/events-icon.svg";
import { ReactComponent as EventsActive } from "../images/sidebar-icons/events-icon-active.svg";
import { ReactComponent as Map } from "../images/sidebar-icons/map-icon.svg";
import { ReactComponent as MapActive } from "../images/sidebar-icons/map-icon-active.svg";
import { ReactComponent as Avatar } from "../images/sidebar-icons/avatar-icon.svg";
import { ReactComponent as AvatarActive } from "../images/sidebar-icons/avatar-icon-active.svg";
import { ReactComponent as Marketplace } from "../images/sidebar-icons/market-icon.svg";
import { ReactComponent as MarketplaceActive } from "../images/sidebar-icons/market-icon-active.svg";
import { ReactComponent as Partnership } from "../images/sidebar-icons/partnerships-icon.svg";
import { ReactComponent as PartnershipActive } from "../images/sidebar-icons/partnerships-icon-active.svg";
import { ReactComponent as News } from "../images/sidebar-icons/news-icon.svg";
import { ReactComponent as NewsActive } from "../images/sidebar-icons/news-icon-active.svg";
import { ReactComponent as About } from "../images/sidebar-icons/about-icon.svg";
import { ReactComponent as AboutActive } from "../images/sidebar-icons/about-icon-active.svg";

import snoop from "../images/partners_logos/logo_snoop.avif";
import walkingDead from "../images/partners_logos/logo_walkingdead.svg";
import adidas from "../images/partners_logos/logo_adidas.png";
import china from "../images/partners_logos/logo_china.avif";
import sevenfold from "../images/partners_logos/logo_sevenfold.svg";
import hawtin from "../images/partners_logos/logo_hawtin.avif";
import smurf from "../images/partners_logos/logo_smurf.svg";
import hellsKitchen from "../images/partners_logos/logo_hellkitchen.avif";
import rollerCoaster from "../images/partners_logos/logo_rollercoster.avif";
import deadMamu from "../images/partners_logos/logo_deadmau5.avif";
import atari from "../images/partners_logos/logo_atari.svg";
import careBear from "../images/partners_logos/logo_carebears.avif";
import blondish from "../images/partners_logos/logo_blondish.png";
import amonica from "../images/partners_logos/logo_aminoca.png";

import hellKitchen from "../images/pngs/hell-kitchen.png";
import careBears from "../images/pngs/care-bears.png";
import kVerse from "../images/pngs/k-verse.png";

import { ReactComponent as Discord } from "../images/svgs/social/discord-white.svg";
import { ReactComponent as Facebook } from "../images/svgs/social/facebook-white.svg";
import { ReactComponent as Instagram } from "../images/svgs/social/instagram-white.svg";
import { ReactComponent as Medium } from "../images/svgs/social/medium-white.svg";
import { ReactComponent as Telegram } from "../images/svgs/social/telegram-white.svg";
import { ReactComponent as Twitch } from "../images/svgs/social/twitch-white.svg";
import { ReactComponent as Twitter } from "../images/svgs/social/twitter-white.svg";
import { ReactComponent as Youtube } from "../images/svgs/social/youtube-white.svg";

export const sidebarItems = [
  {
    title: "Events",
    Icon: Events,
    Active: EventsActive,
    to: "/events",
  },
  {
    title: "Map",
    Icon: Map,
    Active: MapActive,
    to: "/map",
  },
  {
    title: "Avatar",
    Icon: Avatar,
    Active: AvatarActive,
    to: "/avatar",
  },
  {
    title: "Marketplace",
    Icon: Marketplace,
    Active: MarketplaceActive,
    to: "/marketplace",
  },
  {
    title: "Partnerships",
    Icon: Partnership,
    Active: PartnershipActive,
    to: "/partnership",
  },
  {
    title: "News",
    Icon: News,
    Active: NewsActive,
    to: "/news",
  },
  {
    title: "About",
    Icon: About,
    Active: AboutActive,
    to: "/about",
  },
];

export const blogCardData = [
  {
    backgroundImage:
      "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,w=1016,h=508/https://strapi.sandbox.game/uploads/ezgif_com_webp_to_png_2_8a320d591d.png",
    title: "The Second Korea Impact is coming",
    description: "Brace yourself!",
  },

  {
    backgroundImage:
      "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,w=1016,h=508/https://strapi.sandbox.game/uploads/ezgif_com_webp_to_png_e098342078.png",
    title: "Community Favorites Are Making a Comeback in May Festival!",
    description:
      "A chance for everyone to discover or relive their best metaverse moments",
  },
];

export const announcements = [
  {
    backgroundImage: hellKitchen,
    title: "announcements",
    heading: "Get Cooking with Gordon Ramsay’s Hell’s Kitchen",
    info: "May 22, 2023 - 3 min read",
  },
  {
    backgroundImage: careBears,
    title: "partnerships",
    heading: "Unbox: Care Bears Leverage The Sandbox to Build a Stronger Bond",
    info: "May 22, 2023 - 5 min read",
  },
  {
    backgroundImage: kVerse,
    title: "own",
    heading: "The Second Korea Impact is coming",
    info: "May 22, 2023 - 5 min read",
  },
];

export const partners_logos = [
  snoop,
  walkingDead,
  adidas,
  china,
  sevenfold,
  hawtin,
  smurf,
  hellsKitchen,
  rollerCoaster,
  deadMamu,
  atari,
  careBear,
  blondish,
  amonica,
];

export const c1 = ["Knowledge Base", "Whitepaper", "Licenses"];

export const c2 = ["Careers", "Press", "FAQ"];

export const c3 = ["Terms of use", "Privacy Policy", "Help Center"];

export const socialIcons = [
  Discord,
  Facebook,
  Instagram,
  Medium,
  Telegram,
  Twitter,
  Twitch,
  Youtube,
];

export const eventsPageTags = [
  {
    title: "All",
    count: "32",
  },
  {
    title: "Special",
    count: "20",
  },
  {
    title: "Giveaway",
    count: "12",
  },
];
