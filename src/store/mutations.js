import {
    TODOS_LIVROS,
    TODOS_LIVROS_SUCESSO,
    LIVRO_POR_ID,
    LIVRO_POR_ID_SUCESSO,
    ADICIONAR_LIVRO,
    ADICIONAR_LIVRO_SUCESSO
} from './mutation-types';

export const livroMutations = {
    [TODOS_LIVROS](state) {
        state.showLoader = true;
    },
    [TODOS_LIVROS_SUCESSO](state, payload) {
        state.showLoader = false;
        state.livros = payload;
    },
    [LIVRO_POR_ID](state) {
        state.showLoader = true;
    },
    [LIVRO_POR_ID_SUCESSO](state, payload) {
        state.showLoader = false;
        state.livro = payload;
    },
    [ADICIONAR_LIVRO]: (state) => {
        state.showLoader = true;
    },
    [ADICIONAR_LIVRO_SUCESSO]: (state, payload) => {
        state.showLoader = false;
        state.livros.push(payload);
    },
};

