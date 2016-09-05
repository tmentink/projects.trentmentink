

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


// ===========================================
// Projects
// ===========================================
  !function(page) {
    "use strict";

    var HTML = "<div class='card-deck'>";

    for (var i = 0, i_len = page.projects.length; i < i_len; i++) {
      var project = page.projects[i];
      HTML += "<div class='card'><div class='card-header'>";
      HTML += "<h2 class='card-title'>" + project.title + "</h2>";
      HTML += "<h4 class='card-subtitle'>" + project.category + "</h4></div>";
      
      // add img 
      var img = project.imgs[0];
      switch(img.type) {
        case "img":
          HTML += "<img src='" + img.src + "' class='img-fluid'>";
          break;

        case "icon":
          HTML += "<div class='img-placeholder'><i class='fa " + img.src + "'></i></div>";
          break;

        default:
        HTML += "<div class='img-placeholder'><i class='fa fa-file-code-o'></i></div>";
          break;
      }

      // add description
      HTML += "<div class='card-block'><p class='card-text'>" + project.description + "</p>";

      // add each link
      for (var l = 0, l_len = project.links.length; l < l_len; l++) {
        var link = project.links[l];

        HTML += "<a href='" + link.href + "' class='card-link' target='_blank'>" + link.text + "</a>";
      }

      // add closing tags
      HTML += "</div></div>";

      // close card deck tag after every 3rd project
      if ((i + 1) % 3 === 0) {
        HTML += "</div><div class='card-deck'>"
      }
    }

    // add empty placeholders to fill out card decks
    var numEmpty = page.projects.length % 3;

    if (numEmpty > 0) {
      for (var e = 0, e_len = (3 - numEmpty); e < e_len; e++) {
        HTML += "<div class='card invisible'></div>";
      }
    }

    // append html string
    $(".card-deck-wrapper").html(HTML);

  }(myPage);



