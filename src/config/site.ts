import { type NavItem, type NavItemFooter } from "@/types"

const links = {
  github:
    "https://github.com/pjborowiecki/SAASY-LAND-Next-14-Starters-With-Authentication-And-Database-Implemented",
  twitter: "https://twitter.com/pjborowiecki",
  linkedin: "https://www.linkedin.com/in/pjborowiecki",
  discord: "",
  authorsWebsite: "https://pjborowiecki.com",
  authorsGitHub: "https://github.com/pjborowiecki",
  openGraphImage: "https://saasyland.com/images/opengraph-image.png",
}

export const siteConfig = {
  name: "Nutri Disease",
  description:
    "An open-source starter for Next.js 14 full-stack projects with advanced authentication and several database configurations. The aim of this project is to provide a solid foundation for faster building and launching SaaS products, marketing sites, blogs, and more.",
  links,
  url: "https://saasyland.com",
  ogImage: links.openGraphImage,
  author: "dhruv patidar",
  hostingRegion: "fra1",
  keywords: ["food-relation", "food", "disease"],
  navItems: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Features",
      href: "/features",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "FAQ",
      href: "/faq",
    },
  ] satisfies NavItem[],
  navItemsMobile: [],
  navItemsFooter: [
    {
      title: "Company",
      items: [
        {
          title: "About",
          href: "/about",
          external: false,
        },
        {
          title: "Privacy",
          href: "/privacy",
          external: false,
        },
        {
          title: "Terms",
          href: "/tos",
          external: false,
        },
       
      ],
    },
    {
      title: "Support",
      items: [
       
        {
          title: "FAQ",
          href: "/faq",
          external: false,
        },
       
        {
          title: "Contact",
          href: "/contact",
          external: false,
        },
      ],
    },
   
  ] satisfies NavItemFooter[],
}
