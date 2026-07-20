<script setup>
defineProps(['nome','produtor','data','media'])
import SeedIcon from '@iconify-vue/mdi/seed';
</script>

<template>
  <div class="item-cafe">
    <div class="imagem">
      <SeedIcon width="20px" style="color: #A9713F;" />
    </div>
    <div class="informacoes">
      <h3>{{ nome }}</h3>
      <p>Produtor: {{ produtor }}</p>
      <p>Avaliado em: {{ data }}</p>
    </div>
    <div class="nota">
      <p>Média SCA</p>
      <h3>{{ media }}</h3>
    </div>
  </div>
</template>

<style scoped>
.item-cafe {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border: solid #EFE9E4 1px;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  margin-bottom: 0.75rem;
  background: #FCFAF8;
}

.imagem {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: #F6E9DB;
  flex-shrink: 0;
}

.informacoes {
  flex: 1;
  min-width: 0;
}

.informacoes h3 {
  font-size: 0.95rem;
  font-weight: bolder;
  margin-bottom: 0.15rem;
}

.informacoes p {
  font-size: 0.8rem;
  color: #8A8378;
  margin: 0;
  line-height: 1.4;
}

.nota {
  text-align: right;
  flex-shrink: 0;
}

.nota p {
  font-size: 0.75rem;
  color: #8A8378;
  margin: 0 0 0.25rem 0;
}

.nota h3 {
  font-size: 1.2rem;
  font-weight: bolder;
  color: #19500D;
}
</style>
