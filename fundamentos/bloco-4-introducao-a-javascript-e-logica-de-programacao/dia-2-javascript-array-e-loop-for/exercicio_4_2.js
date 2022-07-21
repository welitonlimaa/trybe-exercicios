let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Ex 1
//  for(let number of numbers){
//     console.log(number);
//  }

 // Ex 2
//  let soma=0;
//  for(i=0;i<numbers.length; i+=1){
//     soma+=numbers[i];
//  }
//  console.log(soma);

 // Ex 3 e 4
//  let soma=0;
//  for(i=0;i<numbers.length; i+=1){
//     soma+=numbers[i];
//  }
//  let media=soma/numbers.length;
//  console.log(media);

// if(media>20){
//     console.log("valor maior que 20");
// }else{
//     console.log("valor menor ou igual a 20");
// }

//Ex 5
// let num=numbers[0];
// let maior=num;
// let maiorDois=0;
// for(i=1;i<numbers.length; i+=1){
//     if(maior>numbers[i]){
//         maior=maior;
//     }else{
//         maior=numbers[i];
//     }
// }
// console.log(maior);

// Ex 6 
let impar=0;
let par=0;

for(i=0;i<numbers.length; i+=1){
    if(numbers[i]%2==0){
        par+=1
    }else{
        impar+=1
    }
}
if(impar==0){
    console.log("nenhum valor ímpar encontrado");
} else{
    console.log(impar);
    console.log(par);
}