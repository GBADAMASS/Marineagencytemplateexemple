document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("#notesTabs .nav-link");
  const rows = document.querySelectorAll("#expenseTable tr");

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();

      // Changer l'onglet actif
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const filter = tab.dataset.filter;

      // Filtrage des lignes
      rows.forEach((row) => {
        if (filter === "all" || row.dataset.status === filter) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      });
    });
  });
});
