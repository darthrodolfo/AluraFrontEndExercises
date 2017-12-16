var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function (event) {
    var pacienteAlvo = event.target.parentNode;
    pacienteAlvo.classList.add("fadeOut");

    setTimeout(function () {
        pacienteAlvo.remove();
    }, 500);

});
