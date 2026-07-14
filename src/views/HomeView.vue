<script setup>

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
</style>