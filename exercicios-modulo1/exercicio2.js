const usuarios = [
    {nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
    {nome: 'Gabriel', idade: 15, empresa:'Rocketseat'},
    {nome: 'Lucas', idade: 15, empresa:'Facebook'},
];

//Seleciona as idades
const map = usuarios.map((item) => {
   item.idade;
});
console.log(map);

//Seleciona usuarios com a empresa igual 'Rocketset' e 'idade' > 18
const filter = usuarios.filter((item) => {
    item.empresa === 'Rocketseat' &&  item.idade > 18;
});
console.log(filter);

//Seleciona usuarios com a empresa igual 'Google'
const find = usuarios.find((item) => {
    item.empresa === 'Google';
});
console.log(find);

//Multiplique a idade de todos usuários por dois e 
//depois realize um filtro nos usuários que possuem
//no máximo 50 anos:
const calculo = usuarios.map(item => (
    {...item, idade: idade * 2}
    )).filter(item => item.idade <= 50); {  
}
console.log(calculo);