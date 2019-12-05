<template>
  <form @submit.prevent="salvarLivro">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Título</label>
        <input
          type="text"
          placeholder="Título"
          v-model="modelo.titulo"
          name="titulo"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label>Data da Publicação</label>
        <input
          type="date"
          class="form-control"
          placeholder="Data"
          v-model="modelo.dataPublicacao"
          name="dataPublicacao"
        />
      </div>
      <div class="form-group">
        <label>Número de Páginas</label>
        <input
          type="number"
          class="form-control"
          placeholder="Número de Páginas"
          v-model="modelo.numeroPaginas"
          name="numeroPaginas"
        />
      </div>
      <div class="form-group">
        <label>Preço</label>
        <input
          type="number"
          class="form-control"
          placeholder="Preço"
          v-model="modelo.preco"
          name="preco"
        />
      </div>
      <div class="form-group">
        <label>Autores</label>
        <!-- <span>{{modelo.autores}}</span> -->
        <select type="text" class="form-control" v-model="modelo.autores" name="autores" multiple>
          <option v-for="autor in autores" :key="autor.autorID" :value="autor">{{autor.nome}}</option>
        </select>
      </div>
      <div class="form-group">
        <label>Editora</label>
        <select type="text" class="form-control" v-model="modelo.editora" name="editora">
          <option v-for="editora in editoras" :key="editora.editoraID" :value="editora" >{{editora.nome}}</option>
        </select>
        <p>Editora Atual: <span>{{modelo.editora.nome}}</span></p>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="form-group new-button">
        <button class="button">
          <i class="fa fa-pencil"></i>
          <!-- Renderização condicional para texto do botão -->
          <span v-if="estaEditando">Atualiza Livro</span>
          <span v-else>Adiciona Livro</span>
        </button>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  props: ["modelo", "estaEditando"],
  computed: {
    autores() {
      return this.$store.getters.todosAutores;
    },
    editoras() {
      return this.$store.getters.todasEditoras;
    }
  },
  created() {
    this.$store.dispatch("todosAutores");
    this.$store.dispatch("todasEditoras");
  },
  methods: {
    salvarLivro() {
      this.$emit("salvar-livro", this.modelo);
    }
  }
};
</script>

