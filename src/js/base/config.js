

/*=================================
  config.js
  =================================*/
  var myPage = (function(page) {
    "use strict";

    var arrProjects = [

      {
        title: "Infinite Scrolling",
        category: "Website",
        description: "A demo of the infinite scrolling illusion I had on an earlier version of my website.",
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
        description: "A simple website to search the USDA nutrient database.",
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
        description: "The Frameshop is a family owned business specializing in custom framing.",
        links: [
          {
            href: "http://www.theframeshopsite.com",
            text: "View Website"
          }
        ]
      },
      {
        title: "modBIAS",
        category: "Gaming",
        description: "Better Inventory & Saddlebags is a mod I created for The Witcher 3 PC game.",
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
        description: "A Google Maps JavaScript API v3 library to split an exisiting polygon into two separate polygons.",
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