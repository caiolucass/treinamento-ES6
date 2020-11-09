//1° Exemplo
const array = [1,2,3,4,5];
const teste1 = array.map((item) => {
   return item * 2;
});
console.log(teste1);

//2°Exemplo
const teste2 = () => {
    return 'teste';
}
console.log(teste2());

//3°Exemplo
function soma1(a = 3, b = 6){
    return a + b;
}
console.log(soma1());

//4°Exemplo
const soma2 = (a = 3, b = 6) => a + b;
console.log(soma2);