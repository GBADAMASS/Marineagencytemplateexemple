const btnCaisse = document.getElementById("btnCaisse");
const caisseSection = document.getElementById("caisseSection");
const villeSelect = document.getElementById("villeSelect");
const caisseTitre = document.getElementById("caisseTitre");

const donneesVentes = {
  centre: {
    titre: "Caisse ouverte - Boutique Centre-ville",
    ventes: "125,430 FCFA",
    nb: 12,
    ticket: "10,452 FCFA",
  },
  nord: {
    titre: "Caisse ouverte - Boutique Nord",
    ventes: "89,500 FCFA",
    nb: 9,
    ticket: "9,944 FCFA",
  },
  sud: {
    titre: "Caisse ouverte - Boutique Sud",
    ventes: "142,000 FCFA",
    nb: 15,
    ticket: "9,466 FCFA",
  },
};

btnCaisse.addEventListener("click", () => {
  caisseSection.style.display = "block";
  btnCaisse.classList.remove("btn-dark");
  btnCaisse.classList.add("btn-success");
});

villeSelect.addEventListener("change", () => {
  const ville = villeSelect.value;
  caisseTitre.textContent = donneesVentes[ville].titre;
  document.getElementById("ventesJour").textContent =
    donneesVentes[ville].ventes;
  document.getElementById("nbVentes").textContent = donneesVentes[ville].nb;
  document.getElementById("ticketMoyen").textContent =
    donneesVentes[ville].ticket;
});
