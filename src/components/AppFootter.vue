<script setup>
defineProps({
  icon: String,
  titulo: String,
  texto: String,
  ilustracao: String,
  dicas: Array,
})
</script>

<template>
  <div class="banner">
    <div class="conteudo">
      <img :src="icon" class="icone" alt="">
      <div class="textos">
        <p class="titulo">{{ titulo }}</p>
        <p v-if="texto" class="texto">{{ texto }}</p>
        <ul v-if="dicas" class="lista-dicas">
          <li v-for="(dica, index) in dicas" :key="index">{{ dica }}</li>
        </ul>
      </div>
    </div>
    <img :src="ilustracao" class="ilustracao" alt="">
  </div>
</template>

<style scoped>

.banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f7f1ea;
  border-radius: 8px;
  padding: 1.5rem;
}
.conteudo {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}
.icone {
  width: 15vw;
  height: auto;
}
.titulo {
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}
.ilustracao {
  width: 25vw;
}
.texto{
  font-size: 1.2rem;
}
</style>
