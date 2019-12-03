import axios from 'axios';
import { API_BASE } from '../config';
import {
    TODOS_LIVROS,
    TODOS_LIVROS_SUCESSO,
    LIVRO_POR_ID,
    LIVRO_POR_ID_SUCESSO,
    ADICIONAR_LIVRO,
    ADICIONAR_LIVRO_SUCESSO
} from './mutation-types';

export const livroActions = {
    todosLivros({ commit }) {
      commit(TODOS_LIVROS);
      axios.get(`${API_BASE}/livros/todos`).then((response) => {
        commit(TODOS_LIVROS_SUCESSO, response.data);
      });
    },
    livroPorId({ commit }, payload) {
      commit(LIVRO_POR_ID);
      axios.get(`${API_BASE}/livros/${payload}`).then((response) => {
        commit(LIVRO_POR_ID_SUCESSO, response.data);
      });
    },
    adicionarLivro({ commit }, payload) {
          commit(ADICIONAR_LIVRO);
          // Cria um novo livro usando a API
          axios.post(`${API_BASE}/livros/novo`, payload).then((response) => {
              commit(ADICIONAR_LIVRO_SUCESSO, response.data);
          });
      },
  };
  
