

// ===========================================
// Utility
// ===========================================
  var myPage = (function(page) {
    "use strict";

    var arrProjects = [

      {
        title: "Infinite Scrolling",
        category: "Website",
        description: "A demo of the infinite scrolling illusion I had on an earlier version of my website. All images were created by me using Sketchbook Pro.",
        imgs: [
          {
            type: "img",
            src: "img/projects/infinitescroll.jpg"
          }
        ],
        links: [
          {
            href: "/projects/infinite_scroll",
            text: "View Demo"
          }
        ]
      },
      {
        title: "USDA Search",
        category: "Website",
        description: "A client-side website that uses ajax to search the USDA nutrient database and display macronutrients. Leverages the browser's local storage to save favorites.",
        imgs: [
          {
            type: "img",
            src: "img/projects/usda.jpg"
          }
        ],
        links: [
          {
            href: "/projects/usda_search",
            text: "View Project"
          },
          {
            href: "https://github.com/tmentink/usda_search",
            text: "View GitHub"
          }
        ]
      },
      {
        title: "The Frameshop",
        category: "Client",
        description: "The Frameshop is a family owned business specializing in custom framing. I worked closely with them to design and develop a brand new mobile-friendly website.",
        imgs: [
          {
            type: "img",
            src: "img/projects/frameshop.jpg"
          }
        ],
        links: [
          {
            href: "http://www.theframeshopsite.com",
            text: "View Website"
          },
          {
            href: "http://old.theframeshopsite.com",
            text: "View Old Website"
          }
        ]
      },
      {
        title: "modBIAS",
        category: "Gaming",
        description: "Better Inventory & Saddlebags is a mod I created for The Witcher 3 PC game. It gives all items weight and allows players to store them on their horse. It also includes a custom menu to tweak all the mod's settings.",
        imgs: [
          {
            type: "img",
            src: "img/projects/modBIAS.jpg"
          }
        ],
        links: [
          {
            href: "http://www.nexusmods.com/witcher3/mods/1900/?",
            text: "View Nexus"
          }
        ]
      },
      {
        title: "Polygon Splitting",
        category: "Javascript",
        description: "A Google Maps JavaScript API v3 library to split an exisiting polygon into two separate polygons. This extends the polygon object to include a split() method which accepts another polygon as a paramter.",
        imgs: [
          {
            type: "img",
            src: "img/projects/polygonsplitting.jpg"
          }
        ],
        links: [
          {
            href: "/projects/polygon_splitting",
            text: "View Demo"
          },
          {
            href: "https://github.com/tmentink/google-maps-polygon-splitting",
            text: "View GitHub"
          }
        ]
      }

    ]; // end of arrProjects


    /* create projects namespce
    -------------------------------*/
    page.projects = arrProjects;

    
    return page;

  })(myPage || {});