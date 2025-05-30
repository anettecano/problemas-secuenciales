function calcularHipotenusa() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const h = Math.sqrt(a * a + b * b);
    document.getElementById("resultado").innerText = `Hipotenusa: ${h.toFixed(2)}`;
  }