document
  .getElementById("demandeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Nouvelle demande enregistrée avec succès !");
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("demandeModal")
    );
    modal.hide();
  });
