//3- Boolean (Verdadeiro ou Falso)//
//Exercício 1 - Crie uma variável ativo com true.//
let ativo = true;
let naoAtivo = false;
console.log(ativo)
console.log(naoAtivo)

//Exercício 2 - Verifique se um número é maior que 10.//
let valor8 = 15;
let dezMais = valor8 >= 10;
console.log(dezMais);

//Exercício 3 - Verifique se a idade é maior ou igual a 18.//
let idade = 17;
let maiorDeIdade = idade >= 18;
console.log(maiorDeIdade);

//Exercício 4 - Compare dois números iguais.//
let valor9 = 11;
let valor10 = 11;
console.log(valor9 === valor10); 
console.log(valor9 <= valor10);   
console.log(valor9 >= valor10);

//Exercício 5 - Compare dois números diferentes.//
let valor11 = 6;
let valor12 = 12;
console.log(valor11 === valor12);
console.log(valor11 <= valor12);
console.log(valor11 >= valor12);

//Exercício 6 - Verifique se um número é par.//
let valor13 = 5;
let par = (valor13 % 2 === 0);
console.log(par);

//Exercício 7 - Use AND (&&) em uma condição.//
let idade2 = 30;
let jovem = idade2 <15 && idade> 45;
console.log(jovem)

//Exercício 8 - Use OR (||) em uma condição.//
let idade3 =17;
let verificacao2 = idade3 <21 || idade3 > 18;
console.log(verificacao2);

//Exercício 9 - Negue um valor boolean.//
let num = true;
let inverso = !num;
console.log(inverso);

//Exercício 10 - Compare texto e número.//
let texto = "17";
let idade4 = 17;
let comparacao1 = texto == idade;
console.log(comparacao1)
