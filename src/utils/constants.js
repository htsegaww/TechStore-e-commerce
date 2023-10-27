import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Our mission is to enrich lives by providing high-quality technologies that enhances the use of technology. We strive to exceed customer expectations by offering a diverse range of incredible devices, exceptional service, and a seamless shopping experience.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Our vision is to be the leading destination for technology, where customers can find inspiration, exceptional quality, and personalized solutions for their unique style and needs. We aim to create spaces that evoke comfort, joy, and a sense of belonging, making every person to enjoy their technology with affordable prices.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "With a rich heritage spanning over 10 years, our tech company has evolved into a trusted name in the industry. Starting as a small family-owned business, we have grown to become a nationwide presence, driven by our passion for creating timeless, durable, and aesthetically pleasing technologies.",
  },
];

// export const products_url = 'https://course-api.com/react-store-products'
export const products_url = "/.netlify/functions/products";

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
export const single_product_url = "/.netlify/functions/singleProduct?id=";
