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
    console.log(this.$route.params.id);
    this.$store.dispatch("livroPorId", this.$route.params.id);
  },
  computed: {
    /* modelo() {
      const livroPorId = this.$store.getters.livro;
      // eslint-disable-next-line
      console.log(this.$store.getters.livro);
      return Object.assign({}, livroPorId);
    } */
    modelo: {
      get() {
        const livroPorId = this.$store.getters.livro;
        // eslint-disable-next-line
        console.log(this.$store.getters.livro);
        return Object.assign({}, livroPorId);
      },
      set(novoValor){
        return novoValor;
      }
    }
  },
  methods: {
    atualizarLivro(modelo) {
      this.$store.dispatch("atualizarLivro", modelo);
      this.$store.dispatch("todosLivros");
      this.$router.push('../livros');
    }
  },
  components: {
    "livro-form": LivroForm
  }
};
</script>