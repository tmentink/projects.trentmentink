

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


// ===========================================
// Utility
// ===========================================

  !(function (root) {
    "use strict";

    /* debounce
    -------------------------------*/
    var debounce = function (fn, delay) {
      if (delay === undefined) { delay = 250; }

      var timer = null;
      return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
          fn.apply(context, args);
        }, delay);
      };
    }


    /* throttle
    -------------------------------*/
    var throttle = function(fn, delay) {
      if (delay === undefined) { delay = 250; }

      var deferTimer,
          last;
      return function () {
        var context = this;

        var now = +new Date,
            args = arguments;
        if (last && now < last + delay) {
          // hold on to it
          clearTimeout(deferTimer);
          deferTimer = setTimeout(function () {
            last = now;
            fn.apply(context, args);
          }, delay);
        } else {
          last = now;
          fn.apply(context, args);
        }
      };
    }


    /* selector_cache
    -------------------------------*/
    if (root.jQuery) {
      var selector_cache = function() {
        var elementCache = {};

        var get_from_cache = function( selector, $ctxt, reset ) {
          if ( "boolean" === typeof $ctxt ) {
            reset = $ctxt;
            $ctxt = false;
          }
          var cacheKey = $ctxt ? $ctxt.selector + ' ' + selector : selector;

          if ( undefined === elementCache[ cacheKey ] || reset ) {
            elementCache[ cacheKey ] = $ctxt ? $ctxt.find( selector ) : jQuery( selector );
          }

          return elementCache[ cacheKey ];
        };

        get_from_cache.elementCache = elementCache;
        return get_from_cache;
      }
    }
    

    /* public methods
    -------------------------------*/
    root.utility = {
      debounce: debounce,
      throttle: throttle
    };

    if (selector_cache) {
      root.$cache = new selector_cache();
    } 

  })(this);


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
      HTML += "<div class='card-block'><p class='card-text'>" + project.description + "</p>";

      // dynamically add each link
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
    $cache(".card-deck-wrapper").html(HTML);

  }(myPage);



