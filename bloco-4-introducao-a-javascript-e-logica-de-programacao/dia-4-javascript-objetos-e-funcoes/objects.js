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

  // Ex 6 a 8
  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

 console.log("O livro favorito de "+ leitor.nome + " se chama " + leitor.livrosFavoritos[0].titulo);
 leitor.livrosFavoritos[1]= {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
 }

 //console.log(leitor);
 console.log(leitor.nome+" tem "+ leitor.livrosFavoritos.length+" favoritos");
 