const verificar = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

verificar.addEventListener("click", function () {
  const input1 = parseInt(document.getElementById("input-1").value);
  const input2 = parseInt(document.getElementById("input-2").value);
  const input3 = parseInt(document.getElementById("input-3").value);

  const total = input1 + input2 + input3;
  if (total > 10) {
    resultado.innerHTML = "Llevas muchos stickers.";
  } else if (total >= 1 && total <= 10) {
    resultado.innerHTML = "Llevas " + total + " stickers.";
  } else {
    resultado.innerHTML = "No has seleccionado ningún sticker.";
  }
});
