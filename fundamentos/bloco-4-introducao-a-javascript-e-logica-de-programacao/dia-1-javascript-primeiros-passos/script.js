//Programa 1
    let a=1;
    let b=2;

    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a%b);

//Programa 2
    a=1;
    b=2;
    if(a>b){
        console.log(a);
    }else{
        console.log(b);
    }

// Programa 3
    a=1;
    b=2;
    let c=3;
    if (a>b && a>c){
        console.log(a);
    } else if (b>a && b>c){
        console.log(b);
    }else{
        console.log(c);
    }
// Programa 4 
    const num=-1;
    if(num>0){
        console.log("Positivo");
    }else{
        console.log("Negativo");
    }
// Programa 5
    let alpha=45;
    let beta=90;
    let omega=45;
    let soma=alpha+beta+omega;

    if (alpha<0 || beta<0 || omega<0){
        console.log('Erro!');
    }else {
        if(soma==180){
            console.log('True');
        }else if (soma!=180){
            console.log('False');
        }
    }

//Programa 6
    let peca = "Bispo";

    
    if(peca.toLowerCase()=="bispo"){
        console.log("bishop (bispo) -> diagonals (diagonais)");
    }else{
        console.log("ERRO!");
    }

//Programa 9
    a=1;
    b=2;
    c=3;

    if(a%2==1 || b%2==1 || c%2==1){
        console.log("TRUE");
    }else{
        console.log("FALSE");
    }