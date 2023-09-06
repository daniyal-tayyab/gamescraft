export const mapMode = [
  {
    icon: "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/28_Map/sidebar/buy-icon.svg",
    title: "LAND",
    tag: "sale",
    disable: false,
    sublist: [
      {
        title: "Lower Price",
        options: [
          {
            option: "Lower Price",
            check: false,
            type: "price",
          },
          {
            option: "Higher Price",
            check: false,
            type: "price",
          },
        ],
      },
      {
        title: "Currency",
        options: [
          {
            option: "ETH",
            check: false,
            type: "currency",
          },
          {
            option: "SAND",
            check: false,
            type: "currency",
          },
          {
            option: "USDC",
            check: false,
            type: "currency",
          },
          {
            option: "WETH",
            check: false,
            type: "currency",
          },
        ],
      },
      {
        title: "LAND Type",
        options: [
          {
            option: "Premium",
            check: false,
            type: "land",
          },
          {
            option: "Regular",
            check: false,
            type: "land",
          },
        ],
      },
      {
        title: "Blockchain",
        options: [
          {
            icon: "",
            option: "Ethereum",
            check: false,
            type: "chain",
          },
          {
            option: "Polygon",
            check: false,
            type: "chain",
          },
        ],
      },
    ],
  },
  {
    icon: "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/28_Map/sidebar/explore-icon.svg",
    title: "Explore",
    disable: false,
  },
  {
    icon: "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/28_Map/play.svg",
    title: "Play (Comming Soon)",
    disable: true,
  },
];

export const markers = [
  {
    icon: "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/28_Map/sidebar/partners-icon.svg",
    title: "Partners",
    check: false,
    sublist: [
      {
        title: "Category",
        type: "category",
        list: [
          "Exchange/Marketplace",
          "NFT Collections",
          "Media",
          "Entertainment",
          "Sport",
          "Gaming",
          "Music",
          "Art",
          "Fashion/Luxury",
          "Retail",
          "Lifestyle",
          "Other",
        ],
      },
      {
        title: "Name",
        type: "name",
        list: [
          "TIME Magzine",
          "L'Offical",
          "Care Bears",
          "The Walking Dead",
          "Playboy",
          "Tony Hawk",
          "Atari",
          "Ubisoft Rabbits",
          "Faze Clan",
          "Snoop Dog",
          "Steve Aoki",
          "Warner Music Group",
          "GUCCI",
          "The Marathon",
          "Paris Hilton",
          "Cipriani",
          "Show More",
        ],
      },
    ],
  },
  {
    icon: "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/28_Map/sidebar/mylands-icon.svg",
    title: "My LAND",
    check: false,
  },
];
