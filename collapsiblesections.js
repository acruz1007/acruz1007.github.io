document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".collapsible");

  sections.forEach(function(section) {
    const button = section.querySelector(".toggle");

    button.addEventListener("click", function () {
      section.classList.toggle("active");

      if (section.classList.contains("active")) {
        button.textContent = "-";
      } else {
        button.textContent = "+";
      }
    });
  });
});