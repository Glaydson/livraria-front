<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Bem Vindo ao Front-End da Livraria usando Vue.js',
      };
    },
  };
</script>