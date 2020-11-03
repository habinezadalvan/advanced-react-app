const images = require("../assets/imageUrls");
const visitRwanda = require('../assets/Visit-Rwanda-1024x461.png')
const converge = require('../assets/converge.png')
const innate = require('../assets/innate.png')
const idck = require('../assets/idck.png')
const lig = require('../assets/lig.png')
module.exports = [
  {
    id: 9,
    name: "SEKA",
    description: `Seka is a local e-commerce for food`,
    link: "https://play.google.com/store/apps/details?id=com.minega25.seka&hl=en",
    image: images.seka,
    btn: 'Install'
  },
  {
    id: 3,
    name: "Authors haven",
    description: `I worked on both frontend and backend of ​Author’s haven application​ in Andela. Its aim was to create a community of like minded authors to foster inspiration and innovation by leveraging the modern web technology. I used ​Javascript, Reactjs/Redux on frontend and Nodejs/Expressjs , PostgresQL, sequelize ​on Backend..`,
    link: "https://github.com/habinezadalvan",
    image: images.authorsHaven,
    btn: 'Github'
  },
  {
    id: 5,
    name: "Visit Rwanda",
    description: `Visit Rwanda is a website that gives an overview of Rwanda's beauty.`,
    link: "https://habinezadalvan.github.io/visit-Rwanda/#section-popular",
    image: visitRwanda,
    btn: 'Visit'
  },
  {
    id: 1,
    name: "Digitol website",
    description: `Digitol is a startup company aiming to digitalize and automate bussinesses' systems.`,
    link: "https://digitol.netlify.app/",
    image: images.digitologo,
    btn: 'Visit'
  },
  
  {
    id: 4,
    name: "Converge",
    description: `I have been a frontend developer for Converge companion app, code is available on github https://github.com/andela/mrm_front​. It was designed to allow all Andelans to book and access meeting rooms by leveraging web . I used different tools and technologies including React, React Apollo, Apollo GraphQL.`,
    link: "https://github.com/habinezadalvan",
    image: converge,
    btn: 'Github'
  },
  {
    id: 10,
    name: "Women films production",
    description: `I redesigned and developed the Women films production ltd's website.`,
    link: "https://www.womenfilmsproduction.com/index.html",
    image: images.womenfilms,
    btn: 'Visit'
  },
  {
    id: 2,
    name: "LIG App",
    description: `LIG App, is a mobile application designed to automate small saving groups' systems.`,
    link: "https://exp.host/@habinezadalvan/LIGApp",
    image: images.ligLogo,
    btn:'expo'
  },
  {
    id: 6,
    name: "Innate house web app Design",
    description: `Innate house is a local e-commerce.`,
    link: "https://www.figma.com/file/zvm3WO0fsYDun4o3VtGTzo/Innate-house?node-id=0%3A1",
    image: innate,
    btn:'Figma'
  },
  {
    id: 7,
    name: "IDCK website Design",
    description: `IDCK is a local social interprise.`,
    link: "https://www.figma.com/file/SOAvXoWHTtOHS77gvV5fzI/IDCK-project?node-id=0%3A1",
    image: idck,
    btn:'Figma'
  },
  {
    id: 8,
    name: "LIG Design",
    description: `LIG App, is a mobile application designed to automate small saving groups' systems.`,
    link: "https://www.figma.com/file/NMCl01flUcP0StCYHu6HDM/LIG",
    image: lig,
    btn:'Figma'
  },

];
