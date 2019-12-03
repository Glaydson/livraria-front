import Vue from 'vue';
import Vuex from 'vuex';
import { livroGetters } from './getters';
import { livroMutations } from './mutations';
import { livroActions } from './actions';

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

    },
    // GETTERS
    getters: Object.assign({}, livroGetters),
    mutations: Object.assign({}, livroMutations),
    actions: Object.assign({}, livroActions),


});
