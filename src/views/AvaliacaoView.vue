<script setup>
import { coffeA } from '@/data/coffe';
import ListaCoffe from '@/components/ListaCoffe.vue';
import CoffeForme from '@/components/CoffeForme.vue';
import AppFootter from '@/components/AppFootter.vue';
import ilustracaoPaisagem from '@/assets/casa.png';
import star from '@/assets/star.png';
</script>

<template>
  <h2 class="titulo-pagina">
    Avaliações de Cafés
  </h2>
  <p class="subtitulo-pagina">Veja os cafés já avaliados e adicione uma nova avaliação.</p>

  <div class="layout">
    <div class="lista-avaliados">
      <h3>Cafés Avaliados ({{ coffeA.length }})</h3>

      <ListaCoffe
        v-for="(cafe, index) in coffeA"
        :key="index"
        :nome="cafe.nome"
        :produtor="cafe.produtor"
        :data="cafe.data"
        :media="cafe.media"
      />

      <div v-if="coffeA.length === 0" class="vazio">
        Nenhum café avaliado ainda.<br>
        Adicione sua primeira avaliação ao lado.
      </div>
    </div>

    <CoffeForme />
  </div>

  <AppFootter
    :icon="star"
    titulo="Dicas"
    :dicas="[
      'Todas as notas devem estar entre 0 e 10.',
      'A média será atualizada automaticamente conforme você altera as notas.',
      'Após salvar, o café será adicionado à lista e ao ranking automaticamente.'
    ]"
    :ilustracao="ilustracaoPaisagem"
  />
</template>

<style scoped>
.titulo-pagina {
  font-size: 1.3rem;
  font-weight: bolder;
  margin-bottom: 0.2rem;
}

.subtitulo-pagina {
  color: #8A8378;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.layout {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

.lista-avaliados {
  flex: 1;
  border: solid #EFE9E4 1px;
  border-radius: 10px;
  padding: 1rem;
}

.lista-avaliados h3 {
  font-size: 1rem;
  font-weight: bolder;
  margin-bottom: 1rem;
}

.vazio {
  text-align: center;
  color: #8A8378;
  font-size: 0.85rem;
  border: dashed #EFE9E4 1px;
  border-radius: 8px;
  padding: 1.5rem;
  line-height: 1.6;
}
</style>
