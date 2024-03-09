const metadata = {
  home: {
    title: "Genuino Band",
    desc: "Somos una banda musical cristiana de música contemporánea",
    favicon: "/favicon.ico",
    author: "Daniel Colmenares",
    website: "http://dacoapp.com",
    generator: "Dacoapp.com",
  },
  about: {
    title: "Sobre Nosotros",
    desc: "Somos una banda musical cristiana de música contemporánea",
    favicon: "/favicon.ico",
    author: "Daniel Colmenares",
    website: "http://dacoapp.com",
    generator: "Dacoapp.com",
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
};

const AboutMeta = {
  title: about.title,
  desc: about.desc,
  favicon: about.favicon,
  author: about.author,
  website: about.website,
  generator: about.generator,
};

export { HomeMeta, AboutMeta };
