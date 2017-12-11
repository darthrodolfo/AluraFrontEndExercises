var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var pesoPaciente = paciente.querySelector(".info-peso");
var alturaPaciente = paciente.querySelector(".info-altura");
var imcPaciente = paciente.querySelector(".info-imc");

var peso = pesoPaciente.textContent;
var altura = alturaPaciente.textContent;

var isPesoValido = true;
var isAlturaValido = true;

    if(peso <= 0 || peso >= 1000)
    {
        console.log("Peso inválido!");
        isPesoValido = false;
        imcPaciente.textContent = "Peso inválido";
    }

    if(altura <= 0 || altura >= 3.00)
    {
        console.log("Altura inválida!");
        isPesoValido = false;
        imcPaciente.textContent = "Altura inválida";
    }

    if(isPesoValido && isAlturaValido)
    {
        var imc = peso / (altura * altura);
        imcPaciente.textContent = imc;

        console.log(imc);
    }