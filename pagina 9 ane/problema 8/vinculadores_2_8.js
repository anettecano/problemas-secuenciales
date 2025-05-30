function calcularTiempo() {
    const d = parseFloat(document.getElementById("distancia").value);
    const v = parseFloat(document.getElementById("velocidad").value);
    const t = d / v;
    document.getElementById("resultado").innerText = `Tiempo estimado: ${t.toFixed(2)} horas`;
  }