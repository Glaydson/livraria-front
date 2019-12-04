/* eslint-disable no-underscore-dangle */

  export const livroGetters = {
    // Todos os livros
    todosLivros: state => state.livros,
    livro: state => state.livro,
  };

  export const autorGetters = {
    todosAutores: state => state.autores
  };

  export const editoraGetters = {
    todasEditoras: state => state.editoras
  }
  
  