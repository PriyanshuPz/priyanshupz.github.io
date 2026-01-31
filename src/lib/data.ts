export const PRESENT = {
  project: {
    name: "💛 MISTY",
    description:
      "A secure gateway. It helps you sync, manage, share, and publish your personal notes, journals, and ideas. Without becoming the place where they live.",
    url: "https://misty.p8labs.tech",
    image:
      "https://res.cloudinary.com/pz-public-assets/image/upload/v1769082663/banner_lgf80i.png",
  },
};

export function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
export const posts = [
  {
    url: "/blog/Build-smart-apps-with-Free-tiers",
    title: "📝 Build smart apps with Free tiers",
    description:
      "the kind of tech that can turn your app from “meh” to “whoa!” faster than you can say “machine learning.” ",
    date: "2024-09-29",
    tag: "Resource",
    read: "5 min",
  },
];
