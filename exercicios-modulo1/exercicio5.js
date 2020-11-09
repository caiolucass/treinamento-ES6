//Exemplo 1
const arr = [1,2,3,4,5,6];
const {x, ...y} = arr;
console.log(x);
console.log(y);

//Exemplo 2
function soma(...params) {
    return params.reduce((item, next) => item + next ) 
}
console.log(soma);

//Exemplo 3
const usuario = {
    nome:'Diego',
    idade: 23,
    endereco: {
        cidade:'Rio do Sul',
        UF:'SC',
        pais:'Brasil',
    }
};
const usuario2 = {nome ="Gabriel", ...usuario} = usuario;
const usuario3 = {...usuario, cidade = "Lontras"} =  usuario;