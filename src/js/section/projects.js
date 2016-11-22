

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

  }(page);



