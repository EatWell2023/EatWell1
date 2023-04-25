// all images imported from images directory
import product_01_image_01 from "../petimages/product_01.webp";
import product_01_image_02 from "../petimages/product_01.1.webp";
import product_01_image_03 from "../petimages/product_01.3.webp";

import product_02_image_01 from "../petimages/product_2.1.webp";
import product_02_image_02 from "../petimages/product_2.2.webp";
import product_02_image_03 from "../petimages/product_2.3.webp";

import product_03_image_01 from "../petimages/product_3.1.webp";
import product_03_image_02 from "../petimages/product_3.2.webp";
import product_03_image_03 from "../petimages/product_3.3.webp";

import product_04_image_01 from "../petimages/product_4.1.webp";
import product_04_image_02 from "../petimages/product_4.2.webp";
import product_04_image_03 from "../petimages/product_4.3.webp";

import product_05_image_01 from "../petimages/product_04.webp";
import product_05_image_02 from "../petimages/product_08.webp";
import product_05_image_03 from "../petimages/product_09.webp";

// import product_06_image_01 from "../images/bread(1).png";
// import product_06_image_02 from "../images/bread(2).png";
// import product_06_image_03 from "../images/bread(3).png";

const products = [
  {
    id: "01",
    title: "Purepet Ocean Fish Adult Dry Cat Food, 1.2kg",
    price: 230.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },

  {
    id: "02",
    title: "Purepet Chicken & Vegetable Adult Dry Dog Food, 20kg",
    price: 2000.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "03",
    title: "Pedigree Puppy Dry Dog Food, Chicken & Milk, 3kg Pack",
    price: 650.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "04",
    title: "WIGGLES Ykibble Puppy Food Dry Small Dogs Starter, 900 gm",
    price: 600.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "05",
    title: "Meat Up Dry Adult Cat Food, Mackerel Flavor, 1.2 Kg",
    price: 450.0,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Burger",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "06",
    title: "Royal Cheese Burger",
    price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "07",
    title: "Drools Chicken and Egg Adult Dry Dog Food, 3 kg with Free 1.2 kg",
    price: 615.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "08",
    title: "Kennel Kitchen Adult & Puppy Dog Food, Chicken and Lamb Chunks in Gravy, 12 Pouches (12 x 70g Each)",
    price: 400.0,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "09",
    title: "Pets Empire Pet Food Dried Chicken Stick Good Tasted Dog Snack (Peanut Butter + Carrot Flavour) 70 GMS x 2",
    price: 250.0,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "10",
    title: "Whiskas Kitten Small (2-12 months) Dry Cat Food, Ocean Fish, 1.1kg Pack",
    price: 500.0,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Burger",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

//   {
//     id: "11",
//     title: "Tea",
//     price: 10.0,
//     image01: product_06_image_01,
//     image02: product_06_image_02,
//     image03: product_06_image_03,
//     category: "Bread",

//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
//   },

//   {
//     id: "12",
//     title: "Coffee",
//     price: 15.0,
//     image01: product_06_image_02,
//     image02: product_06_image_01,
//     image03: product_06_image_03,
//     category: "Bread",

//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
//   },

//   {
//     id: "13",
//     title: "French Fries ",
//     price: 45.0,
//     image01: product_06_image_03,
//     image02: product_06_image_02,
//     image03: product_06_image_03,
//     category: "Bread",

//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
//   },
];

export default products;
