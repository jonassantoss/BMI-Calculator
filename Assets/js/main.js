// Capturar evento de submit do form
const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputWeight = event.target.querySelector('#weight').value;
  const inputHeight = event.target.querySelector('#height').value;

  const weight = Number(inputWeight);
  const height = Number(inputHeight);

  if (!weight && !height) {
    setResult('Preencha todos os campos corretamente!', false);
    return;
  }

  if (!weight) {
    setResult('Peso invalido!', false);
    return;
  }

  if (!height) {
    setResult('Altura invalida!', false);
    return;
  }

  const imc = getIMC(weight, height);
  const level = getIMCLevel(imc);
  
  const msg = `Seu IMC é de ${imc} (${level})`;

  setResult(msg, true);
});

function getIMCLevel(imc) {
  const level = [
    'Abaixo do peso',
    'Peso normal',
    'Sobrepeso',
    'Obesidade grau 1',
    'Obesidade grau 2',
    'Obesidade grau 3'
  ];

  const index = imc >= 39.9? 5 : (imc >= 34.9? 4 : (imc >= 29.9? 3 : (imc >= 24.9? 2 : 1)));

  return level[index];
}

function getIMC (weight, height) {
  const imc = weight / (height * height);
  return imc.toFixed(2);
}

function createP() {
  const p = document.createElement('p');
  return p
}

function setResult(msg, isValid) {
  const result = document.querySelector('#res');
  result.innerHTML = '';

  const p = createP();
  if (isValid) {
    p.classList.add('valid');
  } else {
    p.classList.add('invalid');
  }
  p.textContent = msg;
  result.appendChild(p);
}