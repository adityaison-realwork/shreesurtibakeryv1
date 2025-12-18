import { Product, Review, NavItem } from './types';

export const APP_NAME = "Shree Surti Bakery";

export const IMAGES = {
  hero_croissant: "https://lh3.googleusercontent.com/aida-public/AB6AXuCM3bMQItfR7Tt9vJYW8fIPyq3d3DpIxIkU7PiMAAh3Owfo-AdPTlViekSWC86AYJTYw02vSugpNuleFbQIFTEgx7ayocIfM7eYDCIDSJOTXusVBFz-6O3mmHjT17L09Zg8GmWK4atJ4J8xPFDB2Itmwi9UxK1YXcvxKIm9l4rxMKHFHegk7_sENBEkt7XpvkrbONT88ErlZowtzWHz6cUjg50JWo1pMEAI1niRlhI_MKlwxvwaDz0lXgP4EslJo1syBFHVjOyEEYmP",
  sourdough: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFDsg0XNzjBl_si_2LiNix19p-Tg4MStwsaS_o9UCia5cPtoMLQ4J-Bxc_yUG7J9eohe6zBiEJDaGqOpR44uCCsN4-7Z-1g5igNij7EaOgpar3QwKgShqjsTr8c5yI8suOsthLDOmNiHXCKXAe3LVEHz8tEkkEMjrXLTAMpyHFLIkGsld7CE_HNGARW4dRHETM7h13GXK6zToUunelQv1AMXtG6JN7PxlQdktA5VWn7fX3MPVySltvledxUqKKRWViIM6lgx0t00Hr",
  danish: "https://lh3.googleusercontent.com/aida-public/AB6AXuC35oynUdFlC5IbV9Wo38SIKnEvGbWmRtkQRSFKMCSHIox8-DqLCgd1R36Dl6M_od75Fq2oRvZlXC9w4mtzqdEYKUlJmfWExo4sY-yli19mvg9SNs_V0KXcS7ExSykSuG5gfz6DGTUJzY7mT_J1Kmk1lc173QGljw8ETCH2y9ggfoFKkynUD1q-Z5I7B8cV-rkwGH9UVaAvvJYce3E9OFeYGY-wS46BKX3XU_q8MiXKpon-utPFDjPCI1Mdewph4LGWll6Eup89lzAs",
  cruffin: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvXSXylloaxZUekavMzxufKTk37IYqoL04jlVm4xiiCeUZrHZQxQUigfpkR3kmmdpR8Faro3YWo_GWQrQaklcB5pynXpZHaZvp3OQPDgMiIVM3TDZ_4mULXEJtPvxV64pCfkLAQQoxhlrW0jb0_zyPBaQu4m5kOVAf8mfUd15T3Qrbv77obp-GN-m2bzNN_3a5Hn73_KofbjS0DbGLkr4pH1uls-GpIvIjBRpyrDz-nZPDKh5-6PCOVJ35IKTxuDZZ-RrCi6P_jagR",
  morning_bun: "https://lh3.googleusercontent.com/aida-public/AB6AXuBx87vJn5dGEtwnNsA2p9DpptwbaPFzC8syBFbXvnug5Cp-q5ICazXpEo5k1rKDtjFBC3AXSf3Rwd0zn4pvrCwxECP9eo4rm-ctG9j4I-KbJJFI8LrZD34yheLLgIFVJpeOCmZ6ZDjP_dOIh5VBnAU030vLeOFud0CRTAUvm5Hz6kNud9oI2826aX2hUVY9Sx4th6BminW_l8MtsCSjqNf7uHuV1K_XmPPK6Vkzw8LsFHWwUuYmIjqOMCbHhWbd15B29B2jV2p1wQG2",
  country_loaf: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKw9UAQkRFoALjh5hDE_MQhuJzMWchoAjpTm66Fv8IpTCaPmlLNC6bovFYJzjF0joT906pteWf2dTnlaWOcDW7dxqkPpgoLOO5OqcHKftyfZmKBx7aaKwlVR_-aUbxuX2XsPNui7BlvXsR-TLybfHgw4Ht9tezgSoQTplAtDnbAh50VDy89_4GERqrlc24KGGCaSqb6xIp-pyKVazx9FveM5ryRDSOvCvo6_tDbJpttvMwe-nokrlUOMT5HVH36zZMqVYNGnWBaNB_",
  almond_croissant: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ1EJg3nCcqatP_UaZ87YyuHa4nGTMXyBxYb8tZH0ec_9rCbFQ8W0yvefBijWv912qgDp6ZvkrJ9HEkqEx4qiQpFoEYlwQRmkzZVXZEu6vdOK_fIYZcVFSdi6yxy1MdcxLrUMPD_kn2oUsuLr7-xBTYb10jrAwZf3HzkEpb8Y-avIM15JKFyoiXSGjgTVzwo8WBbNVXAWkkc_OiNaBsKPmqi52WaZyvOJiJXlwms3q_R3qpjCD-1evaekXR-5-LFCCjjZxUQMUzLGS",
  macarons: "https://lh3.googleusercontent.com/aida-public/AB6AXuAptsH4adKphSZrTC9lhx3oxGAX7qd7dohxea7Xx47zyTJrfpSz2Nuvf93FxSMKF0Jf4x0i_1lT5hKDUex7Ri7nhx5oTWF9GcwWuY-xd4p_hrFnOha87mKDcRZWrny_9bB0zVF98S_0BfL_IlDIu3DpNxz24weJjCCI8QfqHPu2PCBY3wXV4bUkyWFy43rwCvaZsJyhqJPVtK61mAdEFxjzG1uQLP4aK_RO2ElDmaRTDrSWxK-dsmVWJ45LZBEag9uXlWa4KH7OBuHI",
  latte: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeNc1-uLdU43MVvUV-NfhfA5lvUORSfTR2hYSqkR3sqWJBZgX1EdG9ma28MDzzzdnJZraaqkf42sr0MSejJ8RwIobVwTBsV0yehi8TOng1O4AzBcUswl1_xxewf8wyvkroAQ5aYlS58N2GeD5-OFrqetUjspmq_Ksf5OOgjujwosIkY2a3h-LSlusyRYiD7CNXr5ep1jaHe2nFrXVTXy5Bchi4Q3X6d2nbPa3LxT41MYFC3dJttVUBvzHPWAJsE7j1MXulMpDZ9LeN",
  texture: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFEwEG1YyAr7Rq3UCkeQgnFDkwdTQoBa8bs9gSGMyXaaw40xZg29kl4KgBqgz34v3zQYAt0PZ5hQriJzyf2AVYab99mLpU4IPZQfQBhST7i1doIEdCBBL6vzvy3YtYO9iDf3T9HfcdAnY-y0D_0SDEL73PowHW6_vH_7Hwwx1H-fDm8796r-pRm9EvOySBiwfNdOK6jj-dMPXmh5Rk9_cXaVFw1wkdMJfwVeIOUl_XNtrNtxYWnhps3IRyRXBzSxUtHzJCLdz8nNUQ",
  bagel: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjXXqHYTAwTHzijwx1rAU5PhcZjPEXF81VqEjmuFqiwOaYMCtmQy1SwyhNWGtwCsK5XM9vTBrKJWELvcKvqyuFKoyCFV2OWNUxqOPAP5ZQFSKiYODFvH9kOrR63XIfyBQFAJQ4dx_ceOXFU9MVhCfAa86QMBskVyqNxgvyyBGIASQbXMeV4zL7bTROtYLvqruskMyP4e1K4t8ktO4ycWvhfMNzkT02gnaMgmYsOAQDd_SllRbLu4IaynFe708zx1cbo2emWD0nVS1_",
  hero_desktop: "desktop-final.jpeg",
  hero_mobile: "mobile-final.jpeg"
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Morning Bun',
    price: 4.50,
    category: 'Sweet',
    description: 'Sticky, sweet, and perfectly flaky with cinnamon and orange zest.',
    image: IMAGES.morning_bun,
    tags: ['Featured', 'Fresh Baked'],
    featured: true
  },
  {
    id: '2',
    name: 'Sourdough Loaf',
    price: 8.00,
    category: 'Sourdough',
    description: 'Tangy, chewy, and baked wild in the heart of the city.',
    image: IMAGES.sourdough,
    tags: ['Wild Yeast'],
    featured: true
  },
  {
    id: '3',
    name: 'Berry Danish',
    price: 4.50,
    category: 'Sweet',
    description: 'Flaky pastry filled with fresh berry jam.',
    image: IMAGES.danish,
    tags: ['Fresh Jam'],
    featured: true
  },
  {
    id: '4',
    name: 'Sugar Cruffin',
    price: 5.00,
    category: 'Sweet',
    description: 'A croissant-muffin hybrid dusted in sugar.',
    image: IMAGES.cruffin,
    tags: ['Best Seller']
  },
  {
    id: '5',
    name: 'Country Loaf',
    price: 8.00,
    category: 'Sourdough',
    description: 'Rustic and hearty, perfect for sandwiches.',
    image: IMAGES.country_loaf,
  },
  {
    id: '6',
    name: 'Almond Croissant',
    price: 5.25,
    category: 'Sweet',
    description: 'Double baked with almond cream and topped with sliced almonds.',
    image: IMAGES.almond_croissant,
  },
  {
    id: '7',
    name: 'Macaron Box',
    price: 12.00,
    category: 'Sweet',
    description: 'Assorted flavors of delicate French macarons.',
    image: IMAGES.macarons,
  },
  {
    id: '8',
    name: 'Barista\'s Choice',
    price: 4.00,
    category: 'Coffee',
    description: 'Perfectly roasted beans brewed to perfection.',
    image: IMAGES.latte,
  },
  {
    id: '9',
    name: 'Everything Bagel',
    price: 3.00,
    category: 'Savory',
    description: 'Toasted perfection with seeds and salt.',
    image: IMAGES.bagel,
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Priya Patel',
    rating: 5,
    text: 'The best sourdough in the city! Reminds me of the bakeries in San Francisco. A must-visit.',
    date: '2 weeks ago',
    avatar: 'https://i.pravatar.cc/150?u=priya'
  },
  {
    id: '2',
    author: 'Rahul Mehta',
    rating: 5,
    text: 'Their Morning Bun is out of this world. Perfectly flaky and not too sweet. Great coffee too!',
    date: '1 month ago',
    avatar: 'https://i.pravatar.cc/150?u=rahul'
  },
  {
    id: '3',
    author: 'Sarah Jenkins',
    rating: 4,
    text: 'Lovely atmosphere and friendly staff. The almond croissant was delicious.',
    date: '3 weeks ago',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/', icon: 'home' },
  { label: 'Menu', path: '/menu', icon: 'restaurant_menu' },
  { label: 'Gallery', path: '/gallery', icon: 'photo_library' },
  { label: 'Reviews', path: '/reviews', icon: 'star' },
  { label: 'About', path: '/about', icon: 'storefront' },
  { label: 'Contact', path: '/contact', icon: 'location_on' },
];