const atacante = prompt("Qual é o nome do personagem atacante?");
const poderAtaque = parseFloat(prompt("Qual é o seu poder de ataque?"));

const defensor = prompt("Qual é o nome do personagem defensor?");
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida possui?"));
const poderDefesa = parseFloat(prompt("Qual é o seu poder de defesa?"));
const possuiEscudo = prompt("Qual é o seu poder de ataque? (SIM/NÃO)");

let danoCausado = 0;

if (poderAtaque > poderDefesa && possuiEscudo === "NÃO") {
  danoCausado = poderAtaque - poderDefesa;
} else if (poderAtaque > poderDefesa && possuiEscudo === "SIM") {
  danoCausado = (poderAtaque - poderDefesa) / 2;
}

pontosDeVida -= danoCausado;

alert(atacante + " causou " + danoCausado + "pontos de dano em" + defensor);
alert(
  atacante +
    "\nPoder de ataque: " +
    poderAtaque +
    "\n\n" +
    defensor +
    "\nPontos de vida: " +
    pontosDeVida +
    "\nPoder de defesa: " +
    poderDefesa +
    "\nPossui escudo: " +
    possuiEscudo
);
