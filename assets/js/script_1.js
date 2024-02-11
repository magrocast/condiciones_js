const cacique = document.getElementById("cacique_id");

cacique.addEventListener("click", function () {
  if (cacique.style.border === "") {
    cacique.style.border = "8px solid #000000";
    cacique.style.borderRadius = "20rem";
  } else {
    cacique.style.border = "";
    cacique.style.borderRadius = "0rem";
  }
});
