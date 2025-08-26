export const site = {
  name: "Further South",
  eyebrow: "Further South", // shown above the title; change or set to '' to hide
  location: "Some Hotel, Portsmouth",
  date: "May 25th",
  description: "UK furry convention",
  logo: "/favicon.svg",
  nav: [
    { label: "Registration", folder: "registration" },
    { label: "Activities", folder: "activities" },
    { label: "About Us", folder: "about-us" },
    { label: "Wyvern Events", folder: "wyvern-events" },
  ],
};

export type Site = typeof site;
