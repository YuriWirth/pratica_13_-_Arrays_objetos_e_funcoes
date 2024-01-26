// 1. Deve ser desenvolvido um programa que realize um CRUD de carros.
// Os inputs devem ser feitos através do PROMPT do HTML. O
// funcionamento deve ser o seguinte:
// Ao abrir a página, o sistema deve apresentar a seguinte tela:

// Bem-vindo ao sistema de CRUD de veículos:

// No momento, o sistema tem X carros cadastrados

// Escolha uma das opções para interagir com o sistema:

//

// Regras:
// - Os dados de um veículo são: identificador, modelo, marca,
// // ano, cor, preco
// - A opção de filtro deve ser por marca e ordenada pelo preco
// - A lista de veículos deve estar ordenada pelo preco.
// - Só deve ser possível atualizar a cor e o preço do veículo.

let menu = 1;
let veiculos = [];
// 1 - Cadastrar veículo
// -> Ao entrar nesta opção o sistema deve pedir os seguintes
// dados: modelo, marca, ano, cor e preco.
// -> O veículo deve ser adicionado na lista de veículos que
// armazena todos os veículos cadastrados
// -> Todo veículo deve ter um identificador único. Este
// identificador deve ser gerado de forma automática
function case1() {
  let veiculo = {
    id: veiculos.length + 1,
    modelo: prompt("Digite o modelo do veículo:"),
    marca: prompt("Digite a marca do veículo:"),
    ano: prompt("Digite o ano do veículo:"),
    cor: prompt("Digite a cor do veículo:"),
    preco: prompt("Digite o preço do veículo:"),
  };
  veiculos.push(veiculo);
}
// 2 - Listar todos os veículos
// -> Ao entrar nesta opção o sistema deve listar os veículos
// com o seguinte layout:
// ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
// Preço: R$40.000
// ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
// Preço: R$40.000
function case2() {
  veiculos.map((veiculo) => {
    veiculo.id,
      veiculo.modelo,
      veiculo.marca,
      veiculo.ano,
      veiculo.cor,
      veiculo.preco;
    console.log(
      "ID:",
      veiculo.id,
      "|",
      "Modelo:",
      veiculo.modelo,
      "|",
      "Marca:",
      veiculo.marca,
      "|",
      "Ano:",
      veiculo.ano,
      "|",
      "Cor:",
      veiculo.cor,
      "|",
      "Preço:",
      veiculo.preco
    );
  });
}
// 3 - Filtrar veículos por marca
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar a marca que quer filtrar
// -> Deve ser listado os veículos que forem da mesma marca
// -> A lista deve ter o seguinte layout:
// ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
// ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
function case3() {
  let veiculosFiltrados = prompt(
    "Digite a Marca do Veiculo que voce deseja filtrar"
  );

  veiculos
    .filter((veiculo) => {
      return veiculo.marca === veiculosFiltrados;
    })
    .map((veiculo) => {
      veiculo.id;
      veiculo.modelo;
      veiculo.cor;
      veiculo.preco;
      console.log(veiculo.id, veiculo.modelo, veiculo.cor, veiculo.preco);
    });
}
// 4 - Atualizar veículo
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar o IDENTIFICADOR do veículo
// -> O Sistema deve verificar se o veículo existe ou não e
// mostrar a seguinte mensagem caso o veículo não exista:
// "Veículo, não encontrado. O usuário deve voltar para o menu
// inicial depois"
// -> Se o veículo existir, o sistema deve permitir que o usuário
// atualize somente a cor e o preço.
function case4() {
  let veiculoAtualizado = Number(
    prompt("Digite o  ID do Veiculo que voce deseja atualizar ")
  );
  let veiculoEncontrado = veiculos.filter((veiculo) => {
    return veiculo.id === veiculoAtualizado;
  });

  if (veiculoEncontrado.find((veiculo) => veiculo.id === veiculoAtualizado)) {
    veiculos.map((veiculo) => {
      veiculo.cor = prompt("digite a nova cor do seu veiculo");
      veiculo.preco = prompt("Digite o novo preco do seu veiculo");
      console.log(veiculo.cor, veiculo.preco);
    });
  } else {
    alert(
      "Veículo, não encontrado. O usuário deve voltar para o menu inicial "
    );
    return;
  }
  // let VeiculoCopiado ={...veiculos}
}
// 5 - Remover veículo

// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar o IDENTIFICADOR do veículo
// -> O Sistema deve verificar se o veículo existe ou não e
// mostrar a seguinte mensagem caso o veículo não exista:
// "Veículo, não encontrado. O usuário deve voltar para o menu
// inicial depois"
// -> Se o veículo existir, o sistema deve remover o veículo
function case5() {
  let veiculoIdentificador = Number(
    prompt("Digite o  ID do Veiculo que voce deseja atualizar ")
  );
  let ConsultarId = veiculos.filter((veiculo) => {
    return veiculo.id === veiculoIdentificador;
  });
  let apagarId = veiculos.findIndex((veiculo) => veiculo.id);
  if (ConsultarId.find((veiculo) => veiculo.id === veiculoIdentificador)) {
    veiculos.splice(apagarId, 1);
    console.log("voce apagou seu veiculo");
  } else {
    alert(
      "Veículo, não encontrado. O usuário deve voltar para o menu inicial "
    );
  }
  return;
}

// 6 - Sair do sistema
function lacoDeRepeticao() {
  while (true) {
    const opcao = Number(
      prompt(
        "Escolha uma opção:\n1 - Cadastrar veículo\n2 - Listar veículos\n3 - Filtrar veículos por marca\n4 - Atualizar veículo\n5 - Remover veículo\n6 - Sair"
      )
    );
    switch (opcao) {
      case 1:
        case1();
        break;
      case 2:
        case2();
        break;
      case 3:
        case3();
        break;
      case 4:
        case4();
        break;
      case 5:
        case5();
        break;
      case 6:
        return false;
        break;
      default:
        alert("Opcao invalida");
        break;
    }
  }
}

lacoDeRepeticao();
