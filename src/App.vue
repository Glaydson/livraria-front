<template>
  <div>
    <nav>
      <div class="container">
        <ul class="nav__left">
          <!-- Links de Navegação -->
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/adminLivros">Admin Livros</router-link>
          </li>
          <li>
            <router-link to="/adminEditoras">Admin Editoras</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <router-view />
    <!-- Adiciona classes para exibir um loader -->
    <div class="overlay" v-show="showLoader">
      <div class="loading-spinner">
        <div class="dot dotOne"></div>
        <div class="dot dotTwo"></div>
        <div class="dot dotThree"></div>
      </div>
    </div>
  </div>
</template>

<script>
import toastr from "toastr";

import {
  ADICIONAR_LIVRO_SUCESSO,
  ATUALIZAR_LIVRO_SUCESSO,
  REMOVER_LIVRO_SUCESSO
} from "./store/mutation-types";

export default {
  name: "App",
  created() {
    // Subscriptions para as mutations
    this.$store.subscribe(mutation => {
      if (mutation) {
        switch (mutation.type) {
          case ADICIONAR_LIVRO_SUCESSO:
            toastr.success("Livro criado.", "Sucesso!");
            break;
          case ATUALIZAR_LIVRO_SUCESSO:
            toastr.success("Livro atualizado.", "Sucesso!");
            break;
          case REMOVER_LIVRO_SUCESSO:
            toastr.warning("Livro removido.", "Apagado!");
            break;
          default:
        }
      }
    });
  },
  computed: {
    showLoader() {
      // Carregando spinner
      return this.$store.state.showLoader;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
