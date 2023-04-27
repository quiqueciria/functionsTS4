import "./style.css";

function enviar() {
  //IT READS THE INPUT
  const campoTexto = (<HTMLInputElement>(
    document.getElementById("campoNumeroTurno")
  )).value;

  //TAKE THE VALUE
  const resultado = parseInt(campoTexto);

  //SHOW THE VALUE
  const numeroTurnoElement = document.getElementById("numeroTurno");

  if (numeroTurnoElement !== null && numeroTurnoElement !== undefined)
    numeroTurnoElement.innerHTML = resultado.toString().padStart(2, "0");
}

//CALL TO THE FUNCTION
const enviarBoton = document.getElementById("hacerEnvio");

if (enviarBoton !== null && enviarBoton !== undefined) {
  enviarBoton.addEventListener("click", enviar);
}

// ----------------- COUNT LESS
function contar() {
  //IT READS THE COUNTER
  const marcador: string = document.getElementById("numeroTurno")
    ?.innerText as string;

  //APPLY DECRECENT
  const countMinus = parseInt(marcador) - 1;

  //SHOW RESULT
  const numeroTurnoElement = document.getElementById("numeroTurno");

  if (numeroTurnoElement !== null && numeroTurnoElement !== undefined) {
    numeroTurnoElement.innerHTML = countMinus.toString().padStart(2, "0");
  }
}

//CALL TO THE FUNCTION
const botonAnterior = document.getElementById("anterior");

if (botonAnterior !== null && botonAnterior !== undefined) {
  botonAnterior.addEventListener("click", contar);
}

// ----------------- COUNT MORE
function contarPlus() {
  //IT READS THE COUNTER
  const marcadorPlus: string = document.getElementById("numeroTurno")
    ?.innerText as string;

  //APPLY DECRECENT
  const countPlus = parseInt(marcadorPlus) + 1;

  //SHOW RESULT
  const numeroTurnoElement = document.getElementById("numeroTurno");

  if (numeroTurnoElement !== null && numeroTurnoElement !== undefined) {
    numeroTurnoElement.innerHTML = countPlus.toString().padStart(2, "0");
  }
}

//CALL TO THE FUNCTION
const botonSiguiente = document.getElementById("siguiente");

if (botonSiguiente !== null && botonSiguiente !== undefined) {
  botonSiguiente.addEventListener("click", contarPlus);
}

// ----------------- RESET
function reset() {
  //APPLY DECRECENT
  const countReset = 0;

  //SHOW RESULT
  const numeroTurnoElement = document.getElementById("numeroTurno");

  if (numeroTurnoElement !== null && numeroTurnoElement !== undefined) {
    numeroTurnoElement.innerHTML = countReset.toString();
  }
}

//CALL TO THE FUNCTION
const botonReset = document.getElementById("reset");

if (botonReset !== null && botonReset !== undefined) {
  botonReset.addEventListener("click", reset);
}
