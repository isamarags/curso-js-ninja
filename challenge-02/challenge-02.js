// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function nome(arg1, arg2) {
    return arg1 + arg2;
  }
  
  // Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
  let valor = nome(5, 2) + 5;
  
  // Qual o valor atualizado dessa variável?
  console.log(valor);
  
  // Declare uma nova variável, sem valor.
  let variavel;
  // console.log(variavel);
  
  /*
  Crie uma função que adicione um valor à variável criada acima, e retorne a string:
      O valor da variável agora é VALOR.
  Onde VALOR é o novo valor da variável.
  */
  function adicionaValor(valor) {
    variavel = valor;
    return valor;
  }
  
  // Invoque a função criada acima.
  console.log(adicionaValor(25));
  
  // Qual o retorno da função? (Use comentários de bloco).
  // O retorno da função é o valor dado em parâmetro para a função, no caso 'VALOR'.
  // console.log(variavel);
  
  /*
  Crie uma função com as seguintes características:
  1. A função deve receber 3 argumentos;
  2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
      Preencha todos os valores corretamente! */
  function funcaoQualquer(a, b, c) {
    if ((a === undefined) || (b === undefined) || (c === undefined)) {
      return 'Preencha todos os valores corretamente!';
    }
//  3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
    return (a * b * c) + 2;
  }
  
  // Invoque a função criada acima, passando só dois números como argumento.
  console.log(funcaoQualquer(1, 2));

  // Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
  // Preencha todos os valores corretamente!
  
  // Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
  console.log(funcaoQualquer(1, 2, 3));
  
  // Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
  // 8
  
  /*
  Crie uma função com as seguintes características:
  1. A função deve receber 3 argumentos.
  2. Se somente um argumento for passado, retorne o valor do argumento.
  3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
  4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
  5. Se nenhum argumento for passado, retorne o valor booleano `false`.
  6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
  */
 //1. A função deve receber 3 argumentos.
  function tresArgs(a, b, c){
    //Se somente um argumento for passado, retorne o valor do argumento.
    if (a !== undefined && b === undefined && c === undefined) {
      return a;
    //Se dois argumentos forem passados, retorne a soma dos dois argumentos.  
    } else if (a !== undefined && b !== undefined && c === undefined) {
      return a + b;
    //4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
    } else if (a !== undefined && b !== undefined && c !== undefined){
      return (a + b) / c;
    //Se nenhum argumento for passado, retorne o valor booleano `false`.
    } else if (a === undefined && b === undefined && c === undefined) {
      return false;
    //E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
    } else {
      return null;
    }
  }

  // Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

  // nenhum arg
  console.log(tresArgs());
 
  // um arg
  console.log(tresArgs(3));

  // dois args
  console.log(tresArgs(3, 2));

  // tres args
  
  console.log(tresArgs(3, 2, 2));