console.log("Hello world");

//imprime nome e data

let nome = "Nicolas";
console.log(nome);

let dataNascimento = "30/07/2001";
let idade = 22;
console.log(typeof idade);


//array 

var lista = ["helena", "pedro", "melina", "joao"];

for (let i = 0; i < lista.length; i++) {
console.log(lista[i]);

}

//objeto

var pessoa = {
    nome: "Nicolas",
    dtNascimento: "30/07/2001",
    endereco: "Paranagua",
    
};

console.log(
    `A ${pessoa.nome} nasceu em: ${pessoa.dtNascimento} mora em: ${pessoa.endereco} `
  );

  var estados = {
    sc: "Santa Catarina",
    pr: "Paraná",
    rs: "Rio Grande do Sul",
  };

  // for in  -- iterar sobre cada uma das propriedades de um obj

for (chave in estados) {
    console.log(chave + ": " + estados[chave]);
  }
  
  // for of -- iterar sobre elementos de uma lista
  for (pos of lista) {
    console.log(pos);
  }
  
  // foreach - aplicar uma função sobre cada um dos elementos
  
  // function imprimir(elemento) {
  //   console.log("- " + elemento);
  // }
  
  const imprimir = (elemento) => {
    console.log("- " + elemento);
  };
  
  lista.forEach(imprimir);
  
  // Operador condicional ternário
  // condicao ? exp1 : exp2;
  var x = 10;
  console.log(x === "10" ? "é igual" : "nao é igual");
  
  // Operador de atribuição =
  
  // Operador de comparação  ==
  // Comparação entre dados da variável, independente do tipo
  
  // Operador de comparação ===
  // Comparação entre dados e tipo.
  
  // for convencional
  
  // iterar sobre objetos
  
  var categorias = {
    eletronicos: "Eletrônicos",
    moveis: "Móveis",
    telefonia: "Smartphones",
    automotivo: "Automotiva",
  };
  
  // for in  -- iterar sobre cada uma das propriedades de um obj
  
  // for of -- iterar sobre elementos de uma lista
  var listaObj = ["elemento", 2, "elemento2", 3, "elemento3", 4];
  
  // numero randomico
  
  let name = prompt("Olá! Informe seu nome");
  alert(`Bem-vind@ ${name}`);
  
  let option = confirm(`Seu nome está correto: ${name}`);
  if (option) {
    alert("ok");
  } else {
    alert("not ok");
  }