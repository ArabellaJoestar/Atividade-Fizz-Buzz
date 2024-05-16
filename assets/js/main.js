function fizzbuzz(numero2) {
    let numero = Number(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (let i = numero; i <=100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            resultado.innerHTML += `${i} Fizz Buzz<br>`;
        } else if (i % 3 === 0) {
            resultado.innerHTML += `${i} Fizz<br>`;
        } else if (i % 5 === 0) {
            resultado.innerHTML += `${i} Buzz<br>`;
        } else {
            resultado.innerHTML += `${i} inválido<br>`;
        }
    }
}

