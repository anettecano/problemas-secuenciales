function convertir() {
    const mxn = parseFloat(document.getElementById("mxn").value);
    const tipo = parseFloat(document.getElementById("tipoCambio").value);
    const usd = mxn / tipo;
    document.getElementById("resultado").innerText = `Dólares: $${usd.toFixed(2)}`;
  }