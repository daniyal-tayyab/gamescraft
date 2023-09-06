import collectiblePacks from "../images/marketplace/categories/collectionShopNav.avif";
import avatar from "../images/marketplace/categories/avatarShopNav.avif";
import entity from "../images/marketplace/categories/entitiesShopNav.avif";
import equipment from "../images/marketplace/categories/equipmentShopNav.avif";
import land from "../images/marketplace/categories/landShopNav.avif";

import {
  experience,
  avatars,
  collectiblePack,
  enhanceAvatar,
  newAssets,
  leads,
} from "./marketExperience";

export const marketplaceCategories = [
  {
    title: "collectible packs",
    image: collectiblePacks,
    color: "#5921ac",
  },
  {
    title: "avatar",
    image: avatar,
    color: "#b62dcc",
  },
  {
    title: "entity",
    image: entity,
    color: "#3b34e5",
  },
  {
    title: "equipment",
    image: equipment,
    color: "#0357ad",
  },
  {
    title: "land & estate",
    image: land,
    color: "#3eb48c",
  },
];

export const swiperSectionData = [
  collectiblePack,
  avatars,
  experience,
  enhanceAvatar,
  newAssets,
  leads,
];
