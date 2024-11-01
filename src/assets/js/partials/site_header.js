(function () {
    document.addEventListener("DOMContentLoaded", function() {
      const currentUrl = window.location.pathname.split("/").pop();
      const menuLinks = document.querySelectorAll("#navmenu a");
    
      menuLinks.forEach(link => {
        if (link.getAttribute("href") === currentUrl) {
          link.classList.add("active");
        }
      });
    });
})();
  