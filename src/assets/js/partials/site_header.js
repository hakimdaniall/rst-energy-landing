(function () {
  document.addEventListener("DOMContentLoaded", function() {
      // If on the root path, set currentUrl to "index", else remove leading/trailing slashes
      const currentUrl = window.location.pathname === "/" ? "index" : window.location.pathname.replace(/^\/|\/$/g, "");

      const menuLinks = document.querySelectorAll("#navmenu a");

      menuLinks.forEach(link => {
          // Normalize href by removing leading slash
          const linkHref = link.getAttribute("href").replace(/^\/|\/$/g, "") || "index";

          // Add active class if href matches currentUrl
          if (linkHref === currentUrl) {
              link.classList.add("active");
          }
      });
  });
})();
