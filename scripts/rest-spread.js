//1° Exemplo: REST
const usuario = {
    nome:'Caio Lucas',
    idade:'22',
    empresa:'BASIS Tecnologia da Informação'
};
const {nome, ...resto} = usuario;
console.log(nome);
console.log(resto);

//2°Exemplo: REST
function soma(...params){
    return params;
}
console.log(soma(1, 2, 3));

//3°Exemplo: REST
function soma2(...params){
    return params.reduce((total, next) => total + next)
}
console.log(soma2(1, 2, 3));

//1° Exemplo: SPREAD
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];
console.log(array3);

//2° Exemplo: SPREAD
const usuario2 = {
    nome:'Caio Lucas',
    idade:'22',
    empresa:'BASIS Tecnologia da Informação S/A'
};

const usuario3 = {...usuario2, nome:'Lucas'};
console.log(usuario3);