import axios from 'axios';
import { API_BASE } from '../config';
import {
  TODOS_LIVROS,
  TODOS_LIVROS_SUCESSO,
  LIVRO_POR_ID,
  LIVRO_POR_ID_SUCESSO,
  ADICIONAR_LIVRO,
  ADICIONAR_LIVRO_SUCESSO,
  TODOS_AUTORES,
  TODOS_AUTORES_SUCESSO,
  TODAS_EDITORAS,
  TODAS_EDITORAS_SUCESSO,
  REMOVER_LIVRO,
  REMOVER_LIVRO_SUCESSO
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
  removerLivro({ commit }, payload) {
    commit(REMOVER_LIVRO);
    // Remove o livro usando a API
    axios.delete(`${API_BASE}/livros/delete/${payload}`, payload).then((response) => {
      //console.debug('response', response.data);
      commit(REMOVER_LIVRO_SUCESSO, response.data);
    });
  },
};

export const autorActions = {
  todosAutores({ commit }) {
    commit(TODOS_AUTORES);
    axios.get(`${API_BASE}/autores/todos`).then((response) => {
      commit(TODOS_AUTORES_SUCESSO, response.data);
    });
  },
};

export const editoraActions = {
  todasEditoras({ commit }) {
    commit(TODAS_EDITORAS);
    axios.get(`${API_BASE}/editoras/todos`).then((response) => {
      commit(TODAS_EDITORAS_SUCESSO, response.data);
    });
  },
};

