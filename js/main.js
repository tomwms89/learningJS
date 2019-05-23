document.getElementById('the-paragraph').innerHTML = "New content";

function alteraNome() {
    document.getElementById('name').value = "Batman";
}

function soma(a, b) {
    return a + b;
}

var resultado = soma(4, 9);
resultado = resultado - 1;
console.log("A soma é: ", resultado);