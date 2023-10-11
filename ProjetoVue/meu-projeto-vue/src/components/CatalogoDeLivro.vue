<template>
    <div class="catalogo-Livros">
        <h2>Catálogo de Livros</h2>
        <input v-model="novoLivro" @keyup.enter="adicionarLivro" placeholder="Digite um novo Livro" />
        <ul>
            <li v-for="(livros, index) in livros" :key="index">
                {{ livros.titulo }}
                <button @click="alternarStatus(livros)">Marcar como {{
                    livros.assistido ? 'Não Assistido' : 'Assistido' }}</button>
            </li>
        </ul>
    </div>
</template>
    
<script>
export default {
    data() {
        return {
            novolivros: "",
            livros: [],
        };
    },
    methods: {
        adicionarlivros() {
            if (this.novolivros.trim() !== "") {
                this.livros.push({ titulo: this.novolivros, lidos: false });
                this.novolivros = "";
            }
        },
        alternarStatus(livros) {
            livros.lidos = !livros.lidos.trim();
        },
    },
};
</script>
    
<style scoped>
.catalogo-livros {
    margin: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin: 10px 0;
}
</style>