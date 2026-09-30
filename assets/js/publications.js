(function () {
  "use strict";

  if (!("ResizeObserver" in window)) return;

  const desktop = window.matchMedia("(min-width: 901px)");

  document.querySelectorAll(".publication-grid").forEach(function (grid) {
    const cards = Array.from(grid.querySelectorAll(".publication-card"));
    let pending = false;

    function layout() {
      pending = false;

      if (!desktop.matches) {
        grid.classList.remove("is-masonry");
        cards.forEach(function (card) {
          card.style.removeProperty("--publication-row-span");
        });
        return;
      }

      if (!grid.getBoundingClientRect().width) return;

      const style = window.getComputedStyle(grid);
      const rowHeight = parseFloat(style.getPropertyValue("--publication-row-height"));
      const gap = parseFloat(style.columnGap);
      const spans = cards.map(function (card) {
        return Math.ceil((card.getBoundingClientRect().height + gap) / rowHeight);
      });

      // Sparse grid placement keeps the date-sorted DOM order from top to bottom.
      cards.forEach(function (card, index) {
        card.style.setProperty("--publication-row-span", spans[index]);
      });
      grid.classList.add("is-masonry");
    }

    function scheduleLayout() {
      if (pending) return;
      pending = true;
      window.requestAnimationFrame(layout);
    }

    const observer = new ResizeObserver(scheduleLayout);
    cards.forEach(function (card) { observer.observe(card); });
    desktop.addEventListener("change", scheduleLayout);

    const section = grid.closest("details");
    if (section) section.addEventListener("toggle", scheduleLayout);

    scheduleLayout();
  });
}());
