const array = [1,2,3,4,5];

//Map: Percorre o vetor e trazer a informação de dentro
const map = array.map(function(item, index){
    return item + index;
});
console.log(map);

//Reduce: Consume todo o vetor e transforma em uma unica informacao
const reduce = array.reduce(function(total, next){
    return total + next;
});
console.log(reduce);

//Filter: Seleciona todos os elementos de acordo com o desejado
const filter = array.filter(function(item){
   return  item % 2 === 0;
});
console.log(filter);

//Find: Verificar se a informação existe ou buscar uma informação específica
const find = array.find(function(item){
   return item === 4;
});
console.log(find);

