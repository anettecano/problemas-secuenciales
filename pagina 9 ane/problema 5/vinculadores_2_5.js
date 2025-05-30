function calcularPresupuesto() {
    const metros = parseFloat(document.getElementById("metros").value);
    const precio = parseFloat(document.getElementById("precioM2").value);
    const total = metros * precio;
    document.getElementById("resultado").innerText = `Costo total: $${total.toFixed(2)}`;
  }