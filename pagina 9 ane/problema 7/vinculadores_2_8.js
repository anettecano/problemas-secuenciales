function calcularBoleto() {
    const kms = parseFloat(document.getElementById("kms").value);
    const costo = parseFloat(document.getElementById("costoKm").value);
    const total = kms * costo;
    document.getElementById("resultado").innerText = `Costo del boleto: $${total.toFixed(2)}`;
  }
  