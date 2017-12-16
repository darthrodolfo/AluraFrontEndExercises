var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var contador = 0; contador < pacientes.length; contador++) {
    var paciente = pacientes[contador];

    var pesoPaciente = paciente.querySelector(".info-peso");
    var alturaPaciente = paciente.querySelector(".info-altura");
    var imcPaciente = paciente.querySelector(".info-imc");

    var peso = pesoPaciente.textContent;
    var altura = alturaPaciente.textContent;

    var isPesoValido = pesoValido(peso);
    var isAlturaValido = alturaValida(altura);

    if (isPesoValido && isAlturaValido) {
        var imc = calculaImc(peso, altura);
        imcPaciente.textContent = imc;

    } else {
        paciente.classList.add("paciente-invalido");

        if (isPesoValido == false) imcPaciente.textContent = "Peso inválido";

        if (isAlturaValido == false) imcPaciente.textContent = "Altura inválido";
    }
}

function pesoValido(peso) {

    if (peso > 0 && peso < 400) {
        return true;
    }

    return false;
}

function alturaValida(altura) {

    if (altura > 0 && altura < 3.00) {
        return true;
    }

    return false;
}


function calculaImc(peso, altura) {
    var imc = peso / (altura * altura);

    return imc.toFixed(2);
}
