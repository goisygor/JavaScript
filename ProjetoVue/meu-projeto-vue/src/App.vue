<template>
  <div id="app">
    <header>
      <h1>Meu Catálogo</h1>
      <button @click="alternarPagina">Alternar Página</button>
    </header>
    <main>
      <div v-if="paginaAtiva === 'filmes'">
        <CatalogoDeFilmes />
      </div>
      <div v-else>
        <CatalogoDeLivro />
      </div>
    </main>
  </div>
</template>
  
<script>
import CatalogoDeFilmes from "@/components/CatalogoDeFilmes.vue";
import CatalogoDeLivro from "@/components/CatalogoDeLivro.vue";

export default {
  components: {
    CatalogoDeFilmes,
    CatalogoDeLivro
  },
  data() {
    return {
      paginaAtiva: "filmes" // Inicia com a página de filmes ativa
    };
  },
  methods: {
    alternarPagina() {
      this.paginaAtiva = this.paginaAtiva === "filmes" ? "livros" : "filmes";
    }
  }
};
</script>
  
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

header {
  background-color: #35495e;
  color: #fff;
  padding: 10px 0;
}

button {
  background-color: #007BFF;
  color: #fff;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
}
</style>
