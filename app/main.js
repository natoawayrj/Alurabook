let livros = []
const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()
const elementoParaInserirLivros = document.getElementById('livros')

async function getBuscarLivrosDaAPI(){
  const res = await fetch(endPointDaAPI)
  livros = await res.json()
  livrosComDesconto = aplicarDesconto(livros)
  
  exibirOsLivrosNaTela(livrosComDesconto)
}

