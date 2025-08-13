function showTab(tab, btn) {
  document
    .querySelectorAll("#tabContent > div")
    .forEach((div) => div.classList.add("d-none"));
  document.getElementById(tab + "Tab").classList.remove("d-none");

  // retirer active de tous les boutons et ajouter à celui cliqué
  document
    .querySelectorAll(".nav-link")
    .forEach((b) => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
}

function showTab(tab, btn) {
  document
    .querySelectorAll("#tabContent > div")
    .forEach((div) => div.classList.add("d-none"));
  document.getElementById(tab + "Tab").classList.remove("d-none");

  // retirer active de tous les boutons et ajouter à celui cliqué
  document
    .querySelectorAll(".nav-link")
    .forEach((b) => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
}

document
  .getElementById("addEmployeeForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let nom = document.getElementById("nom").value;
    let poste = document.getElementById("poste").value;
    let contrat = document.getElementById("contrat").value;
    let salaire = document.getElementById("salaire").value;
    let tel = document.getElementById("telephone").value;
    let statut = document.getElementById("statut").value;

    let row = `<tr>
        <td>${nom}</td>
        <td>${poste}</td>
        <td><span class="badge ${
          contrat === "Mensuel" ? "bg-dark" : "bg-secondary"
        }">${contrat}</span></td>
        <td>${parseInt(salaire).toLocaleString()} FCFA</td>
        <td>${tel}</td>
        <td><span class="badge bg-dark">${statut}</span></td>
        <td class="action-icons"><i class="bi bi-eye"></i><i class="bi bi-pencil"></i></td>
    </tr>`;
    document
      .getElementById("employeeList")
      .insertAdjacentHTML("beforeend", row);

    document.querySelector("#addEmployeeModal .btn-close").click();
    this.reset();
  });
