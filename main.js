const form = document.getElementById('form-contatcs');
const nome = [];
const tell = [];

let linhas = '';

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    ContatosTotal();

});

function adicionaLinha(){
    const inputNome = document.getElementById('Name');
    const inputTell= document.getElementById('Number');

    if(nome.includes(inputNome.value)){
        alert(`O contato ${inputNome.value} já foi salvo.`);
    }else{
        nome.push(inputNome.value);
        tell.push(toString(inputTell.value));

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTell.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNome.value = '';
    inputTell.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function ContatosTotal(){
    const totalContatos = nome.length;
    console.log(totalContatos);

    document.getElementById('total_contatcts').innerHTML = totalContatos;
}


