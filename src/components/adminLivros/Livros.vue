<template>
  <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
    <div class="title">
      <h1>Livros Disponíveis</h1>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Título</th>
          <th>Data da Publicação</th>
          <th>Número de Páginas</th>
          <th>Preço</th>
          <th>Autores</th>
          <th>Editora</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="livro in livros" :key="livro.livroID">
          <td>{{livro.titulo}}</td>
          <td>{{livro.dataPublicacao}}</td>
          <td>{{livro.numeroPaginas}}</td>
          <td>R$ {{livro.preco}}</td>
          <td>
            <ul v-for="autor in livro.autores" :key="autor.autorID">
              <li>{{autor.nome}}</li>
            </ul>
          </td>
          <td>{{livro.editora.nome}}</td>
          <td>
            <router-link :to="'/adminLivros/editar/'+livro.livroID">
              <i class="fa fa-pencil-square-o"></i>
            </router-link>
          </td>
          <td>
            <a @click="removerLivro(livro.livroID)">
              <i class="fa fa-trash"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  computed: {
    livros() {
      return this.$store.getters.todosLivros;
    }
  },
  created() {
    this.$store.dispatch("todosLivros");
  },
  methods: {
    removerLivro(id) {
      this.$store.dispatch("removerLivro", id);
    }
  }
};
</script>

