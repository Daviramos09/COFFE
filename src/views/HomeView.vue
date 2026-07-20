<script setup>
 import CoffeCard from '@/components/CoffeCard.vue';
 import ClipboardLineIcon from '@iconify-vue/mingcute/clipboard-line';
 import AppFootter from '@/components/AppFootter.vue';
 import ilustracaoPaisagem from '@/assets/casa.png'
 import iconMegaFone from '@/assets/mefone.png'
</script>
<template>
    <div class="banner">
      <div class="cafe">
      <img src="/src/assets/cofe.png" alt="imagem-xicara-coffe" >
      </div>
      <div class="text">

        <span><p>Campeonato de Avaliação <br> De Qualidade de Café</p></span>
        <p>Avalie compare e descubra os melhores <br>cafés especiais.</p>
      </div>
    </div>
 <CoffeCard> </CoffeCard>
 <div class="botao">
    <div class="botao">
    <router-link to="/avaliacoes" class="botao-link">
      <ClipboardLineIcon height="2rem" />
      Ver Avaliações
    </router-link>
  </div>
 </div>
<AppFootter :icon="iconMegaFone"
    titulo="Participe e faça a diferença!"
    texto="Cada avaliação ajuda a reconhecer o trabalho dos produtores e a valorizar o café de qualidade."
    :ilustracao="ilustracaoPaisagem">

</AppFootter>
</template>
<style scoped>
.banner {
    background-color: #fff2D5;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 2rem ;
    margin: 1rem 5rem 0rem 5rem;
    border-radius: 10px;
}
.cafe img {
    width: 25vw;
    height: auto;
}
.text span p {
  font-size: 2vw;
      border-bottom: 2px solid #333;

}
.text p {
 text-align: center;
 font-size: 1vw;
 font-weight: 1vw;
}
.botao button{
align-items: center;
background-color: #6A452C;
height: 3rem;
width: 17rem;
text-align: center;
font-size: 1rem;
color: white;
margin: 1rem 34rem;
border-radius: 5px;
}
.botao {
  display: flex;
  justify-content: center;
}

.botao-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #6A452C;
  height: 3rem;
  width: 17rem;
  text-align: center;
  font-size: 1rem;
  color: white;
  margin: 1rem 0;
  border-radius: 5px;
  text-decoration: none; 
  cursor: pointer;
}
</style>
