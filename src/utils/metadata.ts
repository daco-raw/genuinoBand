const metadata = {
  home: {
    title: "Genuino Band",
    desc: "Somos una banda musical cristiana de música contemporánea",
    favicon: "/favicon.ico",
    author: "Daniel Colmenares",
    website: "http://dacoapp.com",
    generator: "Dacoapp.com",
    keywords: "banda musical, worship, alabanza",
    googleBots: "index, follow, noimageindex",
    robots: "index, follow, nocache",
    category: "Banda musical",
  },
  about: {
    title: "Sobre Nosotros",
    desc: "Somos una banda musical cristiana de música contemporánea",
    favicon: "/favicon.ico",
    author: "Daniel Colmenares",
    website: "http://dacoapp.com",
    generator: "Dacoapp.com",
    keywords: "banda musical, worship, alabanza",
    googleBots: "index, follow, noimageindex",
    robots: "index, follow, nocache",
    category: "Banda musical",
  },
};

const { home, about } = metadata;

const HomeMeta = {
  title: home.title,
  desc: home.desc,
  favicon: home.favicon,
  author: home.author,
  website: home.website,
  generator: home.generator,
  keywords: home.keywords,
  googleBots: home.googleBots,
  robots: home.robots,
  category: home.category,
};

const AboutMeta = {
  title: about.title,
  desc: about.desc,
  favicon: about.favicon,
  author: about.author,
  website: about.website,
  generator: about.generator,
  keywords: about.keywords,
  googleBots: about.googleBots,
  robots: about.robots,
  category: about.category,
};

export { HomeMeta, AboutMeta };
