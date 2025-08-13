document.getElementById("typeSelect").addEventListener("change", function () {
  document.getElementById("echeanceField").style.display =
    this.value === "credit" ? "block" : "none";
});

document.getElementById("factureForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Récupérer les valeurs du formulaire
  let client = this.querySelectorAll("input")[0].value;
  let montant = this.querySelectorAll("input")[1].value;
  let type = document.getElementById("typeSelect").value;
  let echeance = document.querySelector("#echeanceField input").value;

  // Définir statut et reste selon type
  let statut =
    type === "comptant"
      ? `<span class="badge bg-success">Payé</span>`
      : `<span class="badge bg-secondary">Partiel</span>`;
  let reste = type === "comptant" ? "0 FCFA" : montant + " FCFA";
  let typeBadge =
    type === "comptant"
      ? `<span class="badge bg-dark">Comptant</span>`
      : `<span class="badge bg-secondary">Crédit</span>`;

  // Créer la nouvelle ligne
  let table = document.querySelector("#factures tbody");
  let newRow = document.createElement("tr");
  newRow.innerHTML = `
        <td>2024-NEW</td>
        <td>${client}<br><small class="text-muted">-</small></td>
        <td>${montant} FCFA</td>
        <td class="text-success">${
          type === "comptant" ? montant : "0"
        } FCFA</td>
        <td class="${type === "comptant" ? "" : "text-danger"}">${reste}</td>
        <td>${typeBadge}</td>
        <td>${statut}</td>
        <td class="${type === "comptant" ? "" : "text-danger"}">${
    echeance || "-"
  }</td>
        <td>
            <button class="btn btn-outline-dark btn-sm">👁</button>
            <button class="btn btn-outline-dark btn-sm">🖨</button>
        </td>
    `;
  table.appendChild(newRow);

  // Fermer le modal
  let modal = bootstrap.Modal.getInstance(
    document.getElementById("addFactureModal")
  );
  modal.hide();

  // Réinitialiser le formulaire
  this.reset();
  document.getElementById("echeanceField").style.display = "none";
});
