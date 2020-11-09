//Exemplo 1
const empresa = {
    nome:'Rockeseat',
    endereco:{
        cidade:'Rio do Sul',
        estado:'SC',
    }
};
const {nome, endereco:{cidade, estado}} = empresa;
console.log(nome);
console.log(cidade);
console.log(estado);

//Exemplo 2
const info = {
    nome:'Diego',
    idade: 23
};
const {nome, idade} = info;

function mostrarInfo(info) {
    return `${info.nome} tem ${info.idade} anos.`;
}

