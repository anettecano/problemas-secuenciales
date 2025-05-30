function calcularLlamada() {
    const minutos = parseFloat(document.getElementById("minutos").value);
    const costo = parseFloat(document.getElementById("costoMin").value);
    const total = minutos * costo;
    document.getElementById("resultado").innerText = `Costo total: $${total.toFixed(2)}`;
  }