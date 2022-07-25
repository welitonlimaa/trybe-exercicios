// Ex 1 a 5
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log('Bem Vinda, ' + info.personagem);

  info.recorrente='Sim';

//   console.log(info);

//   for(let key in info){
//     console.log(key);
//   }
//   for(let key in info){
//     console.log(info[key]);
//   }

  let infoDois = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };

  for(let chaveUm in info){
    if(info.recorrente===infoDois.recorrente){
        delete info.recorrente;
        delete infoDois.recorrente;
    };
    console.log(info[chaveUm]+" e "+infoDois[chaveUm]);
  }
  console.log("Ambos Recorrentes");

  