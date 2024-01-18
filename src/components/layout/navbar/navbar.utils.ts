export const MenuLinks = [
  { name: "Home", url: "/", children: null },
  {
    name: "Shop",
    url: "/shop",
    children: [
      {
        title: "Product 1",
        route: "/shop",
      },
      {
        title: "Product 2",
        route: "/shop",
      },
      {
        title: "Product 3",
        route: "/shop",
      },
    ],
  },
  { name: "About", url: "/about", children: null },
  { name: "Blog", url: "/blog", children: null },
  { name: "Contact", url: "/blog", children: null },
  {
    name: "Pages",
    url: "/pages",
    children: null,
  },
];
