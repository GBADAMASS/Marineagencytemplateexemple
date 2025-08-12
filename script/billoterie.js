document.addEventListener("DOMContentLoaded", function () {
  // Données fictives par ville (ventes prévues)
  const resumeData = {
    "Boutique Centre-ville": { ventes: 192000 },
    "Boutique Marché": { ventes: 150000 },
    "Boutique Gare": { ventes: 250000 },
  };

  const villeSelect = document.getElementById("villeSelect");
  const totalVentesEl = document.getElementById("totalVentes");
  const totalEspecesEl = document.getElementById("totalEspeces");
  const differenceEl = document.getElementById("difference");

  const qtyInputs = Array.from(document.querySelectorAll(".qty-input"));
  const formatFCFA = (n) => {
    // afficher avec séparateur français et sans décimales
    return n.toLocaleString("fr-FR") + " FCFA";
  };

  // Met à jour un seul sous-total visuel
  function updateLine(input) {
    const denom = Number(input.dataset.value) || 0;
    const qty = Math.max(0, parseInt(input.value) || 0);
    const subtotal = denom * qty;
    const targetId = input.dataset.target;
    const target = document.getElementById(targetId);
    if (target) target.textContent = formatFCFA(subtotal);
    return subtotal;
  }

  // Met à jour tous les calculs et l'UI
  function updateTotals() {
    let totalBills = 0;
    let totalCoins = 0;

    qtyInputs.forEach((inp) => {
      const subtotal = updateLine(inp);
      if (inp.dataset.type === "bill") totalBills += subtotal;
      else if (inp.dataset.type === "coin") totalCoins += subtotal;
    });

    document.getElementById("totalBills").textContent = formatFCFA(totalBills);
    document.getElementById("totalCoins").textContent = formatFCFA(totalCoins);

    const totalEspeces = totalBills + totalCoins;
    totalEspecesEl.textContent = formatFCFA(totalEspeces);

    const selectedVille = villeSelect.value;
    const ventes =
      (resumeData[selectedVille] && resumeData[selectedVille].ventes) || 0;
    totalVentesEl.textContent = formatFCFA(ventes);

    const diff = totalEspeces - ventes;
    // couleur et signe
    if (diff < 0) {
      differenceEl.textContent = "-" + formatFCFA(Math.abs(diff));
      differenceEl.classList.remove("positive");
      differenceEl.classList.add("negative");
    } else {
      differenceEl.textContent = formatFCFA(diff);
      differenceEl.classList.remove("negative");
      differenceEl.classList.add("positive");
    }
  }

  // Événements d'input : recalcul en direct
  qtyInputs.forEach((inp) => {
    inp.addEventListener("input", () => updateTotals());
    inp.addEventListener("change", () => updateTotals());
  });

  // Quand on change de ville, mettre à jour ventes et différence
  villeSelect.addEventListener("change", () => updateTotals());

  // Initial update
  updateTotals();

  // Clôturer : simple démonstration
  document.getElementById("closeCaisse").addEventListener("click", () => {
    const totalEsp = totalEspecesEl.textContent;
    alert("Clôture effectuée.\nTotal espèces comptées: " + totalEsp);
  });
});
