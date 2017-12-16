var botaoAdicionarPaciente = document.querySelector("#adicionar-paciente");

botaoAdicionarPaciente.addEventListener("click", function (event) {
    event.preventDefault(); //Primeira gambiarra aprendida

    var formNovoPaciente = document.querySelector("#form-novo-paciente");

    var novoPaciente = obterNovoPacienteForm(formNovoPaciente);

    var erros = validaPaciente(novoPaciente);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }
    
    adicionaPacienteNaTabela(novoPaciente);

    formNovoPaciente.reset();

    var mensagensDeErro = document.querySelector("#mensagens-erro");
    mensagensDeErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente) {

    

    var novoPacienteTableRow = montarNovoPacienteTableRow(paciente);

    var tabelaPacientes = document.querySelector("#tabela-pacientes");

    tabelaPacientes.appendChild(novoPacienteTableRow);
}

function obterNovoPacienteForm(form) {

    var novoPaciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return novoPaciente;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length <= 2) erros.push("Nome inválido. Deve conter 2 ou mais caracteres");

    if (paciente.nome.length == 0) erros.push("O nome não pode estar em Branco");

    if (paciente.gordura.length == 0) erros.push("A porcentagem de gordura não pode estar em branco");

    if (paciente.peso.length == 0) erros.push("O peso não pode estar em branco");

    if (paciente.altura.length == 0) erros.push("A altura não pode estar em branco");

    if (pesoValido(paciente.peso) == false) erros.push("Paciente é inválido");

    if (alturaValida(paciente.altura) == false) erros.push("Altura é inválida!");

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;

        ul.appendChild(li);
    });
}

function montarNovoPacienteTableRow(paciente) {

    var novoPacienteTableRow = document.createElement("tr");
    novoPacienteTableRow.classList.add("paciente");

    var nomeTd = montarTableData(paciente.nome, "info-nome");
    var pesoTd = montarTableData(paciente.peso, "info-peso");
    var alturaTd = montarTableData(paciente.altura, "info-altura");
    var gorduraTd = montarTableData(paciente.gordura, "info-gordura");
    var imcTd = montarTableData(paciente.imc, "info-imc");


    novoPacienteTableRow.appendChild(nomeTd);
    novoPacienteTableRow.appendChild(pesoTd);
    novoPacienteTableRow.appendChild(alturaTd);
    novoPacienteTableRow.appendChild(gorduraTd);
    novoPacienteTableRow.appendChild(imcTd);

    return novoPacienteTableRow;

}

function montarTableData(dado, classe) {
    var tableData = document.createElement("td");
    tableData.classList.add(classe);
    tableData.textContent = dado;

    return tableData;
}
