//Ex 3
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior=0;
let menor=0;
maior=array[0];
menor=array[0];
for(i=1;i<array.length;i+=1){
    if(maior.length>array[i].length){
        maior=maior;
    }else{
        maior=array[i];
    }
    if(menor.length<array[i].length){
        menor=menor
    }else{
        menor=array[i];
    }
}
console.log(maior);
console.log(menor);