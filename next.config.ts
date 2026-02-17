import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos", pathname: "/**" },
      { protocol: "https", hostname: "i.postimg.cc", pathname: "/**" },
      { protocol: "https", hostname: "postimg.cc", pathname: "/**" },
      { protocol: "https", hostname: "st2.depositphotos.com", pathname: "/**" },
      { protocol: "https", hostname: "media-cldnry.s-nbcnews.com", pathname: "/**" },
      { protocol: "https", hostname: "images.ctfassets.net", pathname: "/**" },
      { protocol: "https", hostname: "media.licdn.com", pathname: "/**" },
      { protocol: "https", hostname: "www.thespectrum.com", pathname: "/**" },
      { protocol: "https", hostname: "cdn.hswstatic.com", pathname: "/**" },
      { protocol: "https", hostname: "s.abcnews.com", pathname: "/**" },
      { protocol: "https", hostname: "eu-images.contentstack.com", pathname: "/**" },
      { protocol: "https", hostname: "www.checklistboards.com", pathname: "/**" },
      { protocol: "https", hostname: "www.researchgate.net", pathname: "/**" },
      { protocol: "https", hostname: "m.media-amazon.com", pathname: "/**" },
      { protocol: "https", hostname: "storage.googleapis.com", pathname: "/**" },
      { protocol: "https", hostname: "www.learnow.live", pathname: "/**" },
      { protocol: "https", hostname: "www.geckoboard.com", pathname: "/**" },
      { protocol: "https", hostname: "images.klipfolio.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
