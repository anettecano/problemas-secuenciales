function calcularCobro() {
    const horas = Math.ceil(parseFloat(document.getElementById("horas").value));
    const costo = parseFloat(document.getElementById("costoHora").value);
    const total = horas * costo;
    document.getElementById("resultado").innerText = `Total a pagar: $${total.toFixed(2)}`;
  }