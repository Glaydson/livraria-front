<template>
  <div>
    <div class="title">
      <h1 style="text-align: left">Edição de Livro</h1>
    </div>
    <livro-form @salvar-livro="atualizarLivro" :modelo="modelo" :estaEditando="true"></livro-form>
  </div>
</template>
<script>
import LivroForm from "../../components/livros/LivroForm";

export default {
  created() {
    // eslint-disable-next-line
    console.log(this.modelo);
    if (!this.modelo.titulo) {
      this.$store.dispatch("livroPorId", this.$route.params.id);
    }
  },
  computed: {
    modelo() {
      //const livroPorId = this.$store.getters.livro;
      // eslint-disable-next-line
      console.log(this.$store.getters.livro);
      //return Object.assign({}, livroPorId);
      return this.$store.getters.livro;
    }
  },
  methods: {
    atualizarLivro(modelo) {
      this.$store.dispatch("atualizarLivro", modelo);
      this.modelo = {};
    }
  },
  components: {
    "livro-form": LivroForm
  }
};
</script>