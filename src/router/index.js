import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
// Imports de livros
import IndexLivros from '@/components/adminLivros/IndexLivros';
import AdminLivros from '@/components/adminLivros/AdminLivros';
import NovoLivro from '@/components/adminLivros/NovoLivro';
import Livros from '@/components/adminLivros/Livros';
import EditarLivro from '@/components/adminLivros/EditarLivro';
// Imports de editoras
import IndexEditoras from '@/components/adminEditoras/IndexEditoras';
import AdminEditoras from '@/components/adminEditoras/AdminEditoras';
import NovaEditora from '@/components/adminEditoras/NovaEditora';
import Editoras from '@/components/adminEditoras/Editoras';
import EditarEditora from '@/components/adminEditoras/EditarEditora';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/adminLivros',
      // Rotas Pai continuam tendo um componente
      component: IndexLivros,

      // Rotas filhas
      children: [
        {
          path: '',
          name: 'AdminLivrosHome',
          component: AdminLivros
        },
        {
          path: 'novo',
          name: 'Novo',
          component: NovoLivro
        },
        {
          path: 'livros',
          name: 'Livros',
          component: Livros
        },
        {
          path: 'editar/:id',
          name: 'Editar',
          component: EditarLivro
        },
      ],
    },
    {
      path: '/adminEditoras',
      // Rotas Pai continuam tendo um componente
      component: IndexEditoras,

      // Rotas filhas
      children: [
        {
          path: '',
          name: 'AdminEditorasHome',
          component: AdminEditoras
        },
        {
          path: 'novo',
          name: 'Novo',
          component: NovaEditora
        },
        {
          path: 'editoras',
          name: 'Editoras',
          component: Editoras
        },
        {
          path: 'editar/:id',
          name: 'Editar',
          component: EditarEditora
        },
      ],
    },
  ],
});