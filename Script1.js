// Ricardo Daniel Zambrano Pedraza
// Cedula: 1092356061


const txtResultado = document.getElementById('txtResultado');
const btnNumeros = document.querySelectorAll('.btn-numero');
const btnOperadores = document.querySelectorAll('.btn-operador');
const btnBorrar = document.querySelector('.btn-borrar');
const btnBorrarUno = document.querySelector('.btn-borrar-uno');
const btnRaiz = document.querySelector('.btn-raiz');
const btnPunto = document.querySelector('.btn-punto');
const btnIgual = document.querySelector('.btn-igual');

let operacion = '';
let resultado = '';

btnNumeros.forEach(btn => {
    btn.addEventListener('click', () => {
        txtResultado.value += btn.textContent;
    });
});

btnOperadores.forEach(btn => {
    btn.addEventListener('click', () => {
        if (operacion === '') {
            operacion = btn.textContent;
            resultado = parseFloat(txtResultado.value);
            txtResultado.value = '';
        } else {
            calcular();
            operacion = btn.textContent;
        }
    });
});

btnBorrar.addEventListener('click', () => {
    txtResultado.value = '';
    operacion = '';
    resultado = '';
});

btnBorrarUno.addEventListener('click', () => {
    txtResultado.value = txtResultado.value.slice(0, -1);
});

btnRaiz.addEventListener('click', () => {
    if (txtResultado.value !== '') {
        txtResultado.value = Math.sqrt(parseFloat(txtResultado.value));
    }
});

btnPunto.addEventListener('click', () => {
    if (!txtResultado.value.includes('.')) {
        txtResultado.value += '.';
    }
});

btnIgual.addEventListener('click', calcular);

function calcular() {
    let valor2 = parseFloat(txtResultado.value);
    switch (operacion) {
        case '+':
            resultado += valor2;
            break;
        case '-':
            resultado -= valor2;
            break;
        case '*':
            resultado *= valor2;
            break;
        case '/':
            resultado /= valor2;
            break;
    }
    txtResultado.value = resultado;
    operacion = '';
}