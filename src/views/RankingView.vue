<script setup>
import { computed } from 'vue';
import { coffeA } from '@/data/coffe';
import { cafesParticipantes } from '@/Utils/Homeutils';
import AppFootter from '@/components/AppFootter.vue';
import ilustracaoMontanhas from '@/assets/casa.png';
import iconMedalha from '@/assets/medalha.png';
import TrophyIcon from '@iconify-vue/mdi/trophy';
import ChartIcon from '@iconify-vue/mdi/chart-bar';

const cafesOrdenados = computed(() => {
  return [...coffeA].sort((a, b) => b.media - a.media);
});

function estrelas(media) {
  return Math.round(media / 2);
}
</script>

<template>
  <div class="topo-ranking">
    <div class="titulo-ranking">
      <TrophyIcon height="1.6rem" style="color: #6A452C;" />
      <div>
        <h2>Ranking Geral</h2>
        <p>Classificação dos melhores cafés do campeonato.</p>
      </div>
    </div>

    <div class="card-total">
      <ChartIcon height="1.2rem" style="color: #6A452C;" />
      <div>
        <p>Total de Cafés Avaliados</p>
        <h3>{{ cafesParticipantes }}</h3>
      </div>
    </div>
  </div>

  <div class="tabela-ranking">
    <div class="linha cabecalho">
      <span>Posição</span>
      <span>Café</span>
      <span>Produtor</span>
      <span>Nota Final (Média SCA)</span>
      <span>Ações</span>
    </div>

    <div
      v-for="(cafe, index) in cafesOrdenados"
      :key="cafe.id"
      class="linha"
      :class="{ 'top1': index === 0, 'top2': index === 1, 'top3': index === 2 }"
    >
      <span class="posicao">
        <span v-if="index === 0" class="medalha ouro">🥇</span>
        <span v-else-if="index === 1" class="medalha prata">🥈</span>
        <span v-else-if="index === 2" class="medalha bronze">🥉</span>
        <span v-else class="numero">{{ index + 1 }}</span>
      </span>

      <span class="cafe-nome">{{ cafe.nome }}</span>
      <span class="produtor">{{ cafe.produtor }}</span>

      <span class="nota">
        <strong>{{ cafe.media }}</strong>
        <span class="estrelas">
          <span v-for="n in 5" :key="n" :class="{ preenchida: n <= estrelas(cafe.media) }">★</span>
        </span>
      </span>

      <span>
        <button class="btn-detalhes">Ver Detalhes</button>
      </span>
    </div>
  </div>

  <AppFootter
    :icon="iconMedalha"
    titulo="Como funciona a pontuação?"
    texto="As notas são baseadas na metodologia SCA (Specialty Coffee Association). Cada critério recebe uma nota de 0 a 10 e a média final determina a classificação."
    :ilustracao="ilustracaoMontanhas"
  />
</template>

<style scoped>
.topo-ranking {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.titulo-ranking {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.titulo-ranking h2 {
  font-size: 1.3rem;
  font-weight: bolder;
}

.titulo-ranking p {
  font-size: 0.85rem;
  color: #8A8378;
}

.card-total {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  border: solid #EFE9E4 1px;
  border-radius: 8px;
  padding: 0.6rem 1rem;
}

.card-total p {
  font-size: 0.75rem;
  color: #8A8378;
}

.card-total h3 {
  font-size: 1.2rem;
  font-weight: bolder;
}

.tabela-ranking {
  border: solid #EFE9E4 1px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.linha {
  display: grid;
  grid-template-columns: 90px 1.5fr 1.5fr 1.5fr 140px;
  align-items: center;
  padding: 0.9rem 1.2rem;
  border-bottom: solid #F0EDEA 1px;
}

.cabecalho {
  font-size: 0.8rem;
  color: #8A8378;
  background: #FAF8F6;
}

.top1 { background: #FEF6DC; }
.top2 { background: #F7F7F7; }
.top3 { background: #FDF3E9; }

.medalha {
  font-size: 1.4rem;
}

.numero {
  font-weight: bolder;
  color: #8A8378;
}

.cafe-nome {
  font-weight: bolder;
}

.produtor {
  color: #8A8378;
  font-size: 0.9rem;
}

.nota {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.nota strong {
  font-size: 1.1rem;
  color: #19500D;
}

.estrelas span {
  color: #E0DAD3;
}

.estrelas span.preenchida {
  color: #E8B94A;
}

.btn-detalhes {
  border: solid #4a2a14 1px;
  background: white;
  padding: 0.4rem 0.9rem;
  border-radius: 6px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: 0.2s;
}

.btn-detalhes:hover {
  background: #FAF6F2;
}
</style>
