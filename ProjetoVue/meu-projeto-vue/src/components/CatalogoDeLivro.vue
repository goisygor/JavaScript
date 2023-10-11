<template>
    <div class="catalogo-livros">
        <h2>Catálogo de Livros</h2>
        <input v-model="novoLivro" @keyup.enter="adicionarLivro" placeholder="Digite um novo Livro" />
        <button @click="adicionarLivro" class="adicionar-button">Adicionar Livro</button>
        <ul class="livros-list">
            <li v-for="(livro, index) in livros" :key="index" class="livro-item">
                <div>
                    <span>{{ livro.titulo }}</span>
                    <button @click="alternarStatus(livro)" class="status-button">
                        {{ livro.lidos ? 'Não Lido' : 'Lido' }}
                    </button>
                </div>
                <button @click="removerLivro(index)" class="excluir-button">Excluir</button>
                <button @click="marcarComoLido(index)" class="lido-button" :class="{ 'lido': livro.lidos, 'nao-lido': !livro.lidos }">
                    Lido
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            novoLivro: "",
            livros: [],
        };
    },
    methods: {
        adicionarLivro() {
            if (this.novoLivro.trim() !== "") {
                this.livros.push({ titulo: this.novoLivro, lidos: false });
                this.novoLivro = "";
            }
        },
        alternarStatus(livro) {
            livro.lidos = !livro.lidos;
        },
        removerLivro(index) {
            this.livros.splice(index, 1);
        },
        marcarComoLido(index) {
            this.livros[index].lidos = true;
        },
    },
};
</script>

<style scoped>
.catalogo-livros {
    margin: 20px;
}

.livros-list {
    list-style-type: none;
    padding: 0;
}

.livro-item {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.adicionar-button, .status-button, .excluir-button, .lido-button {
    background-color: #007BFF;
    color: #fff;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    margin: 5px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.adicionar-button:hover, .status-button:hover, .excluir-button:hover, .lido-button:hover {
    background-color: #0056b3;
}

.lido {
    background-color: #4CAF50; /* Verde */
}

.nao-lido {
    background-color: #FF5722; /* Laranja */
}
</style>
