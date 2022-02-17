import itens from './model/dataset.js';
import foodsModel from './model/foods.js';
/*import dos dataset.js e model food.js para o script*/
    
</script>

foodsModel.load(itens);
let foods = foodsModel.readAll();
/* O foodModel.load pegar itens do cadarpio e manipular pelo script */
    
</script>

function initFoodsCard () {
    /*Uma init é uma função específica pode ser usada para inicializar toda a página da Web*/
  
  for (let item of foods) {
      /*Uma expressão let limita o escopo de uma variável declarada somente para aquela expressão específica*/

    const view = createFoodCardItem(item);
    /*const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída*/
  
    //let itensCardapio = document.querySelector('.itens-cardapio');
    /* o primeiro elemento do documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que corresponde ao grupo especificado de especificadores*/
    let itensCardapio = document.getElementById("itens-cardapio");
    /* elemento é uma referência a um objeto Element, ou null se um com o ID especificado não contido neste documento.
idé uma string di procuradas e únicas representando o elemento sendo representado*/
    itensCardapio.insertAdjacentHTML('beforeend', view);
  } /*é a posição em relação ao elemento, Dentro do elemento, após seu último filho childNode, Analisa o texto especificado como HTML ou XML e insere os nós que resulta na árvore DOM em posição especificada.*/
}

function createFoodCardItem (item) {

    const view = `<div class="col-3 card my-1 mx-1 py-1">
                    <img src="${item.imagem}" class="card-img-top" alt="...">
  
                    <div class="card-body">
                      <h5 class="card-title">${item.nome}</h5>
                      <p class="card-text">${item.descricao}</p>
                      <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                  </div>`;
                  /* da linha 33 ate 41 é Um card é um container de conteúdo flexível e extensível. Ele tem opções para cabeçalhos e rodapés, uma larga variedade de conteúdo, cores de background contextuais e opções de display poderosas,Cards suportam uma larga variedade de conteúdos, incluindo imagens, texto, grupo de listas, links e muito mais. Abaixo, temos oquê é suportado*/

    return view;
    /* retonar os itens*/
}


// Captar o evento de submissão do formulário e adicionar o item no cartão (card).
// const foodForm = document.querySelector('#foodForm');
const foodForm = document.getElementById("foodForm");
/* elemento é uma referência a um objeto Element, ou null se um com o ID especificado não contido neste documento.

foodForm.onsubmit = function (event) {
  // Previnir que o modal fique abrindo e fechando em loop.
  event.preventDefault();
  /*Cancela o evento se for cancelável, sem parar a previsto do mesm*/

  let newFood = Object.fromEntries(new FormData(foodForm));
  /*transforma uma lista de pares chave-valor em um objeto, object.fromEntries*/
  foodsModel.create(newFood);

  const foodCard = createFoodCardItem(newFood);
  /*const cria uma variável cujo o valor é fixo, somente leitura nessa caso criar um cardIten const: foodCard*/
  let itensCardapio = document.getElementById("itens-cardapio");
  /* chamar itens do cardapio no html atraves do document.getElementById */ 
  itensCardapio.insertAdjacentHTML('beforeend', foodCard);
}  /*é a posição em relação ao elemento, Dentro do elemento, após seu último filho childNode, Analisa o texto especificado como HTML ou XML e insere os nós que resulta na árvore DOM em posição especificada.*/
}

initFoodsCard();
