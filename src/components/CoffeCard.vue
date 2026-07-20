<script setup>
defineProps(['media', 'nome', 'produtor', 'data']);
import { cafesParticipantes } from '@/Utils/Homeutils';
import { cafeMaiorNota } from '@/Utils/Homeutils';
import { cafeRecente } from '@/Utils/Homeutils';
</script>
 <template>
   <ul class="cards">
    <li class="avaliados">
      <div class="peoples">
       <img src="@/assets/users.png" alt="logo-pessoas">
      </div>
      <div class="textos-avaliados">
         <p class="titulo-avaliados">Total de Cafés Avaliados</p>
      <P >{{ cafesParticipantes}}</P>
      <p>Cafés</p>
      </div>
    </li>
    <li class="maior-nota">
     <div class="trophie">
       <img src="@/assets/trophie.png" alt="logo-troféu">
     </div>
     <div class="textos-trofeu">
      <p>Café Com Maior Nota</p>
      <p>{{ cafeMaiorNota.media }}</p>
      <p>{{ cafeMaiorNota.nome }}</p>
      <p>{{ cafeMaiorNota.produtor }}</p>
     </div>
    </li>
    <li class="ultimo">
      <div class="clock">
       <img src="@/assets/clock.png" alt="logo-troféu">
      </div>
      <div>
        <p>Última Avaliação</p>
        <p>{{ cafeRecente.media }}</p>
        <p>{{ cafeRecente.nome }}</p>
        <p>{{ cafeRecente.data }}</p>
      </div>
    </li>
</ul>
</template>


<style scoped>
.cards {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 1rem 11rem;
}
.avaliados{
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
 border: 1px solid black;
  border-radius: 8px;
  padding: 1rem;
  width: 20vw;
  height: 10vw;
}
.maior-nota{
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
  border: 1px solid black;
  border-radius: 8px;
  padding: 1rem;
    width: 20vw;
  height: 10vw;
}
.ultimo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
  border: 1px solid black;
  border-radius: 8px;
  padding: 1rem;
    width: 20vw;
  height: 10vw;
}
.clock {
  width: 18vw;
  height: auto;
}
.trophie{
  width: 18vw;
  height: auto;
}
.peoples{
  width: 18vw;
  height: auto;
}
.peoples img{
  width: 100%;
  height: 100%;
}
.trophie img{
  width: 100%;
  height: 100%;
}
.clock img {
  width: 100%;
  height: 100%;
}
.textos-avaliados{
  font-size: 1rem;
}
</style>
