const veiculo01 = prompt("Informe o nome do veículo 01: ");
const velocidade01 = parseFloat(prompt("Informe a velocidade do objeto 01: "));

const veiculo02 = prompt("Informe o nome do veículo 02: ");
const velocidade02 = parseFloat(prompt("Informe a velocidade do objeto 02: "));

if (velocidade01 > velocidade02) {
  alert("O objeto 1 " + veiculo01 + " " + "é mais rápido!");
} else if (velocidade02 > velocidade01) {
  alert("O objeto 2 " + veiculo02 + " " + "é mais rápido!");
} else {
  alert(
    "O objeto  " +
      veiculo01 +
      " " +
      "e o objeto  "+
      veiculo02 +
      " " +
      "tem a mesma velocidade!"
  );
}
