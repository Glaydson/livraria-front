import Vue from 'vue';
import Vuex from 'vuex';
import { livroGetters, autorGetters, editoraGetters } from './getters';
import { livroMutations, autorMutations, editoraMutations } from './mutations';
import { livroActions, autorActions, editoraActions } from './actions';

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        // ajax loader
        showLoader: false,
        // todos os livros
        livros: [],
        // livro selecionado
        livro: {},
        // todos os autores
        autores: [],
        // todas as editoras
        editoras: []
    },
    // GETTERS
    getters: Object.assign({}, livroGetters, autorGetters, editoraGetters),
    mutations: Object.assign({}, livroMutations, autorMutations, editoraMutations),
    actions: Object.assign({}, livroActions, autorActions, editoraActions),
});
