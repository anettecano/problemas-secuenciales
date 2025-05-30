function calcularEdad() {
    const nacimiento = parseInt(document.getElementById("nacimiento").value);
    const actual = new Date().getFullYear();
    const edad = actual - nacimiento;
    document.getElementById("resultado").innerText = `Edad: ${edad} años`;
  }