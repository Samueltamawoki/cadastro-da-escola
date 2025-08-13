function enviarFormulario() {
    // alert("dkjfhk")

    //capturar os valores e criar variavel para o onjeto JSON

    let contaCliente = new Object();

    contaCliente.nome = document.getElementById("nome").value;
    contaCliente.sobrenome = document.getElementById("sobrenome").value;
    contaCliente.dataDeNascimento = document.getElementById("dataDeNascimento").value;
    contaCliente.rg = document.getElementById("rg").value;
    contaCliente.cpf = document.getElementById("cpf").value;
    contaCliente.nacionalidade = document.getElementById("nacionalidade").value;
    contaCliente.naturalidade = document.getElementById("naturalidade").value;
    contaCliente.altura = document.getElementById("altura").value;
    contaCliente.peso = document.getElementById("peso").value;
    contaCliente.reponsaveis = document.getElementById("reponsaveis").value;
    contaCliente.telefoneDoResponsavel = document.getElementById("telefoneDoResponsavel").value;
    contaCliente.serie = document.getElementById("serie").value;
    contaCliente.ano = document.getElementById("ano").value;
    
    
    
    // converter para STRING Json
    let meuJson = JSON.stringify(contaCliente)

    console.log(meuJson)
    console.log(contaCliente.valueOf())
}