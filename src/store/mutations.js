import {
    TODOS_LIVROS,
    TODOS_LIVROS_SUCESSO,
    LIVRO_POR_ID,
    LIVRO_POR_ID_SUCESSO,
    ADICIONAR_LIVRO,
    ADICIONAR_LIVRO_SUCESSO,
    ATUALIZAR_LIVRO,
    ATUALIZAR_LIVRO_SUCESSO,
    TODAS_EDITORAS,
    TODAS_EDITORAS_SUCESSO,
    TODOS_AUTORES,
    TODOS_AUTORES_SUCESSO,
    REMOVER_LIVRO,
    REMOVER_LIVRO_SUCESSO
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
    [ATUALIZAR_LIVRO]: (state) => {
        state.showLoader = true;
    },
    [ATUALIZAR_LIVRO_SUCESSO]: (state, payload) => {
        state.showLoader = false;
        state.livros = state.livros.map((l) => {
            if (l.livroID === payload.livroID) {
                payload = {
                    ...payload,
                    editora: state.editoras.filter(x => x.editoraID === payload.editora)[0],
                    autores: state.autores.filter(x => x.autorID === payload.autores)
                };
                return payload;
            }
            return l;
        });
    },
    [REMOVER_LIVRO]: (state) => {
        state.showLoader = true;
    },
    [REMOVER_LIVRO_SUCESSO]: (state, payload) => {
        state.showLoader = false;
        const index = state.livros.findIndex(l => l.livroID === payload);
        state.livros.splice(index, 1);
    },
};

export const autorMutations = {
    [TODOS_AUTORES](state) {
        state.showLoader = true;
    },
    [TODOS_AUTORES_SUCESSO](state, payload) {
        state.showLoader = false;
        state.autores = payload;
    },
};

export const editoraMutations = {
    [TODAS_EDITORAS](state) {
        state.showLoader = true;
    },
    [TODAS_EDITORAS_SUCESSO](state, payload) {
        state.showLoader = false;
        state.editoras = payload;
    },
};
