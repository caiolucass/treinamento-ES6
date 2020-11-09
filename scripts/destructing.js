//1° Exemplo
const usuario = {
    nome:'Caio',
    idade:23,
    endereco:{
        pais:'Brasil',
        UF:'MG',
        cidade:'Belo Horizonte',
        rua: 'fake',
        numero: 30,
        bairro:'Savassi'
    },
};
console.log(usuario);

//2° Exemplo
const {nome, idade, endereco:{pais, UF, cidade, rua, numero, bairro}} = usuario;
console.log(pais, UF, cidade, rua, numero, bairro);

//3° Exemplo
function mostraNome(usuario){
    console.log(usuario.numero, usuario.endereco);
}

